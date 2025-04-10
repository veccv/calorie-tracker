import { Button, Flex, Menu, Portal, Text } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

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
      <Menu.Root>
        <Menu.Trigger asChild>
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
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item
                value="logout"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};

export default MainBar;
