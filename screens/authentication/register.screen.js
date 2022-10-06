import React, {createRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {BLACK_COLOR, INPUT_GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../../constants";
import {boxShadow, deviceHeight, deviceWidth, getFontScaledSize} from "../../utils";
import InputAsterikText from "../../components/input-asterik.component";
import Button from '../../components/button.component';
import {useNavigation} from '@react-navigation/native';
import LoginBackground from '../../assets/background/login-background.svg';

const RegisterScreen = () => {

    const navigation = useNavigation();

    const emailAddressRef = createRef();
    const passwordRef = createRef();
    const rePasswordRef = createRef();

    const handleRegister = () => {

    }

    return (
        <>
            <LoginBackground height="100%"
                             preserveAspectRatio="xMinYMin slice"
                             width="100%"
                             style={{position: 'absolute'}}/>
            <SafeAreaView style={{
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
                flex: 1
            }}>

                <View style={{
                    borderRadius: 8,
                    width: deviceWidth / 1.15,
                    height: deviceHeight / 2,
                    backgroundColor: WHITE_COLOR,
                    ...boxShadow(styles),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingVertical: 16
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: 10,
                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingBottom: 10,
                        }}>
                            <Text style={{
                                color: BLACK_COLOR,
                                fontWeight: '600',
                                fontSize: getFontScaledSize(17),
                                paddingRight: 6
                            }}>E-mail address</Text>
                            <InputAsterikText/>
                        </View>
                        <TextInput placeholder="Your e-mail address..." placeholderTextColor={INPUT_GRAY_COLOR} style={{
                            height: 50,
                            width: deviceWidth / 1.35,
                            paddingHorizontal: 10,
                            borderRadius: 8,
                            borderColor: INPUT_GRAY_COLOR,
                            borderWidth: 1,
                        }}/>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: 10,

                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingBottom: 10,
                        }}>
                            <Text style={{
                                color: BLACK_COLOR,
                                fontWeight: '600',
                                fontSize: getFontScaledSize(17),
                                paddingRight: 6
                            }}>Password</Text>
                            <InputAsterikText/>
                        </View>
                        <TextInput placeholder="Your password..." placeholderTextColor={INPUT_GRAY_COLOR} style={{
                            height: 50,
                            width: deviceWidth / 1.35,
                            paddingHorizontal: 10,
                            borderRadius: 8,
                            borderColor: INPUT_GRAY_COLOR,
                            borderWidth: 1,
                        }}/>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: 10,

                    }}>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingBottom: 10,
                        }}>
                            <Text style={{
                                color: BLACK_COLOR,
                                fontWeight: '600',
                                fontSize: getFontScaledSize(17),
                                paddingRight: 6
                            }}>Password confirmation</Text>
                            <InputAsterikText/>
                        </View>
                        <TextInput placeholder="Your confirmation password..." placeholderTextColor={INPUT_GRAY_COLOR}
                                   style={{
                                       height: 50,
                                       width: deviceWidth / 1.35,
                                       paddingHorizontal: 10,
                                       borderRadius: 8,
                                       borderColor: INPUT_GRAY_COLOR,
                                       borderWidth: 1,
                                   }}/>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: 10,

                    }}>
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Text style={{color: ORANGE_COLOR, fontSize: getFontScaledSize(16), fontWeight: '500'}}>I
                                already have my account</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingBottom: 10,

                    }}>
                        <Button onPress={() => handleRegister()} styles={{
                            height: 50,
                            width: deviceWidth / 1.35,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: getFontScaledSize(19),
                                fontWeight: '600',
                                color: WHITE_COLOR
                            }}>Register my account</Text>
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({});

export default RegisterScreen;