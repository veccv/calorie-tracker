import { Stack, Text } from "@chakra-ui/react";
import AddNewItem from "@/components/custom-ui/AddNewItem";

interface PartDayMealListProps {
  title: string;
}

const PartDayMealList = ({ title }: PartDayMealListProps) => {
  return (
    <Stack h="full" w="full">
      <Stack w="full">
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Stack direction="row">
          <Text fontSize="sm">Calories: 0 kcal | </Text>
          <Text fontSize="sm">Carbs: 0g | </Text>
          <Text fontSize="sm">Fat: 0g | </Text>
        </Stack>
      </Stack>
      <Stack h="full" w="full" justify="center" align="center">
        <AddNewItem w="80%" h="30%" />
      </Stack>
    </Stack>
  );
};

export default PartDayMealList;
