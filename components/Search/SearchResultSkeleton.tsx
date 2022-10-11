import { Box, LinkBox, VStack } from "@chakra-ui/react";
import React from "react";

const SearchResultSkeleton: React.FC = () => {
  return (
    <LinkBox as="article" maxW="sm">
      <VStack
        alignItems={"left"}
        p="5"
        mb={3}
        borderWidth="1px"
        boxShadow="sm"
        rounded="2xl"
      >
        <Box rounded="md" width={"100%"} height={210} bg="gray.300"></Box>
        <Box width={230} height={18} bg="gray.300"></Box>
        <Box width={190} height={3} bg="gray.300"></Box>
        <Box width={190} height={3} bg="gray.300"></Box>
        <Box width={20} height={2} bg="gray.300"></Box>
        <Box width={70} height={2} bg="gray.300"></Box>
        <Box width={50} height={2} bg="gray.300"></Box>
      </VStack>
    </LinkBox>
  );
};

export default SearchResultSkeleton;
