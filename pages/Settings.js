import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Appbar, Switch } from 'react-native-paper';

function Settings() {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <>
      <Appbar.Header mode="small">
        <Appbar.Content title="Settings" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.darkMode}>
          <Text>Dark Mode</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
        <View>
          <Text>Copyright 2024 by FantasyFM</Text>
          <Text>Developed by Devfle</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  input: {
    marginVertical: 8,
  },
  headline: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 12,
  },
  infoText: {
    marginBottom: 12,
  },
  sendButton: {
    marginTop: 12,
  },
  darkMode: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});

export { Settings };
