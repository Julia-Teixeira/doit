import { Button, Center, Flex } from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";
import { theme } from "../../styles/theme";
import { Input } from "./Input";

export const SearchBox = () => {
  return (
    <Flex
      h="60px"
      gap="1rem"
      mt="24px"
      paddingX={["4", "8"]}
      paddingY={["2"]}
      w="100%"
    >
      <Flex gap="9px" as="form">
        <Input
          name="search"
          type="text"
          placeholder="Pesquisar por tarefa"
          w="35vw"
          h="60px"
        />
        <Center
          as="button"
          w="65px"
          h="60px"
          bg="purple.600"
          borderRadius="8px"
          _hover={{ bg: "purple.700" }}
        >
          <RiSearchLine color={theme.colors.white} size="24px" />
        </Center>
      </Flex>
      <Button
        as="button"
        bg="purple.500"
        color={theme.colors.white}
        fontWeight="600"
        fontSize="lg"
        borderRadius="8px"
        _hover={{ bg: "purple.600" }}
        w="288px"
        h="60px"
      >
        Adicionar nova tarefa
      </Button>
    </Flex>
  );
};
