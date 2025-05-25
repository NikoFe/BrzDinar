import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const MultilineInput = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        multiline
        numberOfLines={4}
        style={styles.textArea}
        onChangeText={setText}
        value={text}
        placeholder="Enter your text here"
      />
    </View>
  );
};

export default MultilineInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  textArea: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    backgroundColor: '#f0f0f0',
  },
});
