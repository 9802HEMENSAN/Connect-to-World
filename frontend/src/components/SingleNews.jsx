import React from 'react'
import { Grid, GridItem , Heading, Text, Link, Image, Divider, Button  } from '@chakra-ui/react';
 

const SingleNews = ({newsItem }) => {
  return (
        <GridItem  
        borderWidth="1px" borderRadius="md" p={4}>
          <Heading fontSize={["23px","30px","40px"]} size="md" m={4}>{newsItem.title}</Heading>
          <Text fontSize={["14px","16px","20px"]}  m={4}>{newsItem.description}</Text>
          <Image src={newsItem.image} alt={newsItem.title} my={2} />
          <Text fontSize={["14px","16px","20px"]}>Published on: {new Date(newsItem.publishedAt).toLocaleString()}</Text>
    
          <Link href={newsItem.url}  fontSize={["14px","16px","20px"]} 
          color={"pink"} target="_blank" rel="noopener noreferrer">
            Read Full Article --^
          </Link>    
        </GridItem>
  )
}

export default SingleNews