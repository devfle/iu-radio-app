import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

function Home() {
  const [musicPlay, setMusicPlay] = React.useState(false);
  const musicBarIcon = musicPlay ? 'play' : 'pause';

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Card style={{ ...styles.container, ...styles.card }}>
        <Card.Title title="Rate the moderator"></Card.Title>
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
              <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Rate the playlist"></Card.Title>
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
              <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</Text>
            </View>
          </View>
        </Card.Content>
        <Card.Actions></Card.Actions>
      </Card>
      <View style={playStyles.container}>
        <View style={playStyles.actorContainer}>
          <Image
            style={playStyles.thumbnail}
            source={{
              uri: 'https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
          <Text style={playStyles.actorName}>John Smith - Song Name</Text>
        </View>
        <IconButton icon={musicBarIcon} size={20} onPress={() => setMusicPlay(!musicPlay)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    marginTop: 52,
    marginBottom: 16,
  },
  card: {
    marginHorizontal: 16,
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

const playStyles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    height: 50,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  actorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    marginRight: 12,
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  actorName: {
    fontWeight: '600',
  },
});

export { Home };
