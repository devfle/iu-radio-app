import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

function Rating(props) {
  const [rateIndex, setRateIndex] = React.useState(0);
  const handlePress = (rateIndex) => {
    setRateIndex(rateIndex);
    props?.onPress({ value: rateIndex, scope: props.scope });
  };
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <IconButton key={index} iconColor={rateIndex >= index + 1 ? '#ccb72b' : '#333'} style={styles.ratingIcons} icon="star" size={24} mode="default" onPress={() => handlePress(index + 1)} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  ratingIcons: {
    margin: 0,
    padding: 0,
    width: 30,
  },
});

export { Rating };
