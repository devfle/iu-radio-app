import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BottomNavigation, Button, PaperProvider } from 'react-native-paper';
import { Home } from './pages/Home';
import { SongWish } from './pages/SongWish';
import { Feedback } from './pages/Feedback';

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'songWish', title: 'Wish Song', focusedIcon: 'album' },
    { key: 'feedback', title: 'Feedback', focusedIcon: 'chat' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    songWish: SongWish,
    feedback: Feedback,
  });

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button mode="contained">Hello</Button>
      </View>
      <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
