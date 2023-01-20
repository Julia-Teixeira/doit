import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";
import { api } from "../services/api";

interface iAuthProvider {
  children: ReactNode;
}

interface iUser {
  email: string;
  id: string;
  name: string;
}
interface iAuthState {
  accessToken: string;
  user: iUser;
}

interface iSignIn {
  email: string;
  password: string;
}

interface AuthContextData {
  user: iUser;
  accessToken: string;
  signIn: (credentials: iSignIn) => Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: iAuthProvider) => {
  const [data, setData] = useState<iAuthState>(() => {
    const accessToken = localStorage.getItem("@DoIt:accessToken");
    const user = localStorage.getItem("@DoIt:user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }
    return {} as iAuthState;
  });

  const signIn = useCallback(async ({ email, password }: iSignIn) => {
    try {
      const response = await api.post("/login", { email, password });
      const { accessToken, user } = response.data;

      localStorage.setItem("@DoIt:accessToken", accessToken);
      localStorage.setItem("@DoIt:user", JSON.stringify(user));

      setData({ accessToken, user });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, accessToken: data.accessToken, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
