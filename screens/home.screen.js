import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Button from "../components/button.component";
import {boxShadow, deviceHeight, deviceWidth} from "../utils";
import {WHITE_COLOR} from "../constants";
import {BanknotesIcon, CurrencyDollarIcon} from "react-native-heroicons/outline";

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleOnPress = () => {
    alert(1);
  }

  const Header = () => {
    return (
      <View>
        <Text style={{fontWeight: '600', fontSize: deviceWidth / 21}}>Hello Bang Ngo!</Text>
      </View>
    );
  }

  const Body = () => {
    const navigation = useNavigation();


    const Section = () => {
      const handleNavigateUploadExpense = () => {
        setTimeout(() => {
          navigation.navigate('UPLOAD_EXPENSE');
        }, 1);
      };

      const handleNavigationViewExpenses = () => {
        setTimeout(() => {
          navigation.navigate('VIEW_EXPENSES');
        }, 1);
      }

      return (
        <View style={[styles.section, {...boxShadow(styles)}]}>
          <Button styles={styles.sectionButton}
                  onPress={() => handleNavigateUploadExpense()}
          >
            <CurrencyDollarIcon color={WHITE_COLOR} size={deviceWidth / 16}/>
            <Text style={styles.sectionButtonText}>Upload my expense</Text>
          </Button>
          <Button styles={styles.sectionButton}
                  onPress={() => handleNavigationViewExpenses()}
          >
            <BanknotesIcon color={WHITE_COLOR} size={deviceWidth / 16}/>
            <Text style={styles.sectionButtonText}>View my expenses</Text>
          </Button>
        </View>
      );
    }

    return (
      <View style={{
        flex: 1,
        display: 'flex',
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
  section: {
    display: 'flex',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: WHITE_COLOR,
    width: deviceWidth / 1.1,
    height: deviceHeight / 5.8,
    borderRadius: 8,
    paddingBottom: 6,
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 10,
  },
  sectionButton: {
    height: deviceHeight / 7.6,
    width: deviceWidth / 2.5,
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginLeft: 10,
    marginTop: 10,
  },
  sectionButtonText: {
    fontWeight: '600',
    color: WHITE_COLOR,
    fontSize: deviceWidth / 21,
    paddingTop: 6
  }
})


export default HomeScreen;
