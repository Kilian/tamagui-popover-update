import { config } from "@tamagui/config"
import { TamaguiProvider, createTamagui } from "tamagui"
import { SafeAreaView, StyleSheet } from 'react-native';

// or any files within the Snack
import AssetExample from './components/AssetExample';


const tamaguiConfig = createTamagui(config)

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
    justifyContent: 'flex-end',
    backgroundColor: '#ddd',
    padding: 8,
  },

});
