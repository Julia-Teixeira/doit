import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { iRegisterData } from ".";

interface iRegisterFormProps {
  handleSignUp: () => void;
  errors: Partial<
    FieldErrorsImpl<{
      name: string;
      email: string;
      password: string;
      confirm_password: string;
    }>
  >;
  register: UseFormRegister<iRegisterData>;
  loading: boolean;
}
export const RegisterForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: iRegisterFormProps) => (
  <Grid
    onSubmit={handleSignUp}
    as="form"
    w={["100%", "100%", "50%", "50%"]}
    padding="50px 25px"
    border="3px solid"
    borderColor="gray.100"
    bg="white"
    color="gray.900"
    mt={["4", "4", "0"]}
  >
    <Heading size="lg">Crie sua conta</Heading>
    <VStack spacing="5" mt="6">
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        icon={FaUser}
        type="text"
        {...register("name")}
        error={errors.name}
      />
      <Box w="100%">
        <Input
          label="Email"
          placeholder="Digite seu e-mail"
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
      <Input
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
        icon={FaLock}
        type="password"
        error={errors.confirm_password}
        {...register("confirm_password")}
      />
    </VStack>
    <Button
      isLoading={loading}
      bg="purple.800"
      w="100%"
      h="60px"
      borderRadius="8px"
      color="white"
      _hover={{ background: "purple.900" }}
      type="submit"
      mt="8"
    >
      Finalizar cadastro
    </Button>
  </Grid>
);
