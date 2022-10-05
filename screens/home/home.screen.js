import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, PixelRatio} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Button from "../../components/button.component";
import {boxShadow, deviceHeight, deviceWidth, dp, getFontScaledSize} from "../../utils";
import {ROUTER, WHITE_COLOR} from "../../constants";
import {BanknotesIcon, CurrencyDollarIcon} from "react-native-heroicons/outline";

const UPLOAD_MY_EXPENSE_TITLE = "Upload my expense";
const SUMMARY_MY_EXPENSES_TITLE = "View my expenses summary";

const HomeScreen = () => {

  const navigation = useNavigation();


  const Header = () => {
    return (
      <View>
        <Text style={{fontWeight: '600', fontSize: getFontScaledSize(21)}}>Hello User!</Text>
      </View>
    );
  }

  const Body = () => {
    const navigation = useNavigation();


    const Section = () => {
      const handleNavigateUploadExpense = () => {
        setTimeout(() => {
          navigation.navigate(ROUTER.HOME.UPLOAD_EXPENSE.UPLOAD_EXPENSE_ROUTE);
        }, 1);
      };

      const handleNavigationViewExpenses = () => {
        setTimeout(() => {
          navigation.navigate(ROUTER.HOME.EXPENSES.EXPENSES_ROUTE);
        }, 1);
      }

      return (
        <View style={[styles.section, {...boxShadow(styles)}]}>
          <Button styles={styles.sectionButton}
                  onPress={() => handleNavigateUploadExpense()}
          >
            <CurrencyDollarIcon color={WHITE_COLOR} size={deviceWidth / 16}/>
            <Text style={styles.sectionButtonText}>
              {UPLOAD_MY_EXPENSE_TITLE}
            </Text>
          </Button>
          <Button styles={styles.sectionButton}
                  onPress={() => handleNavigationViewExpenses()}
          >
            <BanknotesIcon color={WHITE_COLOR} size={deviceWidth / 16}/>
            <Text style={styles.sectionButtonText}>
              {SUMMARY_MY_EXPENSES_TITLE}
            </Text>
          </Button>
        </View>
      );
    }

    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Section/>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{
        alignSelf: 'center'
      }}>
        <Header/>
        <Body/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start'
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: WHITE_COLOR,
    width: deviceWidth / 1.1,
    height: deviceHeight / 6,
    borderRadius: 8,
  },
  sectionButton: {
    height: deviceHeight / 7.6,
    width: deviceWidth / 2.4,
    flexDirection: 'column',
    paddingHorizontal: dp(32),
    paddingVertical: dp(32),
  },
  sectionButtonText: {
    fontWeight: '600',
    color: WHITE_COLOR,
    fontSize: getFontScaledSize(16),
    paddingTop: dp(10)
  }
})


export default HomeScreen;
