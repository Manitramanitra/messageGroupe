import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

function Homepages() {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text>Chat Noble Application</Text>
      </Box>
      <Box></Box>
    </Container>
  );
}

export default Homepages;
