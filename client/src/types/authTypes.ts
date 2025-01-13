import { Socket } from "socket.io-client";


// User Types
export interface UserInterface {
    _id : string;
    firstName : string;
    lastName : string;
    email : string;
    profilePic? : string;
}

export interface SignupInterface {
    firstName : string;
    lastName : string;
    email : string;
    password : string;
}

export interface LoginInterface {
    email : string;
    password : string;
}

// Auth Store Types
export interface AuthStoreInterface {
    authUser: UserInterface | null;
    isCheckingAuth: boolean;
    isSigningUp: boolean;
    isLoggingIn: boolean;
    isUpdatingProfile: boolean;
    onlineUsers: string[];
    socket: Socket | null;
  
    checkAuth: () => Promise<void>;
    signup: (data: SignupInterface) => Promise<void>;
    login: (data: LoginInterface) => Promise<void>;
    logout: () => Promise<void>;
    updateProfile: (data: Partial<UserInterface>) => Promise<void>;
    connectSocket: () => void;
    disconnectSocket: () => void;
  }