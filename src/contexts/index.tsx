import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { theme } from "../styles/theme";

interface iAppProviderProps {
  children: ReactNode;
}
export const AppProvider = ({ children }: iAppProviderProps) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
