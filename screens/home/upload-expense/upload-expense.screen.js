import React, {createRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {deviceHeight, deviceWidth} from "../../../utils";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR, ORANGE_COLOR, WHITE_COLOR} from "../../../constants";
import {CalendarIcon, CurrencyDollarIcon, QueueListIcon} from "react-native-heroicons/outline";
import Header from "../../../components/header.component";
import dayjs from "dayjs";
import CalendarModal from "../../../components/calendar-modal.component";
import Switch from "react-native/Libraries/Components/Switch/Switch";
import UploadImage from "../../../components/app/upload-expense/upload-image.component";
import Footer from "../../../components/app/upload-expense/footer.component";
import RenderSelectSaleType from "../../../components/app/upload-expense/render-sale-type.component";

const UploadExpenseScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isTransactionDateModal, setTransactionDateModalShown] = useState(false);
    const [expense, setExpense] = useState({
        transactionDate: dayjs().format('YYYY-MM-DD'),
        project: undefined,
        transactionType: 'CASH',
        saleType: undefined,
        amount: undefined
    });

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

    const RenderCalendarModal = () => {
        if (isTransactionDateModal) {
            return <CalendarModal
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
            />
        }
        return null;
    }

    const numberRef = createRef();

    const RenderInputAmount = () => {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.inputTitleContainer}>
                    <Text style={styles.inputTitleText}>Amount</Text>
                </View>
                <View style={styles.inputInnerContainer}>
                    <View style={styles.inputInnerLogoContainer}>
                        <CurrencyDollarIcon color={GRAY_COLOR} size={deviceWidth / 14}/>
                    </View>
                    <TextInput
                        numberOfLines={1}
                        value={numberRef.current}
                        keyboardType="number-pad"
                        style={styles.inputInnerTextInput}
                        onChangeText={(val) => {numberRef.current = val}}
                               placeholder="Input your amount..." placeholderColor={GRAY_COLOR}>
                    </TextInput>
                </View>
            </View>
        );
    }

    const RenderSelectTransactionDate = () => {
        return (
            <View style={{flexDirection: 'column', paddingTop: 10,}}>
                <View style={{
                    paddingBottom: 6,
                }}>
                    <Text style={{color: BLACK_COLOR, fontSize: deviceWidth / 23, fontWeight: '600'}}>Transaction
                        date</Text>
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
        );
    };

    const RenderTransactionType = () => {
        return (
            <View style={{flexDirection: 'column', paddingTop: 10,}}>
                <View style={{
                    paddingBottom: 6,
                }}>
                    <Text style={{color: BLACK_COLOR, fontSize: deviceWidth / 23, fontWeight: '600'}}>Transaction
                        type</Text>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => setExpense({
                        ...expense,
                        transactionType: 'CASH'
                    })} style={[styles.transactionTypeCashContainer, {
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                    }, expense.transactionType === 'CASH' ? {backgroundColor: ORANGE_COLOR} : undefined
                    ]}>
                        <Text style={[styles.transactionTypeText,
                            expense.transactionType === 'CASH' ? {color: WHITE_COLOR} : undefined
                        ]}>CASH</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setExpense({
                        ...expense,
                        transactionType: 'BANK'
                    })} style={[styles.transactionTypeCashContainer, {
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                    }, expense.transactionType === 'BANK' ? {backgroundColor: ORANGE_COLOR} : undefined]}>
                        <Text style={[styles.transactionTypeText,
                            expense.transactionType === 'BANK' ? {color: WHITE_COLOR} : undefined]}>
                            BANK
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

            <RenderCalendarModal/>
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

                        <UploadImage/>
                        <View style={{
                            flexDirection: 'column'
                        }}>
                            <RenderSelectSaleType setSaleTypeExpense={(val) => setExpense({
                                ...expense,
                                saleType: val
                            })}/>
                            <RenderSelectTransactionDate/>
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
                            <RenderTransactionType/>
                            <RenderInputAmount/>
                        </View>
                    </View>

                </ScrollView>
                <Footer data={expense}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 10,
    },
    inputTitleContainer: {
        paddingBottom: 6,
    },
    inputTitleText: {
        color: BLACK_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 23
    },
    inputInnerContainer: {
        flexDirection: 'row'
    },
    inputInnerLogoContainer: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: INPUT_GRAY_COLOR,
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputInnerTextInput: {
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
    },
    inputInnerTextPlaceholder: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 21
    },

    transactionTypeCashContainer: {
        height: deviceHeight / 16,
        width: deviceWidth / 2.3,
        backgroundColor: INPUT_GRAY_COLOR,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    transactionTypeText: {
        color: GRAY_COLOR,
        fontWeight: '600',
        fontSize: deviceWidth / 21
    }
});

export default React.memo(UploadExpenseScreen);
