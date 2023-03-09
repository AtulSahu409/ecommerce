import { Box, Grid, Image, Text } from "@chakra-ui/react";
import styled from "../../Styles/Navbar.module.css"

export const SearchResult = ({ result }) => {
  console.log(result.Title,"result")
  return (
    <div
      className={styled.search_result}
      onClick={(e) => alert(`You selected ${result.Title}!`)}
    >
    <Grid gridTemplateColumns="repeat(2,1fr)" >
    <Box>
      <Text>{result.Title}</Text>
      <Box display={"flex"}>

      <Image src={result.Images[0]} w="150px" h="150px" alt="img"/>
      </Box>
    </Box>
    </Grid>
    </div>
  );
};