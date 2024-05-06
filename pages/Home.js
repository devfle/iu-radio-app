import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Snackbar, Appbar } from 'react-native-paper';
import { CurrentSong, Rating } from '../components';

function Home() {
  const [showSnack, setShowSnack] = React.useState(true);

  const sendFeedback = () => {
    setShowSnack(true);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Appbar.Header mode="small">
          <Appbar.Content title="Welcome to FooBarFM" />
        </Appbar.Header>
        <Card style={styles.card}>
          <Card.Title style={styles.cardTitle} title="Rate the moderator" />
          <Card.Content>
            <View style={styles.preview}>
              <Card.Cover
                style={styles.thumbnail}
                source={{
                  uri: 'https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <View style={styles.previewText}>
                <Text style={styles.cardHeadline}>John Smith</Text>
                <Text>What is your opinion on the moderator? Let us know now and help us to improve.</Text>
              </View>
            </View>
          </Card.Content>
          <Card.Actions>
            <Card.Actions>
              <Rating onPress={sendFeedback} />
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
                  uri: 'https://images.unsplash.com/photo-1619983081593-e2ba5b543168?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                }}
              />
              <View style={styles.previewText}>
                <Text style={styles.cardHeadline}>Focus Beats</Text>
                <Text>Do you like the playlist? Let us know what you think!</Text>
              </View>
            </View>
          </Card.Content>
          <Card.Actions>
            <Rating onPress={sendFeedback} />
          </Card.Actions>
        </Card>
      </ScrollView>
      <CurrentSong />
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
