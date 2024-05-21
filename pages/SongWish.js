import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar, Appbar, Text } from 'react-native-paper';
import { CurrentSong } from '../components';

function SongWish() {
  const [showSnack, setShowSnack] = React.useState(false);
  const [songName, setSongName] = React.useState(null);
  const [artistName, setArtistName] = React.useState(null);
  const [personalMessage, setPersonalMessage] = React.useState(null);

  const sendSongWish = () => {
    setShowSnack(true);
    const songWishData = {
      artistName,
      songName,
      personalMessage,
    };

    console.log('Feedback Data:', songWishData);

    fetch('XY/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(songWishData),
    }).catch(() => {
      console.warn('error while sending song wish');
    });
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
        <TextInput onChangeText={(t) => setSongName(t)} style={styles.input} label="Song name"></TextInput>
        <TextInput onChangeText={(t) => setArtistName(t)} style={styles.input} label="Artist"></TextInput>
        <TextInput onChangeText={(t) => setPersonalMessage(t)} style={{ ...styles.input, minHeight: 120 }} label="Personal message"></TextInput>
        <Button style={styles.sendButton} icon="send" mode="contained" onPress={sendSongWish}>
          Send request
        </Button>
      </ScrollView>
      <CurrentSong />
      <Snackbar onDismiss={() => setShowSnack(false)} visible={showSnack}>
        Thank you for your request!
      </Snackbar>
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
