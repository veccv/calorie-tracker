import React from "react";
import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRegPlusSquare } from "react-icons/fa";
import CreateNewItem from "@/components/custom-ui/CreateNewItem";
import AddExistingItem from "@/components/custom-ui/AddExistingItem";

interface OpenChangeDetails {
  open: boolean;
}

const AddItemDialog = () => {
  const [isCreateNew, setIsCreateNew] = React.useState(false);
  const [isAddExisting, setIsAddExisting] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  // Handlers for dialog actions
  const handleAddNew = () => {
    setIsAddExisting(true);
  };

  const handleCreateNew = () => {
    setIsCreateNew(true);
  };

  const handleClose = () => {
    // Reset any action-specific states
    setIsCreateNew(false);
    setIsAddExisting(false);
  };

  // Handle open state change, call handleClose when dialog is closed
  const handleOpenChange = (details: OpenChangeDetails) => {
    const { open } = details;
    if (!open) {
      handleClose();
    }
    setOpen(open);
  };

  // A helper for stopping both click and pointer down propagation.
  const stopEvents = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <Dialog.Root
      open={open}
      onOpenChange={handleOpenChange}
      closeOnInteractOutside={false}
    >
      <Dialog.Trigger asChild>
        <Button variant="outline" w="60%" h="40%" bg="gray.300">
          <FaRegPlusSquare />
          <Text pl="1em">Add item</Text>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          {isCreateNew && (
            // Wrap CreateNewItem with a div that stops click and pointer down events.
            <div onClick={stopEvents} onPointerDown={stopEvents}>
              <CreateNewItem setOpen={setOpen} />
            </div>
          )}
          {isAddExisting && (
            // Similarly wrap AddExistingItem if needed.
            <div onClick={stopEvents} onPointerDown={stopEvents}>
              <AddExistingItem />
            </div>
          )}
          {!isCreateNew && !isAddExisting && open && (
            <Dialog.Content onClick={stopEvents} onPointerDown={stopEvents}>
              <Dialog.Header>
                <Dialog.Title>Add or create food item</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body w="full" h="full">
                <Stack w="full" h="full">
                  <Text>
                    Choose whether to add a new food or create a new food based
                    on an existing example.
                  </Text>
                  <Button
                    variant="outline"
                    bg="gray.300"
                    onClick={handleCreateNew}
                  >
                    <FaRegPlusSquare />
                    <Text pl="1em">Add new item</Text>
                  </Button>
                  <Button
                    variant="outline"
                    bg="gray.300"
                    onClick={handleAddNew}
                  >
                    <FaRegPlusSquare />
                    <Text pl="1em">Use existing item</Text>
                  </Button>
                </Stack>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          )}
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddItemDialog;
