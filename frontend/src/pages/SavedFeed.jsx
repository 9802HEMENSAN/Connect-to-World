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

const SavedFeed = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [newsData, setNewsData] = useState([]);

  const GetSavedFeeds = async () => {
    try {

      const response = await axios("http://localhost:8080/feed/savefeeds", {
         method : "POST",
         headers : {
           'Content-type' : 'application/json'
         },
         body : JSON.stringify({
           email : user.email
         })
      });
      console.log(response);
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
      <Heading size={["sm", "md", "lg", "2xl"]}>Latest News Headlines</Heading>
      <Divider />
      <Grid
        templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        gap={6}
        m={50}
      >
        {newsData.length > 0 ? (
          newsData.map((newsItem, index) => (
            <GridItem key={index} borderWidth="1px" borderRadius="md" p={4}>
              <Heading fontSize={["23px", "30px", "40px"]} size="md" m={4}>
                {newsItem.title}
              </Heading>
              <Text fontSize={["14px", "16px", "20px"]} m={4}>
                {newsItem.description}
              </Text>
              <Image src={newsItem.image} alt={newsItem.title} my={2} />
              <Text fontSize={["14px", "16px", "20px"]}>
                Published on: {new Date(newsItem.publishedAt).toLocaleString()}
              </Text>

              <Link
                href={newsItem.url}
                fontSize={["14px", "16px", "20px"]}
                color={"pink"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Article --^
              </Link>
            </GridItem>
          ))
        ) : (
          <Text>No news found</Text>
        )}
      </Grid>
    </Box>
  );
};

export default SavedFeed;
