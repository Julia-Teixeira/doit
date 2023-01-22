import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Progress,
  Text,
} from "@chakra-ui/react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface iCardProps {
  title: string;
  description: string;
  date: string;
}

export const Card = ({ title, description, date }: iCardProps) => {
  return (
    <Box
      w={["350px", "auto"]}
      borderRadius="5px"
      borderWidth="1px"
      borderColor="gray.50"
      padding="7"
      boxShadow="base"
      cursor="pointer"
      _hover={{ transform: "translateY(-7px)", borderColor: "gray.100" }}
      transition="border 0.2s, ease 0s, transform 0.2s"
    >
      <Flex justifyContent="space-between">
        <Heading as="h1" size="md">
          {title}
        </Heading>
        <HStack>
          <Center
            as="button"
            h="30px"
            w="30px"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="5px"
          >
            <FaTrash color={theme.colors.gray["300"]} />
          </Center>
          <Center
            as="button"
            h="30px"
            w="30px"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="5px"
          >
            <FaCheck color={theme.colors.gray["300"]} />
          </Center>
        </HStack>
      </Flex>
      <Box w="100%" mt="4">
        <Text>{description}</Text>
        <Progress colorScheme="purple" mt="2.5" value={10} />
        <Text color="gray.200" mt="3">
          {date}
        </Text>
      </Box>
    </Box>
  );
};
