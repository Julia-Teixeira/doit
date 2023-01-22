import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { RegisterForm } from "./RegisterForm";
import { RegisterInfo } from "./RegisterInfo";
import { GoBackButton } from "./GoBackButton";
import { useBreakpointValue, Flex, useDisclosure } from "@chakra-ui/react";
import { api } from "../../services/api";
import { ModalError } from "../../components/Modal/ModalError";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { useNavigate } from "react-router-dom";

export interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório.").email("Email inválido"),
  password: yup.string().required("Senha obrigatória."),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatória.")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const Register = () => {
  const navigate = useNavigate();
  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();
  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSuccessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const handleSignUp = ({ name, email, password }: iRegisterData) => {
    api
      .post("register", { name, email, password })
      .then((response) => {
        setLoading(false);
        onModalSuccessOpen();
      })
      .catch((error) => onModalErrorOpen());
  };

  return (
    <>
      <ModalSuccess
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
        message="Seu cadastro deu super certo, <strong>vamos lá</strong>."
        buttonMessage="Ir para o login agora"
        onClick={() => navigate("/")}
        secondaryText="Você já pode começar criando <strong>suas listas</strong> de tarefas agora mesmo..."
      />
      <ModalError
        message="Seu email já está em uso"
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
        buttonMessage="Tentar novamente"
        secondaryText="Você já pode tentar novamente, <strong>clicando</strong> no botão acima ou aguarde alguns minutos..."
      />
      <Flex
        height={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-b, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
          "linear(to-l, purple.800 65%, white 35%)",
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
        >
          {isWideVersion ? (
            <>
              <GoBackButton top="2" left="24" />
              <RegisterForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                register={register}
                loading={loading}
              />
              <RegisterInfo />
            </>
          ) : (
            <>
              <GoBackButton top="10" left="75vw" />
              <RegisterInfo />
              <RegisterForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                register={register}
                loading={loading}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
