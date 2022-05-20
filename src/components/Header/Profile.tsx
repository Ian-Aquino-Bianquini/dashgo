import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ian de Aquino</Text>
          <Text color="gray.300" fontSize="small">
            ian.aquino2003@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Ian de Aquino"
        src="https://github.com/ian-aquino-bianquini.png"
      />
    </Flex>
  );
}
