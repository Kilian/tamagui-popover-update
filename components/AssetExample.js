import { Text, View, StyleSheet } from "react-native";

import { Popover, Accordion } from "tamagui";

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Popover placement="right-start" stayInFrame>
        <Popover.Trigger>
          <View>
            <Text>Open Popover</Text>
          </View>
        </Popover.Trigger>
        <Popover.Content backgroundColor="white">
          <Popover.Arrow size="$4" />
          <Text>Some other content</Text>
          <Accordion type="single" collapsible backgroundColor="white">
            <Accordion.Item value="a">
              <Accordion.Trigger backgroundColor="white">
                <Text>Open the accordion</Text>
              </Accordion.Trigger>
              <Accordion.Content backgroundColor="white">
                <Text>Some other content</Text>
                <Text>Some other content</Text>
                <Text>Some other content</Text>
                <Text>Some other content</Text>
                <Text>Some other content</Text>
                <Text>Some other content</Text>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Popover.Content>
      </Popover>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 24,
    paddingBottom: 100,
  },
});
