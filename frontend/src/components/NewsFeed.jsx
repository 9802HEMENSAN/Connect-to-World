import React, { useEffect, useState } from "react";
import axios from "axios";
import Queries from "./Queries";
import { Grid, GridItem , Heading, Text, Link, Image, Divider, Button  } from '@chakra-ui/react';
import { articles } from "../static/constants"
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import {motion} from "framer-motion"

const NewsFeed = () => {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [selectedCountry, setSelectedCountry] = useState("in");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { loginWithRedirect , user, isAuthenticated  } =
    useAuth0();
     
  const getNewsFeed = async () => {
    try {
      const queryParams = {
        category: selectedCategory ,
        lang:  selectedCountry ,
        country: selectedLanguage,
      };
 
      const response = await axios.get(`https://gnews.io/api/v4/top-headlines?apikey=221e180a111fac6abf3e20a582138e8d`, {
        params: queryParams,
      });
      console.log(response.data.articles);
      setNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(selectedCategory && selectedCountry && selectedLanguage){
      getNewsFeed();
    }
  }, [selectedCategory,selectedCountry,selectedLanguage]);

  const AddItem= async (newsItem) =>{ 
     try {
        let ItemDetails = newsItem;
        ItemDetails.email= user.email;
        ItemDetails.name = user.name;
        console.log(user)
        const BASE_URL= `https://weary-ring-colt.cyclic.cloud`
        const response= await fetch(`${BASE_URL}/feed/savefeed`, {     
         method : 'POST',
         headers : {
           'Content-type' : 'application/json'
         },
         body : JSON.stringify(ItemDetails)
        })
        console.log(response );
        if(response.status==200){
          Swal.fire("News Saved Successfully !!", "You can see them in Saved Feeds", "success")
        }
     } catch (error) {
        Swal.fire("Please Login First to Save News !!", "You can see them in Saved Feeds", "error")
     }
  }
  const LoginFirst = ()=>{
     Swal.fire("Please Login First to Save News !!", "You can see them in Saved Feeds", "error")
     loginWithRedirect();
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
      <Grid  templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]} gap={6}  m={3}> 
      {newsData.length > 0 ? newsData.map((newsItem, index) => (
         <motion.div
         key={index}
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: index * 0.2 }}
         className="animated-grid-item"
       > 
        <GridItem key={index}   width={"460px"}
        borderWidth="1px" borderRadius="md" p={4} >
          <Button  onClick={()=>  isAuthenticated ? AddItem(newsItem) : 
           LoginFirst() }> <BsFillBookmarkHeartFill/>Save in My Account</Button>
          <Heading fontSize={["23px","30px","40px"]} size="md" m={4}>{newsItem.title}</Heading>
          <Text fontSize={["14px","16px","20px"]}  m={4}>{newsItem.description}</Text>
          <Image src={newsItem.image} objectFit={"cover"}
          height={["200px","300px","400px"]}alt={newsItem.title} my={2} />
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
