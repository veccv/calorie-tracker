import { Box, Stack, Text } from "@chakra-ui/react";
import AddNewItem from "@/components/custom-ui/AddNewItem";

const DayView = () => {
  return (
    <Stack w="full" h="100vh" justify="center" align="center">
      <Text fontSize="2xl" fontWeight="bold" mb="2">
        Today
      </Text>
      <Box w="30%" h="70%" bg="gray.100" rounded="lg" p="1em" boxShadow="lg">
        <Stack h="full" w="full" divideY="1px">
          <Stack h="full" w="full">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Breakfast
            </Text>
            <Stack h="full" w="full" justify="center" align="center">
              <AddNewItem w="80%" h="30%" />
            </Stack>
          </Stack>
          <Stack h="full" w="full">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Lunch
            </Text>
            <Stack h="full" w="full" justify="center" align="center">
              <AddNewItem w="80%" h="30%" />
            </Stack>
          </Stack>
          <Stack h="full" w="full">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Snacks
            </Text>
            <Stack h="full" w="full" justify="center" align="center">
              <AddNewItem w="80%" h="30%" />
            </Stack>
          </Stack>
          <Stack h="full" w="full">
            <Text fontSize="xl" fontWeight="bold" mb="2">
              Dinner
            </Text>
            <Stack h="full" w="full" justify="center" align="center">
              <AddNewItem w="80%" h="30%" />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default DayView;
