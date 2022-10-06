import React, {useState} from 'react';
import LoginBackground from '../../assets/background/login-background.svg';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {deviceHeight, deviceWidth, dp, getFontScaledSize} from "../../utils";
import {BLACK_COLOR, INPUT_GRAY_COLOR, ORANGE_COLOR, RED_COLOR, ROUTER, WHITE_COLOR} from "../../constants";
import {boxShadow} from "../../utils";
import Button from "../../components/button.component";
import {LockOpenIcon} from "react-native-heroicons/outline";
import auth from '@react-native-firebase/auth';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {emailPasswordSignIn} from "../../services/firebase/authentication/email-password-signin.service";
import InputAsterikText from "../../components/input-asterik.component";

const USERNAME_TITLE = "Username";
const PASSWORD_TITLE = "Password";
const USERNAME_PLACEHOLDER = "Your username...";
const PASSWORD_PLACEHOLDER = "Your password...";

const LoginScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    const handleLogin = () => {
        void emailPasswordSignIn(navigation, dispatch, credentials.email, credentials.password);
    };

    return (
        <>
            <LoginBackground  height="100%"
                              preserveAspectRatio="xMinYMin slice"
                              width="100%"
                               style={{ position: 'absolute' }}/>
            <SafeAreaView style={styles.wrapper}>
                <View style={[styles.loginContainer, boxShadow(styles)]}>
                    <View style={styles.loginForm}>
                        <View style={{width: deviceWidth / 1.35, paddingBottom: 16}}>
                            <View style={styles.loginInputContainer}>
                                <Text style={styles.inputTitle}>
                                    {USERNAME_TITLE}
                                </Text>
                                <InputAsterikText/>
                            </View>
                            <TextInput
                                onChangeText={(val) => setCredentials({...credentials, email: val})}
                                placeholderTextColor={INPUT_GRAY_COLOR}
                                placeholder={USERNAME_PLACEHOLDER}
                                style={styles.formInput}>
                            </TextInput>
                        </View>

                        <View style={{width: deviceWidth / 1.35, display: 'flex'}}>
                            <View style={styles.loginInputContainer}>
                                <Text style={styles.inputTitle}>
                                    {PASSWORD_TITLE}
                                </Text>
                                <InputAsterikText/>
                            </View>
                            <TextInput
                                onChangeText={(val) => setCredentials({...credentials, password: val})}
                                secureTextEntry
                                placeholderTextColor={INPUT_GRAY_COLOR}
                                placeholder={PASSWORD_PLACEHOLDER}
                                style={styles.formInput}>
                            </TextInput>
                        </View>
                    </View>

                     <View style={styles.loginOptionContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTER.AUTHENTICATION.REGISTER_SCREEN)}
                        >
                            <Text style={styles.loginOptionText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate(ROUTER.AUTHENTICATION.FORGOT_PASSWORD_SCREEN)}
                        >
                            <Text style={styles.loginOptionText}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>

                    <Button styles={styles.loginButton} onPress={() => handleLogin()}>
                        <LockOpenIcon color={WHITE_COLOR} size={getFontScaledSize(26)}/>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </Button>

                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center',
        flex: 1
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    loginContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        height: deviceHeight / 2.8,
        width: deviceWidth / 1.15,
        paddingVertical: dp(48),
        borderRadius: 8,
        backgroundColor: WHITE_COLOR
    },
    loginButton: {
        width: deviceWidth / 1.35,
        height: deviceHeight / 20,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    loginButtonText: {
        color: WHITE_COLOR,
        fontSize: getFontScaledSize(20),
        fontWeight: '600',
        paddingLeft: 10,
    },
    loginInputContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingBottom: 8
    },
    inputTitle: {
        color: BLACK_COLOR,
        fontWeight: '600',
        fontSize: getFontScaledSize(19),
        paddingRight: 6,
    },
    formInput: {
        fontSize: getFontScaledSize(14),
        height: deviceHeight / 20,
        paddingHorizontal: dp(32),
        borderRadius: 8,
        borderColor: INPUT_GRAY_COLOR,
        borderWidth: 1,
        width: deviceWidth / 1.35
    },
    loginOptionContainer: {
        flexDirection: 'row',
        width: deviceWidth / 1.35,
        display: 'flex',
        justifyContent: 'space-between'
    },
    loginOptionText: {
        color: ORANGE_COLOR,
        fontWeight: '400',
        fontSize: getFontScaledSize(16)
    }
});

export default React.memo(LoginScreen);
