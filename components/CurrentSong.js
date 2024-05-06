import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { IconButton } from 'react-native-paper';

function CurrentSong() {
  const [musicPlay, setMusicPlay] = React.useState(false);
  const musicBarIcon = musicPlay ? 'play' : 'pause';

  return (
    <View style={playStyles.container}>
      <View style={playStyles.actorContainer}>
        <Image
          style={playStyles.thumbnail}
          source={{
            uri: 'https://images.unsplash.com/photo-1599467556385-48b57868f038?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <Text style={playStyles.actorName}>Peter - Chill Beats</Text>
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

export { CurrentSong };
