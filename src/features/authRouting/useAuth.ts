import { useAuthContext } from './AuthContext';
import type { IAuth } from 'shared/model/auth';

export const useAuth = (): IAuth => {
    const { accessToken } = useAuthContext();

    return {
        isAuthenticated: !!accessToken,
    };
};
