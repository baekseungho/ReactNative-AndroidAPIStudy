import React, { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from "react-native";
import Apps from "./src/App";
import Menu from "./src/Menu";

const App = () => {
  const drawer = useRef(null);

  const [scene, setScene] = useState("Home");
  // 슬라이드 메뉴 위치 바꾸기 - drawerPos가 left면 왼쪽에메뉴, right면 오른쪽에 메뉴
  const [drawerPos, setDrawerPos] = useState("left");

  const jump = (destination) => {
    setScene(destination);
    drawer.current?.closeDrawer();
  };

  const changeDrawerPos = () => {
    if (drawerPos == "left") {
      setDrawerPos("right");
    } else {
      setDrawerPos("left");
    }
  };

  // 슬라이드 메뉴 안에 표시될 내용
  const navigationView = () => {
    <View style={[styles.container, styles.naviContainer]}>
      <Text style={styles.paragraph}>슬라이드 메뉴</Text>
      <Button title="닫기" onPress={() => drawer.current?.closeDrawer()} />
    </View>;
  };
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPos}
      renderNavigationView={() => <Menu onPress={jump} />}
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}> 슬라이드 위치: {drawerPos}</Text>
        <Button title="위치 바꾸기" onPress={() => changeDrawerPos()} />
        <Button title="OPEN" onPress={() => drawer.current?.openDrawer()} />
      </View>
      <Apps
        openDrawer={() => drawer.current.openDrawer()}
        jump={jump}
        scene={scene}
      />
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  naviContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    adding: 17,
    fontSize: 15,
    textAlign: "center",
  },
});

export default App;
