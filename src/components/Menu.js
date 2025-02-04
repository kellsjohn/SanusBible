import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Back from './icons/Back';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{width: 24, height: 24}}
        onPress={() => navigation.goBack()}>
        <Back />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
    backgroundColor: 'black',
  },
});

export default Menu;
