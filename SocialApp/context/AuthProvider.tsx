import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
// import User = FirebaseAuthTypes.User;

type AuthContextType = {
  user: FirebaseAuthTypes.User | null;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: Dispatch<SetStateAction<FirebaseAuthTypes.User | null>>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log('error', error);
          }
        },
        register: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (error) {
            console.log('error', error);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            console.log('error', error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
