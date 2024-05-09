import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, TextInput } from 'react-native-paper';

function FeedbackModal({ open, onDismiss, buttonAction, textValue, setTextValue }) {
  const handleDismiss = () => {
    if (typeof onDismiss !== 'function') {
      return;
    }

    onDismiss();
  };

  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 16 };

  return (
    <Portal>
      <Modal visible={open} onDismiss={handleDismiss} contentContainerStyle={containerStyle}>
        <Text>Additional Feedback</Text>
        <TextInput value={textValue} onChangeText={(text) => setTextValue(text)} style={styles.textfield} label="Additional Feedback" />
        <Button onPress={buttonAction} mode="contained" icon="send">
          Send Feedback
        </Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  textfield: {
    marginTop: 16,
    marginBottom: 12,
    minHeight: 100,
  },
});

export { FeedbackModal };
