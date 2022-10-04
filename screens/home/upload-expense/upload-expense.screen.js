import React, {createRef, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {deviceWidth, getFontScaledSize} from "../../../utils";
import {BLACK_COLOR, WHITE_COLOR} from "../../../constants";
import Header from "../../../components/header.component";
import dayjs from "dayjs";
import Switch from "react-native/Libraries/Components/Switch/Switch";
import Footer from "../../../components/app/upload-expense/footer.component";
import RenderSelectTransactionDate from "../../../components/app/upload-expense/render-transaction-date/render-transaction-date.component";
import RenderTransactionType
    from "../../../components/app/upload-expense/render-transaction-type/render-transaction-type.component";
import RenderInputAmount
    from "../../../components/app/upload-expense/render-input-amount/render-input-amount.component";
import RenderTagToProject
    from "../../../components/app/upload-expense/render-tag-to-project/render-tag-to-project.component";
import RenderUploadImage
    from "../../../components/app/upload-expense/render-upload-image/render-upload-image.component";
import RenderSelectSaleType from "../../../components/app/upload-expense/render-sale-type/render-sale-type.component";

const UPLOAD_EXPENSE_HEADER_TITLE = "Upload my expense";

const UploadExpenseScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isTransactionDateModal, setTransactionDateModalShown] = useState(false);
    const [expense, setExpense] = useState({
        transactionDate: dayjs().format('YYYY-MM-DD'),
        isPaid: false,
        project: undefined,
        transactionType: 'CASH',
        saleType: undefined,
        amount: undefined
    });
    const expenseAmountRef = createRef();

    return (
        <SafeAreaView style={styles.container}>

            <Header text={UPLOAD_EXPENSE_HEADER_TITLE}/>
            <View style={styles.wrapper}>
                <ScrollView style={{}}>
                    <View style={styles.bodyContainer}>
                        <RenderUploadImage/>
                        <View>
                            <RenderSelectSaleType setSaleTypeExpense={(val) => setExpense({
                                ...expense,
                                saleType: val
                            })}/>
                            <RenderSelectTransactionDate
                                toggleTransactionDateModal={() => setTransactionDateModalShown(!isTransactionDateModal)}
                                expenseTransactionDate={expense.transactionDate}
                                setExpenseTransactionDate={(val) => setExpense({
                                    ...expense,
                                    transactionDate: val,
                                })}
                            />
                            <View style={{flexDirection: 'row', paddingTop: 10,}}>
                                <View>
                                    <View style={{paddingBottom: 6,}}>
                                        <Text style={{color: BLACK_COLOR, fontSize: getFontScaledSize(23), fontWeight: '600'}}>
                                            Paid
                                        </Text>
                                    </View>
                                    <Switch value={expense.isPaid} onValueChange={(val) => setExpense({
                                        ...expense,
                                        isPaid: val
                                    })}/>
                                </View>
                                <RenderTagToProject/>
                            </View>
                            <RenderTransactionType
                                expenseTransactionType={expense.transactionType}
                                setExpenseTransactionType={(val) => setExpense({
                                    ...expense,
                                    transactionType: val
                                })}
                            />
                            <RenderInputAmount
                                    expenseAmount={expenseAmountRef.current}
                                    setExpenseAmount={(val) => {expenseAmountRef.current = val}}
                            />
                        </View>
                    </View>
                </ScrollView>
                <Footer data={expense}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE_COLOR
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'column',
    },
    bodyContainer: {
        flex: 1,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
    }
});

export default React.memo(UploadExpenseScreen);
