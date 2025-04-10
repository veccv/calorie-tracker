import { Button, Flex, Text } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { useSession } from "next-auth/react";

const MainBar = () => {
  const { data: session } = useSession();
  const username = session?.user?.name || "User";

  return (
    <Flex
      w="full"
      h="3em"
      bg="green.800"
      p="1em"
      position="relative"
      align="center"
    >
      <Text
        color="white"
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
      >
        Options buttons
      </Text>
      <Button
        position="absolute"
        right="1em"
        bg="transparent"
        color="white"
        variant="ghost"
        aria-label="User control"
      >
        <FaRegUser />
        {username}
      </Button>
    </Flex>
  );
};

export default MainBar;
