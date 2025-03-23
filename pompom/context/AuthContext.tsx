import React, {
    createContext,
    useEffect,
    useState,
    useContext,
    ReactNode,
  } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import axios from "axios";
  
  interface User {
    id: string;
    password: any;
    email: string;
  }
  
  interface AuthState {
    user: User | null;
    token: string | null;
  }
  
  interface AuthContextType {
    state: AuthState;
    setAuthState: (authState: AuthState) => void;
    logout: () => void;
  }
  
  
  // axios base url 
  axios.defaults.baseURL = 'http://192.168.87.204:8090/api/v1'
  
  // create context
  
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  // provider context
  
  const AuthProvider = ({ children }:any) => {
    const [state, setState] = useState<AuthState>({
      user: null,
      token: null,
    });
  
    const setAuthState = async (authState: AuthState) => {
      setState(authState);
      await AsyncStorage.setItem("authState", JSON.stringify(authState));
    };
  
    const logout = async () => {
      await AsyncStorage.removeItem("authState");
      setState({ user: null, token: null });
    };
  
    // Load auth state from AsyncStorage on app start
    useEffect(() => {
      const loadAuthData = async () => {
        try {
          const storedData = await AsyncStorage.getItem("authState");
          if (storedData) {
            setState(JSON.parse(storedData));
          }
        } catch (error) {
          console.error("Error loading auth state:", error);
        }
      };
      loadAuthData();
    }, []);
  
    return (
      <AuthContext.Provider value={{ state, setAuthState, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  // Custom Hook
  const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  
  export { AuthProvider, useAuth };
  