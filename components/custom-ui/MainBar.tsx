import { Button, Flex, Menu, Portal } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";
import MenuWithExtraButton from "@/components/custom-ui/MenuWithExtraButton";

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
      justify="center"
    >
      <MenuWithExtraButton />
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
