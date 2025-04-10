import React, { useState, useEffect } from "react";
import {
  Button,
  CloseButton,
  Dialog,
  Heading,
  Input,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";

/**
 * Interface for food item data.
 */
export interface FoodItem {
  id: number;
  name: string;
  kcal: number;
  fat: number;
  carbs: number;
  sugar: number;
}

const AddExistingItem = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [grams, setGrams] = useState<string>("");
  const [fetchedItems, setFetchedItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    // Fetch food items from the API on component mount
    const fetchFoodItems = async () => {
      try {
        const res = await fetch("/api/foodItems");
        if (!res.ok) {
          throw new Error("Failed to fetch food items");
        }
        const data = await res.json();
        setFetchedItems(data);
      } catch (error) {
        console.error("Error fetching food items:", error);
        // Fallback to empty array if fetch fails
        setFetchedItems([]);
      }
    };
    fetchFoodItems();
  }, []);

  const handleRowClick = (id: number) => {
    // Toggle selection: if the clicked row is already selected, deselect it.
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
    setGrams(""); // Clear grams when toggling selection
  };

  const handleConfirm = () => {
    const selectedItem = fetchedItems.find((item) => item.id === selectedId);
    console.log("Selected food item:", selectedItem);
    // Future integration: Use this information to prefill or update logic matching CreateNewItem.tsx fields.
  };

  // Get the currently selected item
  const selectedItem = fetchedItems.find((item) => item.id === selectedId);

  // Calculate scaled nutrients if grams is entered
  const quantity = parseFloat(grams);
  const calculatedValues =
    selectedItem && !isNaN(quantity)
      ? {
          kcal: (selectedItem.kcal * quantity) / 100,
          fat: (selectedItem.fat * quantity) / 100,
          carbs: (selectedItem.carbs * quantity) / 100,
          sugar: (selectedItem.sugar * quantity) / 100,
        }
      : null;

  return (
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Select a Food Item</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <Stack width="full" gap="5">
          <Heading size="xl">Select a Food Item</Heading>
          <Table.Root size="sm" variant="outline">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Calories (kcal)</Table.ColumnHeader>
                <Table.ColumnHeader>Fat (g)</Table.ColumnHeader>
                <Table.ColumnHeader>Carbs (g)</Table.ColumnHeader>
                <Table.ColumnHeader>Sugar (g)</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {fetchedItems.map((item, index) => {
                const isSelected = selectedId === item.id;
                const backgroundColor = isSelected
                  ? "#c6f6d5" // light green for selected row
                  : index % 2 === 0
                  ? "white"
                  : "#f7f7f7"; // modified stripe color for odd rows
                return (
                  <Table.Row
                    key={item.id}
                    onClick={() => handleRowClick(item.id)}
                    style={{
                      backgroundColor,
                      cursor: "pointer",
                    }}
                  >
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.kcal}</Table.Cell>
                    <Table.Cell>{item.fat}</Table.Cell>
                    <Table.Cell>{item.carbs}</Table.Cell>
                    <Table.Cell>{item.sugar}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
          {selectedItem && (
            <Stack>
              <Text>Please enter quantity in grams:</Text>
              <Input
                type="number"
                placeholder="e.g., 150"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
              />
              {calculatedValues && (
                <Stack>
                  <Text>Calculated Nutritional Values:</Text>
                  <Text>Calories: {calculatedValues.kcal.toFixed(2)} kcal</Text>
                  <Text>Fat: {calculatedValues.fat.toFixed(2)} g</Text>
                  <Text>Carbs: {calculatedValues.carbs.toFixed(2)} g</Text>
                  <Text>Sugar: {calculatedValues.sugar.toFixed(2)} g</Text>
                </Stack>
              )}
            </Stack>
          )}
        </Stack>
      </Dialog.Body>
      <Dialog.Footer>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={handleConfirm}
          disabled={
            selectedId === null || (selectedItem && isNaN(parseFloat(grams)))
          }
        >
          <LuCheck />
          Select Item
        </Button>
      </Dialog.Footer>
      <Dialog.CloseTrigger asChild>
        <CloseButton size="sm" />
      </Dialog.CloseTrigger>
    </Dialog.Content>
  );
};

export default AddExistingItem;
