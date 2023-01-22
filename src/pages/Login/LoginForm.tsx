import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export interface iSignInData {
  email: string;
  password: string;
}

interface iLoginFormProps {
  handleSignIn: () => void;
  errors: Partial<
    FieldErrorsImpl<{
      email: string;
      password: string;
    }>
  >;
  register: UseFormRegister<iSignInData>;
  loading: boolean;
}
export const LoginForm = ({
  handleSignIn,
  errors,
  register,
  loading,
}: iLoginFormProps) => {
  const navigate = useNavigate();
  return (
    <Grid
      onSubmit={handleSignIn}
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
          onClick={() => navigate("/register")}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
