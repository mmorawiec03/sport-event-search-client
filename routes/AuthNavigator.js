import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import Drawer from './Drawer';
import Login from '../screens/Login';
import { globalStyles } from '../styles/GlobalStyles';
import { AuthContext } from '../contexts/AuthContext';
import { isAccessTokenValid, isRefreshTokenValid, getTimeDiff } from '../api/auth';
import { getRefreshToken, deleteTokens, setTokens } from '../storage/Token';
import { getUserData, deleteUserData } from '../storage/UserData';
import { refreshTokens } from '../api/endpoints';
import Loading from '../screens/Loading';


export default function AuthNavigator() {

    const { authData, dispatch } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [refreshIntervalMs, setRefreshIntervalMs] = useState(10000);
    const [timeDiffThresholdMs, setTimeDiffThresholdMs] = useState(20000);

    useEffect(() => {
        authInit();
    }, []);

    let i = setInterval(() => {
        if (authData.isAuth) {
            getTimeDiff().then(diff => {
                if (diff && diff <= timeDiffThresholdMs) {
                    getRefreshToken().then(token => {
                        return refreshTokens(token);
                    }).then(res => {
                        return setTokens(res.data);
                    }).then(() => {
                        console.log("[INFO] Tokens refreshed.")
                    });
                } 
            });
        }
    }, refreshIntervalMs);

    const authInit = () => {
        isAccessTokenValid().then(accessTokenValid => {
            if (accessTokenValid) {
                getUserData().then(user => {
                    console.log("[INFO] Access token valid.");
                    dispatch({type: 'LOGIN', user});
                    setLoading(false);
                });
            } else {
                console.log("[INFO] Access token not valid.");
                isRefreshTokenValid().then(refreshTokenValid => {
                    if (refreshTokenValid) {
                        console.log("[INFO] Refresh token valid.");
                        getRefreshToken().then(token => {
                            return refreshTokens(token);
                        }).then(res => {
                            return setTokens(res.data);
                        }).then(() => {
                            return getUserData();
                        }).then(user => {
                            dispatch({type: 'LOGIN', user});
                            setLoading(false);
                        }).catch(err => {
                            deleteTokens();
                            deleteUserData();
                            setLoading(false);
                        });
                    } else {
                        console.log("[INFO] Refresh token not valid.");
                        deleteTokens();
                        deleteUserData();
                        setLoading(false);
                    }
                });
            }
        });
    }

    const screen = loading ? (
        <Loading />
    ) : (
        <>
            { authData.isAuth ? (<Drawer />) : (<Login />) }
        </>
    );

    return (
        <View style={globalStyles.container}>
            { screen }
        </View>
    );
}