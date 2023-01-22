import { Center, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import { FaTh } from "react-icons/fa";
import logoMin from "../../assets/logo-min.svg";
import { theme } from "../../styles/theme";
import { Menu } from "./Menu";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      borderBottom="1px"
      borderBottomColor="#f5f5f5"
      paddingX="8"
      paddingY="2"
    >
      <Flex align="center">
        <Image src={logoMin} />
        <Heading ml="4" size="lg">
          Dashboard
        </Heading>
      </Flex>

      <Center ml="auto" onClick={() => onOpen()} as="button" fontSize="2rem">
        <FaTh color={theme.colors.gray["300"]} />
      </Center>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
