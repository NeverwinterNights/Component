import React, {createContext, ReactNode, useMemo, useState} from 'react';

type AuthContextType = {
  isLoading: boolean;
  userToken: null | string;
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<null | string>(null);

  const signIn = () => {
    setUserToken('aaaaaaaaaaa');
    setIsLoading(false);
  };
  const signOut = () => {
    setUserToken(null);
    setIsLoading(false);
  };
  const signUp = () => {
    setUserToken('fgfgfgfgfgfg');
    setIsLoading(false);
  };

  const value = useMemo(
    () => ({
      isLoading,
      userToken,
      signIn,
      signOut,
      signUp,
    }),
    [isLoading, userToken],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
