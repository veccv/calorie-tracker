import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegPlusSquare } from "react-icons/fa";

interface AddNewItemProps {
  w?: string;
  h?: string;
}

const AddNewItem: React.FC<AddNewItemProps> = ({ w = "full", h = "full" }) => {
  return (
    <Flex
      w={w}
      h={h}
      bg="gray.300"
      border="1px solid #ccc"
      borderRadius="5px"
      align="center"
      justify="center"
      cursor="pointer"
      transition="background-color 0.3s ease"
      _hover={{ bg: "gray.200" }}
    >
      <FaRegPlusSquare />
      <Text pl="1em">Add new item</Text>
    </Flex>
  );
};

export default AddNewItem;
