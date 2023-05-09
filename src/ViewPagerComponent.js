import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ViewPager from "@react-native-community/viewpager";

class ViewPagerComponent extends Component {
  render() {
    return (
      <ViewPager style={{ flex: 1 }}>
        <View key={1} style={[styles.viewStyle, styles.view1Style]}>
          <Text style={styles.textStyle}>첫번째 뷰</Text>
        </View>
        <View key={2} style={[styles.viewStyle, styles.view2Style]}>
          <Text style={styles.textStyle}>두번째 뷰</Text>
        </View>
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flex: 1,
  },
  view1Style: {
    backgroundColor: "pink",
  },
  view2Style: {
    backgroundColor: "lightgreen",
  },
  textStyle: {
    fontSize: 24,
    color: "white",
    fontWeight: "700",
  },
});

export default ViewPagerComponent;
