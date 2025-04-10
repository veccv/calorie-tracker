import { Button, Flex, Menu, Portal } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import { IoCalendarNumber } from "react-icons/io5";

const MainBar = () => {
  const { data: session } = useSession();
  const username = session?.user?.name || "User";

  return (
    <Flex
      w="full"
      h="3em"
      bg="green.800"
      p="1em"
      position="fixed"
      top="0"
      zIndex="1000"
      align="center"
    >
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            color="white"
            bg="transparent"
            variant="ghost"
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            aria-label="Options menu"
          >
            <IoCalendarNumber />
            View options
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item
                value="option1"
                onClick={() => console.log("Option 1 selected")}
              >
                1 day
              </Menu.Item>
              <Menu.Item
                value="option2"
                onClick={() => console.log("Option 2 selected")}
              >
                3 days
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
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
