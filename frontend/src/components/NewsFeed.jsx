import React, { useEffect, useState } from "react";
import axios from "axios";
import Queries from "./Queries";
import { VStack,Grid, GridItem , Heading, Text, Link, Image, Divider, Box,Button  } from '@chakra-ui/react';
import { articles } from "../static/constants"
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from 'framer-motion';


const NewsFeed = () => {
  const [newsData, setNewsData] = useState(articles);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedCountry, setSelectedCountry] = useState("in");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  const getNewsFeed = async () => {
    try {
      const queryParams = {
        category: selectedCategory ,
        lang:  selectedCountry ,
        country: selectedLanguage,
      };
      const response = await axios.get("http://localhost:8080/newsfeed", {
        params: queryParams,
      });
      console.log(response.data.articles);
      setNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNewsFeed();
  }, []);

  const AddItem= async (newsItem) =>{
    //  alert(JSON.stringify(newsItem));    
     try {
        let ItemDetails = newsItem;
        ItemDetails.email= user.email;
        ItemDetails.name = user.name;
        const response= await fetch(`http://localhost:8080/feed/savefeed`, {     
         method : 'POST',
         headers : {
           'Content-type' : 'application/json'
         },
         body : JSON.stringify(ItemDetails)
        })
        console.log(response );
        if(response.status==200){
          alert("Saved !!")
        }
     } catch (error) {
        console.log("error while saving details")
     }
  }

  
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Queries  
       selectedCategory={selectedCategory}
       selectedCountry={selectedCountry}
       selectedLanguage={selectedLanguage}
       handleLanguageChange={handleLanguageChange}
       handleCountryChange={handleCountryChange}
       handleCategoryChange={handleCategoryChange}
      ></Queries>
      {/* <VStack spacing={4} align="stretch"> */}
      <Heading size={["sm", "md","lg","2xl"]}  m={5}>Latest News Headlines</Heading>
      <Divider />
      <Grid  templateColumns="repeat(auto-fill, minmax(500px, 1fr))" gap={6} m={50} > 
      {newsData.length > 0 ? newsData.map((newsItem, index) => (
         <motion.div
         key={index}
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: index * 0.2 }}
         className="animated-grid-item"
       > 
        <GridItem key={index}  
        borderWidth="1px" borderRadius="md" p={4}>
          <Button  onClick={()=>  isAuthenticated && AddItem(newsItem)}> <BsFillBookmarkHeartFill/>Save in My Account</Button>
          <Heading fontSize={["23px","30px","40px"]} size="md" m={4}>{newsItem.title}</Heading>
          <Text fontSize={["14px","16px","20px"]}  m={4}>{newsItem.description}</Text>
          <Image src={newsItem.image} alt={newsItem.title} my={2} />
          <Text fontSize={["14px","16px","20px"]}>Published on: {new Date(newsItem.publishedAt).toLocaleString()}</Text>
    
          <Link href={newsItem.url}  fontSize={["14px","16px","20px"]} 
          color={"pink"} target="_blank" rel="noopener noreferrer">
            Read Full Article --^
          </Link>
          
        </GridItem>
        </motion.div>
      )) : <Text>No news found</Text>}
      </Grid>
    {/* </VStack> */}
    
    </div>
  );
};

export default NewsFeed;
