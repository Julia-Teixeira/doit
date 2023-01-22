import {
  Box,
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaExclamation, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface iModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  buttonMessage: string;
  secondaryText: string;
}
export const ModalError = ({
  isOpen,
  onClose,
  message,
  secondaryText,
  buttonMessage,
}: iModalErrorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex">
          <Center h="30px" w="30px" bg="red.600" borderRadius="5px" mr="10px">
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontSize="xl">Oopss!</Text>
          <Center
            h="32px"
            w="32px"
            bg="red.600"
            _hover={{ bg: "red.700" }}
            borderRadius="5px"
            ml="auto"
            onClick={onClose}
            as="button"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>

        <ModalBody>
          <Text align="center" color="gray.600" fontSize="sm">
            Ocorreu um erro! <strong>{message}</strong>
          </Text>
          <Button
            onClick={onClose}
            h="60px"
            w="100%"
            bg="red.600"
            _hover={{ bg: "red.700" }}
            color="white"
            mt="20px"
            fontWeight="bold"
          >
            {buttonMessage}
          </Button>
        </ModalBody>
        <ModalFooter>
          <Box
            dangerouslySetInnerHTML={{ __html: secondaryText }}
            color="gray.600"
            fontSize="sm"
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
