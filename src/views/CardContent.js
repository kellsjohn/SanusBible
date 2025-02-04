import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Menu from '../components/Menu';

const CardContent = ({route}) => {
  const {card} = route.params;

  return (
    <SafeAreaProvider>
      <Menu />
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.cardImage}
          source={card.image}
          resizeMode="contain"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  cardImage: {
    width: '90%',
    height: '60%',
  },
});

export default CardContent;
