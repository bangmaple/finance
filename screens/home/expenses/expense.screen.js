import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, VirtualizedList} from "react-native";
import {deviceHeight, deviceWidth} from "../../../utils";
import {ORANGE_COLOR, WHITE_COLOR} from "../../../constants";
import {boxShadow} from "../../../utils";
import Header from "../../../components/header.component";

const data = [{
  id: '1234'
}];

const ExpenseScreen = () => {

  const FilteringSection = () => {

    const styles = StyleSheet.create({
      button: {
        backgroundColor: WHITE_COLOR,
        borderWidth: 2,
        borderColor: ORANGE_COLOR,
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      buttonText: {color: ORANGE_COLOR, fontWeight: '600', fontSize: deviceWidth / 24}
    })

    return (
      <View style={{
        height: deviceHeight / 10,
        width: deviceWidth / 1.1,
        borderRadius: 8,
        backgroundColor: WHITE_COLOR,
        ...boxShadow(styles),
        alignSelf: 'center'
      }}>
        <ScrollView horizontal style={{
          paddingTop: 10,
        }}>
          <TouchableOpacity style={[{
            marginLeft: 10,
            height: deviceHeight / 30,
            width: deviceWidth / 4.4,
          }, {...styles.button}]}>
            <Text style={styles.buttonText}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{
            marginLeft: 10,

            height: deviceHeight / 30,
            width: deviceWidth / 4.6,
          }, {...styles.button}]}>
            <Text style={styles.buttonText}>Sales</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{
            marginLeft: 10,

            height: deviceHeight / 30,
            width: deviceWidth / 3,
          }, {...styles.button}]}>
            <Text style={styles.buttonText}>Assets/Liability</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );

  }

  const RenderItem = (props) => {
    return (
      <View style={{

      }}>

      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE_COLOR}}>
      <Header text="View my expenses"/>
      <FilteringSection/>
      <VirtualizedList
        data={data}
        keyExtractor={(data, index) => String(data.id)}
        getItemCount={() => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item }) => (
          <RenderItem item={item} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  }
});

export default ExpenseScreen;
