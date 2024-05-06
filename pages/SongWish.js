import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar, Appbar } from 'react-native-paper';
import { CurrentSong } from '../components';

function SongWish() {
  const [showSnack, setShowSnack] = React.useState(false);

  const sendSongWish = () => {
    setShowSnack(true);
  };

  return (
    <>
      <Appbar.Header mode="small">
        <Appbar.Content title="Wish a song" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.infoText}>
          Do you want to say hello to your family or friends or simply want to listen to your favorite song? Then you've come to the right place! Just fill out the form and we will try to include your
          song or greeting in our program.
        </Text>
        <TextInput style={styles.input} label="Song name"></TextInput>
        <TextInput style={styles.input} label="Artist"></TextInput>
        <TextInput style={{ ...styles.input, minHeight: 120 }} label="Personal message"></TextInput>
        <Button style={styles.sendButton} icon="send" mode="contained" onPress={sendSongWish}>
          Send request
        </Button>
      </ScrollView>
      <Snackbar onDismiss={() => setShowSnack(false)} visible={showSnack}>
        Thank you for your request!
      </Snackbar>
      <CurrentSong />
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

export { SongWish };
