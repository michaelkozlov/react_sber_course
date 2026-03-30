import { createContext, useContext } from "react";
import type { IAuthInfo, TAuthContextModel } from "shared/model/auth";

export const createInitAuthInfo = (): IAuthInfo => ({
    accessToken: '',
    refreshToken: '',
    userId: '',
    email: '',
});

export const AuthContext = createContext<TAuthContextModel>({
    ...createInitAuthInfo(),
    login: () => {},
    logout: () => {},
});

export const useAuthContext = () => {
    const authContextInfo = useContext(AuthContext);

    if (!authContextInfo) {
        throw new Error('useAuthContext должен использоваться только внутри AuthProvider');
    }

    return authContextInfo;
};