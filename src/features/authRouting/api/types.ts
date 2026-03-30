export interface ISignUpRequest {
    email: string;
    name: string;
    password: string;
    avatarPath?: string;
    about?: string;
    phone?: string;
}

export interface ISignInRequest {
    email: string;
    password: string;
}

export interface ISignResponseSuccess {
    user: {
        id: string;
        email: string;
    };
    accessToken: string;
}

export interface ISignResponseError {
    statusCode: number;
    message: string[];
    error: string;
}

export type TSignResponse = ISignResponseSuccess | ISignResponseError;

export interface IUserInfo {
  id: string;
  email: string;
  name: string;
  avatarPath: string;
  about: string;
  phone: string;
  roles: Array<string>;
}
