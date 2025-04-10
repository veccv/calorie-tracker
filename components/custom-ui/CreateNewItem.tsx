import {
  Button,
  CloseButton,
  Dialog,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import React from "react";
import { Field, FieldProps, Form, Formik } from "formik";

interface CreateNewItemProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateNewItem = ({ setOpen }: CreateNewItemProps) => {
  return (
    <Formik
      initialValues={{
        name: "",
        kcal: "",
        fat: "",
        carbs: "",
        sugar: "",
      }}
      onSubmit={(values, actions) => {
        // Add your submission logic here, e.g. API call, state updates, etc.
        console.log("New food item:", values);
        actions.setSubmitting(false);
        setOpen(false);
      }}
    >
      {(props) => (
        // Prevent clicks and pointer down events on the form from propagating to the dialog.
        <Form
          onClick={(e: React.MouseEvent<HTMLFormElement>) =>
            e.stopPropagation()
          }
          onPointerDown={(e: React.PointerEvent<HTMLFormElement>) =>
            e.stopPropagation()
          }
        >
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Create Food Item</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body w="full" h="full">
              <Stack w="full" h="full">
                <Text>Fill out this form to create a new food item.</Text>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Field name="name">
                    {({ field }: FieldProps) => (
                      <Input {...field} placeholder="Name" />
                    )}
                  </Field>
                </FormControl>
                <FormControl id="kcal">
                  <FormLabel>Calories per 100g</FormLabel>
                  <Field name="kcal">
                    {({ field }: FieldProps) => (
                      <Input {...field} placeholder="0" type="number" />
                    )}
                  </Field>
                </FormControl>
                <FormControl id="fat">
                  <FormLabel>Fat per 100g</FormLabel>
                  <Field name="fat">
                    {({ field }: FieldProps) => (
                      <Input {...field} placeholder="0" type="number" />
                    )}
                  </Field>
                </FormControl>
                <FormControl id="carbs">
                  <FormLabel>Carbohydrates per 100g</FormLabel>
                  <Field name="carbs">
                    {({ field }: FieldProps) => (
                      <Input {...field} placeholder="0" type="number" />
                    )}
                  </Field>
                </FormControl>
                <FormControl id="sugar">
                  <FormLabel>Sugar per 100g</FormLabel>
                  <Field name="sugar">
                    {({ field }: FieldProps) => (
                      <Input {...field} placeholder="0" type="number" />
                    )}
                  </Field>
                </FormControl>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="solid"
                  type="submit"
                  disabled={props.isSubmitting}
                >
                  Save Changes
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewItem;
