import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  VStack,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Image,
  Divider,
  Box,
  Button,
} from "@chakra-ui/react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import SingleNews from "../components/SingleNews";

const SavedFeed = () => {
  const {  user } =
    useAuth0();
  const [newsData, setNewsData] = useState([]);

  const GetSavedFeeds = async () => {
    try {
 
      const response = await axios.post(`https://weary-ring-colt.cyclic.cloud/feed/savefeeds`, 
         {
           email :  "hmahilange9802@gmail.com"  
         } 
      ) 
      
      console.log(response);
      console.log(user.email);
      setNewsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetSavedFeeds();
  }, []);

  return (
    <Box>
      <Heading size={["sm", "md", "lg", "2xl"]} m={5}>Latest News Headlines</Heading>
      <Divider />
      <Grid
        templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        gap={6}
        m={50}
      >
        {newsData.length > 0 ? (
          newsData.map((newsItem, index) => (
             <SingleNews key={index} newsItem={newsItem} />
          ))
        ) : (
          <Text color="red.500">Please add new News to Your Account !!</Text>
        )}
      </Grid>
    </Box>
  );
};

export default SavedFeed;
