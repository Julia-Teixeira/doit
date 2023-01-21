import { Text } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export const Dashboard = () => {
  const { accessToken } = useAuth();

  if (!!accessToken === false) {
    console.log(accessToken);
    return <Navigate to="/" />;
  } else {
    return (
      <>
        <Text>Usuário logado</Text>
        <Text>Bem vindo a Dashboard</Text>
      </>
    );
  }
};
