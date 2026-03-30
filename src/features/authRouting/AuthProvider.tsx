import { useCallback, useMemo, useState, type ComponentType } from 'react';
import type { IAuthInfo, IAuthMethods, TAuthContextModel } from 'shared/model/auth';
import { clearLS, loadFromLS, saveToLocaleStorage } from 'shared/lib/localStorage';
import { AuthContext, createInitAuthInfo } from './AuthContext';
import { JWT_ACCESS_LS_KEY, JWT_LS_KEY, JWT_REFRESH_LS_KEY, USER_INFO_LS_KEY } from 'shared/config/constants';

export const withAuthProvider = (WrappedComponent: ComponentType) => () => {
    const [authInfo, setAuthInfo] = useState<IAuthInfo>(() => {
        const tokens = loadFromLS<Record<'access' | 'refresh', string>>({
            key: JWT_LS_KEY,
        });

        const userInfo = loadFromLS<Omit<IAuthInfo, 'accessToken' | 'refreshToken'>>({
            key: USER_INFO_LS_KEY,
        });

        return {
            accessToken: tokens?.access || '',
            refreshToken: tokens?.refresh || '',
            userId: userInfo?.userId || '',
            email: userInfo?.email,
        };
    });

    const login: IAuthMethods['login'] = useCallback((authInfo) => {
        console.log(login);
        
        setAuthInfo(authInfo);

        const { refreshToken, accessToken, ...userInfo } = authInfo;

        console.log(accessToken);
        

        saveToLocaleStorage({
            key: JWT_LS_KEY,
            state: {
                [JWT_ACCESS_LS_KEY]: accessToken,
                [JWT_REFRESH_LS_KEY]: refreshToken,
            },
        });

        saveToLocaleStorage({
            key: USER_INFO_LS_KEY,
            state: userInfo,
        });
    }, []);

    const logout: IAuthMethods['logout'] = useCallback(() => {
        setAuthInfo(createInitAuthInfo());

        clearLS({
            key: JWT_LS_KEY,
        });
        clearLS({
            key: USER_INFO_LS_KEY,
        });
    }, []);

    const contextValue: TAuthContextModel = useMemo(
        () => ({
            ...authInfo,
            login,
            logout,
        }),
        [authInfo, login, logout],
    );

    return (
        <AuthContext.Provider value={contextValue}>
            <WrappedComponent />
        </AuthContext.Provider>
    );
};
