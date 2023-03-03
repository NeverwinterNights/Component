import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';
import colors from '../config/colors';

export const AlertComponent = () => {
  return (
    <View style={styles.container}>
      <Button
        color={colors.danger}
        title="click me"
        onPress={() =>
          Alert.alert('Achtung', 'Hende Hoh', [
            {text: 'Yes', onPress: () => console.log('Yes')},
            {text: 'No', onPress: () => console.log('No')},
          ])
        }
      />
      <Button
        title="click me2"
        onPress={
          () => Alert.prompt('Achtung', 'Hende Hoh', text => console.log(text)) // не работает в андройд
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
