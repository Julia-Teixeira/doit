import { Box } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/authContext";

export const Dashboard = () => {
  const { accessToken } = useAuth();

  if (!!accessToken === false) {
    console.log(accessToken);
    return <Navigate to="/" />;
  } else {
    return (
      <Box>
        <Header />
      </Box>
    );
  }
};
