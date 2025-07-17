import { Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Layout</Text>
      </View>
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;
