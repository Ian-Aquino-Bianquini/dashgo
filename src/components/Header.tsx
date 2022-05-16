import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import {
  RiNotification2Line,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        DashGO
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex={1}
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        position="relative"
        bg="gray.800"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotification2Line} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Ian de Aquino</Text>
            <Text color="gray.300" fontSize="small">
              ian.aquino2003@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Ian de Aquino"
            src="https://github.com/ian-aquino-bianquini.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
