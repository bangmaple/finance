import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {deviceHeight, deviceWidth} from "../utils";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../constants";
import {
    CalendarIcon,
    ChevronDoubleRightIcon,
    CircleStackIcon,
    CurrencyDollarIcon,
    QueueListIcon
} from "react-native-heroicons/outline";
import Header from "../components/header.component";
import dayjs from "dayjs";
import CalendarModal from "../components/calendar-modal.component";
import {CameraIcon} from "react-native-heroicons/solid";
import Switch from "react-native/Libraries/Components/Switch/Switch";

const UploadExpenseScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isTransactionDateModal, setTransactionDateModalShown] = useState(false);
    const [expense, setExpense] = useState({
        transactionDate: dayjs().format('YYYY-MM-DD'),
        project: undefined,

    })

    const RenderTagProject = () => {
        return (
            <View style={{
                flexDirection: 'column',
            }}>
                <View style={{
                    paddingBottom: 6,
                }}>
                    <Text style={{
                        color: BLACK_COLOR,
                        fontSize: deviceWidth / 23,
                        fontWeight: '600'
                    }}>Tag to project</Text>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <View style={{
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        backgroundColor: INPUT_GRAY_COLOR,
                        height: 50,
                        width: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <QueueListIcon color={GRAY_COLOR} size={deviceWidth / 14}/>
                    </View>
                    <TouchableOpacity style={{
                        borderLeftColor: GRAY_COLOR,
                        borderLeftWidth: 1,
                        height: 50,
                        width: deviceWidth / 1.6,
                        borderBottomRightRadius: 8,
                        borderTopRightRadius: 8,
                        backgroundColor: INPUT_GRAY_COLOR,
                        display: 'flex',
                        justifyContent: 'center',
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{color: GRAY_COLOR, fontWeight: '600', fontSize: deviceWidth / 21}}>
                            Select a project...
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: WHITE_COLOR
        }}>
            <Header text="Upload my expense"/>
            <View style={{
                display: 'flex',
                justifyContent: 'space-between',
                flex: 1,
                flexDirection: 'column',
            }}>

                <ScrollView style={{}}>
                    <View style={{
                        flex: 1,
                        paddingVertical: 10,
                        display: 'flex',
                        alignItems: 'center',
                    }}>

                        {/* <View style={{
          borderRadius: 8,
          backgroundColor: WHITE_COLOR,
          height: deviceHeight / 2,
          width: deviceWidth / 1.1,
          ...boxShadow(styles)}}>

        </View>*/}

                        <View style={{
                            flexDirection: 'column'
                        }}>
                            {isTransactionDateModal ? <CalendarModal
                                height={deviceHeight / 1.7}
                                isOpened={isTransactionDateModal}
                                maxDate={dayjs().format('YYYY-MM-DD')}
                                value={expense.transactionDate}
                                setValue={(val) => setExpense({
                                    ...expense,
                                    transactionDate: val,
                                })}
                                title="Choose a transaction date"
                                toggleOpened={() => setTransactionDateModalShown(!isTransactionDateModal)}
                            /> : null}

                            <View style={{
                                height: deviceHeight / 4.6,
                                width: deviceWidth / 1.15,
                                borderRadius: 8,
                                backgroundColor: INPUT_GRAY_COLOR,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <CameraIcon color={GRAY_COLOR} size={deviceWidth / 10}/>
                                <Text style={{color: GRAY_COLOR, fontWeight: '600', fontSize: deviceWidth / 23}}>Upload
                                    your image here...</Text>
                            </View>

                            <View style={{
                                paddingTop: 10,

                            }}>
                                <View style={{
                                    paddingBottom: 6,
                                }}>
                                    <Text style={{color: BLACK_COLOR, fontSize: deviceWidth / 23, fontWeight: '600'}}>
                                        Sales type
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        borderTopLeftRadius: 8,
                                        borderBottomLeftRadius: 8,
                                        backgroundColor: INPUT_GRAY_COLOR,
                                        height: 50,
                                        width: 50,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <CircleStackIcon color={GRAY_COLOR} size={deviceWidth / 14}/>
                                    </View>
                                    <TouchableOpacity style={{
                                        borderLeftColor: GRAY_COLOR,
                                        borderLeftWidth: 1,
                                        height: 50,
                                        width: deviceWidth / 1.35,
                                        borderBottomRightRadius: 8,
                                        borderTopRightRadius: 8,
                                        backgroundColor: INPUT_GRAY_COLOR,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        paddingHorizontal: 10,
                                    }}>
                                        <Text
                                            style={{color: GRAY_COLOR, fontWeight: '600', fontSize: deviceWidth / 21}}>
                                            Select your sale type...
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{flexDirection: 'column', paddingTop: 10,}}>
                                <View style={{
                                    paddingBottom: 6,
                                }}>
                                    <Text style={{color: BLACK_COLOR, fontSize: deviceWidth / 23, fontWeight: '600'}}>Transaction
                                        date: </Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{
                                        borderTopLeftRadius: 8,
                                        borderBottomLeftRadius: 8,
                                        backgroundColor: INPUT_GRAY_COLOR,
                                        height: 50,
                                        width: 50,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <CalendarIcon color={GRAY_COLOR} size={deviceWidth / 14}/>
                                    </View>
                                    <TouchableOpacity
                                        style={{
                                            borderLeftColor: GRAY_COLOR,
                                            borderLeftWidth: 1,
                                            height: 50,
                                            width: deviceWidth / 1.35,
                                            borderBottomRightRadius: 8,
                                            borderTopRightRadius: 8,
                                            backgroundColor: INPUT_GRAY_COLOR,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            paddingHorizontal: 10,
                                        }}
                                        onPress={() => setTransactionDateModalShown(!isTransactionDateModal)}>
                                        <Text style={{
                                            color: GRAY_COLOR,
                                            fontSize: deviceWidth / 21,
                                            fontWeight: '600'
                                        }}>{dayjs(expense.transactionDate, {
                                            format: 'YYYY-MM-DD'
                                        }).format('MM-DD-YYYY')}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                paddingTop: 10,

                            }}>
                                <View style={{
                                    flexDirection: 'column'
                                }}>
                                    <View style={{
                                        paddingBottom: 6,
                                    }}>
                                        <Text style={{
                                            color: BLACK_COLOR,
                                            fontSize: deviceWidth / 23,
                                            fontWeight: '600'
                                        }}>Paid</Text>
                                    </View>
                                    <Switch/>
                                </View>
                                <RenderTagProject/>
                            </View>

                            <View style={{
                                paddingTop: 10,

                            }}>
                                <View style={{
                                    paddingBottom: 6,
                                }}>
                                    <Text style={{
                                        color: BLACK_COLOR,
                                        fontWeight: '600',
                                        fontSize: deviceWidth / 23
                                    }}>Amount</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{
                                        borderTopLeftRadius: 8,
                                        borderBottomLeftRadius: 8,
                                        backgroundColor: INPUT_GRAY_COLOR,
                                        height: 50,
                                        width: 50,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <CurrencyDollarIcon color={GRAY_COLOR} size={deviceWidth / 14}/>
                                    </View>
                                    <TextInput
                                        type="number"
                                        style={{
                                            fontWeight: '600',
                                            fontSize: deviceWidth / 21,
                                            borderLeftColor: GRAY_COLOR,
                                            borderLeftWidth: 1,
                                            height: 50,
                                            width: deviceWidth / 1.35,
                                            borderBottomRightRadius: 8,
                                            borderTopRightRadius: 8,
                                            backgroundColor: INPUT_GRAY_COLOR,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            paddingHorizontal: 10,
                                        }} placeholder="Input your amount..." placeholderColor={GRAY_COLOR}>

                                    </TextInput>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    height: deviceHeight / 10,
                    borderTopWidth: 1,
                    borderTopColor: INPUT_GRAY_COLOR,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: deviceWidth / 1.35,
                        height: deviceHeight / 16,
                        backgroundColor: ORANGE_COLOR,
                        flexDirection: 'row',
                        borderRadius: 8,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: WHITE_COLOR,
                            fontSize: deviceWidth / 21,
                            fontWeight: '600',
                            paddingRight: 10,
                        }}>
                            Proceed to next step
                        </Text>
                        <ChevronDoubleRightIcon size={deviceWidth / 14} color={WHITE_COLOR}/>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default React.memo(UploadExpenseScreen);
