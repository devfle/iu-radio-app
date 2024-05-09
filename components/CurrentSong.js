import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import songs from '../stubs/songs.json';

function CurrentSong() {
  const [musicPlay, setMusicPlay] = React.useState(false);
  const [currentSong, setCurrentSong] = React.useState(false);
  const musicBarIcon = musicPlay ? 'play' : 'pause';

  React.useEffect(() => {
    setCurrentSong(songs[Math.floor(Math.random() * songs.length)]);
  }, []);

  return (
    <View style={playStyles.container}>
      <View style={playStyles.actorContainer}>
        <Image
          style={playStyles.thumbnail}
          source={{
            uri: currentSong.img,
          }}
        />
        <Text style={playStyles.actorName}>
          {currentSong.singer} - {currentSong.title}
        </Text>
      </View>
      <IconButton icon={musicBarIcon} size={20} onPress={() => setMusicPlay(!musicPlay)} />
    </View>
  );
}

const playStyles = StyleSheet.create({
  container: {
    backgroundColor: '#dedede',
    height: 50,
    position: 'absolute',
    bottom: 0,
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
    maxWidth: '70%',
  },
});

export { CurrentSong };
