import { Image, StyleSheet, Platform, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-black">
      <View className="header w-100 bg-blue-800 px-4">
        <View className="header-name-logo"></View>
        <Text className="text-2xl">Krollitte</Text>
      </View>
    </View>
  );
}
