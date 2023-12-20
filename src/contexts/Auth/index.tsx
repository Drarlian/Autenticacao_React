import React, { ReactNode, createContext, useState } from "react";
import { AuthContextType, User } from "../../@types/User";
import useApi from "../../hooks/useApi";
import useStorageDb from "../../hooks/useStorageDb";

// import { Container } from './styles';

export const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const { signin } = useApi();
  const { setItem } = useStorageDb();

  const singIn = async (login: string, password: string) => {
    const data = await signin(login, password);

    if (data.user) {

      setUser(data.user);
      setItem("access-token-api-bagaggio", JSON.stringify(data.token))

      return true;
    }
    return false;
  };



  return (
    <AuthContext.Provider value={{ user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
