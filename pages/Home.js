import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Snackbar, Appbar, Text } from 'react-native-paper';
import { CurrentSong, Rating } from '../components';
import { FeedbackModal } from '../components/FeedbackModal';
import mods from '../stubs/mods.json';
import playlist from '../stubs/playlist.json';
import uuid from 'react-native-uuid';
import { sendNotification } from '../utils/sendNotification';

function Home() {
  const [showSnack, setShowSnack] = React.useState(false);
  const [showFeedback, setShowFeedback] = React.useState(false);
  const [currentPlaylist, setCurrentPlaylist] = React.useState(false);
  const [currentModerator, setCurrentModerator] = React.useState(false);

  const [starFeedback, setStarFeedback] = React.useState(null);
  const [feedbackText, setFeedbackText] = React.useState('');

  useEffect(() => {
    setCurrentPlaylist(playlist[Math.floor(Math.random() * mods.length)]);
    setCurrentModerator(mods[Math.floor(Math.random() * mods.length)]);
  }, []);

  const handleOnDismiss = () => {
    setStarFeedback(null);
    setShowFeedback(false);
  };

  const sendFeedback = async () => {
    setShowSnack(true);
    setShowFeedback(false);
    setFeedbackText('');

    const feedbackData = {
      ...starFeedback,
      id: uuid.v4(),
      name: starFeedback.scope === 'moderator' ? currentModerator?.name : currentPlaylist?.name,
      text: feedbackText,
    };

    console.log('Feedback Data:', feedbackData);

    await sendNotification(feedbackData);

    fetch('XY/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    }).catch(() => {
      console.warn('error while sending feedback');
    });
  };

  const handleStarFeedback = (rating) => {
    setShowFeedback(true);
    setStarFeedback({
      value: rating.value,
      scope: rating.scope,
    });
  };

  return (
    <>
      <Appbar.Header mode="small">
        <Appbar.Content title="Welcome to FantasyFM" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Title style={styles.cardTitle} title="Rate the moderator" />
          <Card.Content>
            <View style={styles.preview}>
              <Card.Cover
                style={styles.thumbnail}
                source={{
                  uri: currentModerator.img,
                }}
              />
              <View style={styles.previewText}>
                <Text style={styles.cardHeadline}>{currentModerator.name}</Text>
                <Text>What is your opinion on the moderator? Let us know now and help us to improve.</Text>
              </View>
            </View>
          </Card.Content>
          <Card.Actions>
            <Card.Actions>
              <Rating scope="moderator" onPress={handleStarFeedback} />
            </Card.Actions>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Title style={styles.cardTitle} title="Rate the playlist" />
          <Card.Content>
            <View style={styles.preview}>
              <Card.Cover
                style={styles.thumbnail}
                source={{
                  uri: currentPlaylist.img,
                }}
              />
              <View style={styles.previewText}>
                <Text style={styles.cardHeadline}>{currentPlaylist.name}</Text>
                <Text>Do you like the playlist? Let us know what you think!</Text>
              </View>
            </View>
          </Card.Content>
          <Card.Actions>
            <Rating scope="playlist" onPress={handleStarFeedback} />
          </Card.Actions>
        </Card>
      </ScrollView>
      <CurrentSong />
      <FeedbackModal textValue={feedbackText} setTextValue={setFeedbackText} buttonAction={sendFeedback} open={showFeedback} onDismiss={handleOnDismiss} />
      <Snackbar onDismiss={() => setShowSnack(false)} visible={showSnack}>
        Thank you for your feedback!
      </Snackbar>
    </>
  );
}

const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: '700',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 50,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  preview: {
    flexDirection: 'row',
    gap: 12,
  },
  previewText: {
    flexShrink: 1,
  },
  thumbnail: {
    flexBasis: '40%',
    height: 120,
  },
  cardHeadline: {
    marginBottom: 8,
    fontWeight: '700',
  },
});

export { Home };
