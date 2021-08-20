import React from "react";
import { Text, Spinner } from "@chakra-ui/react";
export const Loading = () => {
  return (
    <>
      <Text w="100%"></Text>
      <Spinner
        thickness="3px"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
      />
      <Text w="100%"></Text>
    </>
  );
};
