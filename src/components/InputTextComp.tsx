import React from 'react';
import {StyleProp, StyleSheet, TextInput, TextStyle} from 'react-native';

export interface TextInputComp {
  placeholder?: string;
  inputTestID?: string;
  value?: string | number;
  inputStyle?: StyleProp<TextStyle>;
  onChangeText?: (text: string | number) => void;
}

const InputTextComp = ({
  value,
  inputStyle,
  inputTestID,
  placeholder,
  onChangeText,
}: TextInputComp) => {
  return (
    <TextInput
      testID={inputTestID}
      value={value?.toString()}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={'black'}
      style={[styles.textInputStyle, inputStyle]}
    />
  );
};

export default InputTextComp;

const styles = StyleSheet.create({
  textInputStyle: {
    borderRadius: 15,
    backgroundColor: '#FCF5ED',
  },
});
