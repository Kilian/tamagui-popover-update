import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { Popover, Accordion } from "tamagui";

export default function AssetExample() {
  const [flag, setFlag] = useState(false);

  function handleValueChange() {
    const interval = setInterval(() => {
      setFlag((prev) => !prev);
    }, 8);

    setTimeout(() => {
      clearInterval(interval);
    }, 320);
  }

  return (
    <View style={styles.container}>
      <Popover placement="right-start" stayInFrame allowFlip={flag}>
        <Popover.Trigger>
          <View>
            <Text>Open Popover</Text>
          </View>
        </Popover.Trigger>
        <Popover.Content backgroundColor="white">
          <Popover.Arrow size="$4" />
          <Text>Some other content</Text>
          <Accordion type="single" collapsible backgroundColor="white" onValueChange={handleValueChange}>
            <Accordion.Item value="a">
              <Accordion.Trigger backgroundColor="white">
                <Text>Open the accordion</Text>
              </Accordion.Trigger>
              <Accordion.HeightAnimator animation="quick">
                <Accordion.Content animation="quick" backgroundColor="white" overflow="hidden" marginBottom={30}>
                  <Text>Some other content</Text>
                  <Text>Some other content</Text>
                  <Text>Some other content</Text>
                  <Text>Some other content</Text>
                  <Text>Some other content</Text>
                  <Text>Some other content</Text>
                </Accordion.Content>
              </Accordion.HeightAnimator>
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
