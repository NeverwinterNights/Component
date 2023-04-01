import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import User = FirebaseAuthTypes.User;

type AuthContextType = {
  user: FirebaseAuthTypes.User | null;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  // googleLogin: () => Promise<FirebaseAuthTypes.UserCredential>;
  googleLogin: () => Promise<void>;
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
        googleLogin: async () => {
          try {
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log('value', {error});
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
