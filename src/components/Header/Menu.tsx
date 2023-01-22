import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  theme,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/authContext";
import { FiLogOut } from "react-icons/fi";

interface iMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Menu = ({ isOpen, onClose }: iMenuProps) => {
  const { user, signOut } = useAuth();

  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay mt="10vh" />
      <DrawerContent
        w={["450px", "350px"]}
        h="147px"
        borderRadius="8px"
        ml="auto"
        mt="63px"
      >
        <DrawerHeader
          borderBottom="1px"
          borderBottomColor="gray.50"
          fontWeight={700}
          fontSize="lg"
          color="gray.400"
        >
          {user.name}
        </DrawerHeader>
        <DrawerBody>
          <Flex
            gap="15px"
            align="center"
            _hover={{ cursor: "pointer" }}
            onClick={signOut}
          >
            <Center
              w="60px"
              h="60px"
              bg="red.600"
              _hover={{ bg: "red.700" }}
              borderRadius="5px"
            >
              <FiLogOut color={theme.colors.white} size="24" />
            </Center>
            <Box>
              <Heading as="h2" fontWeight={700} fontSize="xl">
                Sair da minha conta
              </Heading>
              <Text fontWeight={400} fontSize="sm" color="gray.300">
                Sair da minha conta agora
              </Text>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
