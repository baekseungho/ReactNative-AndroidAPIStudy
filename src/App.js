import { StyleSheet, Text, View } from "react-native";
import Toolbars from "./Toolbar";
import Home from "./Home";
import ViewPagerComponent from "./ViewPagerComponent";
import DatePicker from "./DatePicker";
import Toast from "./Toast";

function getScene(scene) {
  switch (scene) {
    case "Home":
      return Home;
    case "Toolbars":
      return Toolbars;
    case "ViewPagerComponent":
      return ViewPagerComponent;
    case "DatePicker":
      return DatePicker;
    case "Toast":
      return Toast;
  }
}
const Apps = (props) => {
  const Scene = getScene(props.scene);
  return <Scene openDrawer={props.openDrawer} jump={props.jump} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Apps;
