export interface IAuth {
    isAuthenticated: boolean;
};

export interface IAuthInfo {
    accessToken: string;
    refreshToken: string;
    userId: string;
    email?: string;
}

export interface IAuthMethods {
    login: (authInfo: IAuthInfo) => void;
    logout: () => void;
}

export type TAuthContextModel = IAuthInfo & IAuthMethods;