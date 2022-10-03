import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {deviceHeight, deviceWidth} from "../utils";
import {BLACK_COLOR, GRAY_COLOR, INPUT_GRAY_COLOR, WHITE_COLOR} from "../constants";
import {CalendarIcon, CircleStackIcon, CurrencyDollarIcon, QueueListIcon} from "react-native-heroicons/outline";
import Header from "../components/header.component";
import dayjs from "dayjs";
import CalendarModal from "../components/calendar-modal.component";
import Switch from "react-native/Libraries/Components/Switch/Switch";
import UploadImage from "../components/app/upload-expense/upload-image.component";
import Footer from "../components/app/upload-expense/footer.component";

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
                    <TextInput type="number" style={styles.inputInnerTextInput}
                               placeholder="Input your amount..." placeholderColor={GRAY_COLOR}>
                    </TextInput>
                </View>
            </View>
        );
    }

    const RenderSelectSaleType = () => {
        return (
            <View style={styles.inputContainer}>
                <View style={styles.inputTitleContainer}>
                    <Text style={styles.inputTitleText}>
                        Sales type
                    </Text>
                </View>
                <View style={styles.inputInnerContainer}>
                    <View style={styles.inputInnerLogoContainer}>
                        <CircleStackIcon color={GRAY_COLOR} size={deviceWidth / 14}/>
                    </View>
                    <TouchableOpacity style={styles.inputInnerTextInput}>
                        <Text
                            style={styles.inputInnerTextPlaceholder}>
                            Select your sale type...
                        </Text>
                    </TouchableOpacity>
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
                            <RenderSelectSaleType/>
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

                            <RenderInputAmount/>
                        </View>
                    </View>

                </ScrollView>
                <Footer/>
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
    }
});

export default React.memo(UploadExpenseScreen);
