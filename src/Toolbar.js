import React, { Component } from "react";
import { View } from "react-native";
// import ToolbarAndroid from "@react-native-community/toolbar-android";
import { Toolbar, ToolbarAction, ToolbarContent } from "react-native-paper";

class Toolbars extends Component {
  render() {
    const onActionSelected = (index) => {
      if (index === 1) {
        this.props.openDrawer();
      }
    };
    return (
      <View>
        <Toolbar>
          <ToolbarContent title="툴바테스트" subtitle="툴바작은글씨 " />
          <ToolbarAction icon="more-vert" />
          <ToolbarAction icon="search" />
        </Toolbar>
      </View>
    );
  }
}

export default Toolbars;
