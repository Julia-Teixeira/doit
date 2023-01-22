import { Center } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";

interface iGoBackButtonProps {
  top: string;
  left: string;
}

export const GoBackButton = ({ top, left }: iGoBackButtonProps) => {
  const navigate = useNavigate();
  return (
    <Center
      as="button"
      onClick={() => navigate("/")}
      position="absolute"
      top={top}
      left={left}
      w={["60px", "80px"]}
      h="60px"
      bg="purple.500"
      fontSize="2xl"
      borderRadius="md"
      _hover={{
        bg: "purple.600",
      }}
    >
      <FaArrowLeft color={theme.colors.white} />
    </Center>
  );
};
