import { Flex } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";
import { LoginInfo } from "./LoginInfo";
import { iSignInData, LoginForm } from "./LoginForm";

const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório.").email("Email inválido"),
  password: yup.string().required("Senha obrigatória."),
});

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn, accessToken } = useAuth();
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

  if (!!accessToken) {
    return <Navigate to="/dashboard" />;
  } else {
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
          <LoginInfo />
          <LoginForm
            errors={errors}
            handleSignIn={handleSubmit(handleSignIn)}
            register={register}
            loading={loading}
          />
        </Flex>
      </Flex>
    );
  }
};
