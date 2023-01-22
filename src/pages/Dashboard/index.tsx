import { Box, Grid } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { SearchBox } from "../../components/Form/SearchBox";
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
        <SearchBox />
        <Grid
          w="100%"
          templateColumns="repeat(auto-fill, minmax(420px, 1fr))"
          gap={10}
          paddingX="8"
          mt="8"
        >
          {[1, 2, 3, 4, 5, 6].map((_) => (
            <Card
              title="Teste"
              description="Alguma descrição"
              date="22 janeiro 2023"
            />
          ))}
        </Grid>
      </Box>
    );
  }
};
