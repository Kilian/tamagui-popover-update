import { defaultConfig } from "@tamagui/config/v4";
import { TamaguiProvider, createTamagui } from "tamagui";
import { createAnimations } from "@tamagui/animations-moti";
import { SafeAreaView, StyleSheet } from "react-native";

// or any files within the Snack
import AssetExample from "./components/AssetExample";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    type: "spring",
    damping: 18,
    stiffness: 50,
  },
  slow: {
    type: "spring",
    damping: 15,
    stiffness: 40,
  },
  quick: {
    type: "spring",
    damping: 50,
    mass: 0.5,
    stiffness: 250,
  },
  tooltip: {
    type: "timing",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
});

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations,
});

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={styles.container}>
        <AssetExample />
      </SafeAreaView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#ddd",
    padding: 8,
  },
});
