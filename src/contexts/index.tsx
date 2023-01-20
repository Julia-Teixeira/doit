import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";
import { AuthProvider } from "./authContext";

interface iAppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: iAppProviderProps) => (
  <AuthProvider>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
  </AuthProvider>
);
