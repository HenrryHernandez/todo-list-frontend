import { createContext, useState } from "react";

type TokenContextProps = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
};

export const TokenContext = createContext({} as TokenContextProps);

export const TokenProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
