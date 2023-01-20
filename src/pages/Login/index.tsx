import { Image } from "@chakra-ui/image";
import { Box, Flex, Grid, Heading, Text, VStack } from "@chakra-ui/layout";
import logoPrimary from "../../assets/logo-primary.svg";
import { Input } from "../../components/Form/Input";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@chakra-ui/button";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório.").email("Email inválido"),
  password: yup.string().required("Senha obrigatória."),
});

interface iSignInData {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<iSignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: iSignInData) => {
    setLoading(true);
    signIn(data)
      .then((_) => setLoading(false))
      .catch((error) => setLoading(false));
  };

  return (
    <Flex
      height={["auto", "auto", "100vh", "100vh"]}
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
      justifyContent="center"
      alignItems="center"
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      color="white"
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
          <Image
            src={logoPrimary}
            alt="doit"
            boxSize={["120px", "120px", "150px", "150px"]}
          />
          <Heading mt="4" as="h1">
            O jeito fácil, grátis
          </Heading>
          <Text maxW="350px">
            Flexivel e atrativo de gerenciar{" "}
            <b>seus projetos em um única plataforma</b>
          </Text>
        </Grid>

        <Grid
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
          w={["100%", "100%", "50%", "50%"]}
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
          mt={["4", "4", "0"]}
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack spacing="5" mt="6">
            <Box w="100%">
              <Input
                label="Email"
                placeholder="Digite seu login"
                icon={FaEnvelope}
                type="email"
                {...register("email")}
                error={errors.email}
              />
              {!errors.email && (
                <Text ml="1" mt="1" color="gray.300">
                  Exemplo: nome@email.com
                </Text>
              )}
            </Box>
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              icon={FaLock}
              type="password"
              error={errors.password}
              {...register("password")}
            />
          </VStack>
          <VStack mt="4" spacing="5">
            <Button
              isLoading={loading}
              bg="purple.800"
              w="100%"
              h="60px"
              borderRadius="8px"
              color="white"
              _hover={{ background: "purple.900" }}
              type="submit"
            >
              Entrar
            </Button>
            <Text color="gray.400">Ainda não possui uma conta?</Text>
            <Button
              bg="gray.100"
              w="100%"
              h="60px"
              borderRadius="8px"
              color="gray.300"
              _hover={{ background: "gray.200" }}
              type="button"
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
