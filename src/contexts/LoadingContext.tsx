import { createContext, useState } from "react";

type LoadingContextProps = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoadingContext = createContext({} as LoadingContextProps);

export const LoadingProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
