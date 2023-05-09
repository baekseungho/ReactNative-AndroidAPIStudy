import React from "react";
import { View, StyleSheet, Button } from "react-native";

const Menu = ({ onPress }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.button}>
        <Button onPress={() => onPress("Home")} title="Home" />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPress("Toolbars")} title="툴바" />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPress("DatePicker")} title="날짜" />
      </View>
      <View style={styles.button}>
        <Button title="토스트" onPress={() => onPress("Toast")} />
      </View>
      <View style={styles.button}>
        <Button
          title="ViewPager"
          onPress={() => onPress("ViewPagerComponent")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginBottom: 0,
  },
});

export default Menu;
