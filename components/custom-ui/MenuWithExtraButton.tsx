import { Button, Menu, Portal, Stack } from "@chakra-ui/react";
import { IoCalendarNumber, IoListOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import React from "react";

const MenuWithExtraButton: React.FC = () => {
  return (
    <Stack direction="row" align="center" justify="center">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            color="white"
            bg="transparent"
            variant="ghost"
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
                value="1day"
                onClick={() => console.log("Option 1 selected")}
              >
                1 day
              </Menu.Item>
              <Menu.Item
                value="3days"
                onClick={() => console.log("Option 2 selected")}
              >
                3 days
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
      <Button
        bg="transparent"
        color="white"
        variant="ghost"
        aria-label="Regular button"
        onClick={() => console.log("Regular button clicked")}
      >
        <FaRegPlusSquare />
        Create a new item
      </Button>
      <Button
        bg="transparent"
        color="white"
        variant="ghost"
        aria-label="Regular button"
        onClick={() => console.log("Regular button clicked")}
      >
        <IoListOutline />
        Items list
      </Button>
    </Stack>
  );
};

export default MenuWithExtraButton;
