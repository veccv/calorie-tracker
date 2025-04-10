import React from "react";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

const MainLogin = () => {
  // Google login handler function using NextAuth
  const handleGoogleLogin = () => {
    signIn("google");
  };
  return (
    <Box
      w="full"
      h="100vh"
      bg="green.800"
      rounded="lg"
      p="10"
      boxShadow="lg"
      overflow="hidden"
    >
      <Center w="full" h="full">
        <Stack w="30em" h="20em" bg="white" rounded="lg" p="1em" align="center">
          <Stack h="10%">
            <Text color="black" fontSize="2xl" fontWeight="bold" mb="2em">
              Log-in to your account
            </Text>
          </Stack>
          <Stack w="full" h="100%" justify="center" align="center">
            <Button onClick={handleGoogleLogin}>
              <FaGoogle />
              Login with Google
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
};

export default MainLogin;
