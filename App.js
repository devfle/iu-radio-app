import React from 'react';
import { BottomNavigation, PaperProvider } from 'react-native-paper';
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
      <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />
    </PaperProvider>
  );
}
