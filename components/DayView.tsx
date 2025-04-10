import { Stack, Text } from "@chakra-ui/react";
import PartDayMealList from "@/components/custom-ui/PartDayMealList";

const DayView = () => {
  return (
    <Stack w="full" h="100vh" justify="center" align="center">
      <Text fontSize="2xl" fontWeight="bold" mb="2">
        Today
      </Text>
      <Stack w="30%" h="70%" bg="gray.100" rounded="lg" p="1em" boxShadow="lg">
        <PartDayMealList title="Breakfast" />
        <PartDayMealList title="Lunch" />
        <PartDayMealList title="Snacks" />
        <PartDayMealList title="Dinner" />
      </Stack>
    </Stack>
  );
};

export default DayView;
