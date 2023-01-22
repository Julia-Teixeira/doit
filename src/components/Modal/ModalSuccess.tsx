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

interface iModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  buttonMessage?: string;
  onClick?: () => void;
  secondaryText: string;
}

export const ModalSuccess = ({
  isOpen,
  onClose,
  message,
  buttonMessage,
  onClick,
  secondaryText,
}: iModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex">
          <Center
            h="30px"
            w="30px"
            bg="purple.500"
            borderRadius="5px"
            mr="10px"
          >
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontSize="xl">Yeess..</Text>
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
            <Box dangerouslySetInnerHTML={{ __html: message }} />
          </Text>
          {buttonMessage && (
            <Button
              onClick={onClick}
              h="60px"
              w="100%"
              bg="purple.600"
              _hover={{ bg: "purple.700" }}
              color="white"
              mt="20px"
              fontWeight="bold"
            >
              {buttonMessage}
            </Button>
          )}
        </ModalBody>
        <ModalFooter>
          <Text align="center" color="gray.600" fontSize="sm">
            <Box dangerouslySetInnerHTML={{ __html: secondaryText }} />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
