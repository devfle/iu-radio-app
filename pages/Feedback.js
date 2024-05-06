import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';

function Feedback() {
  return (
    <>
      <Appbar.Header mode="small">
        <Appbar.Content title="Feedback" />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.infoText}>This page is for employees only. For this reason it is also password protected. Employees can view your feedback here.</Text>
        <TextInput style={styles.input} label="Username"></TextInput>
        <TextInput secureTextEntry style={styles.input} label="Password"></TextInput>
        <Button style={styles.sendButton} icon="login" mode="contained">
          Login
        </Button>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
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
});

export { Feedback };
