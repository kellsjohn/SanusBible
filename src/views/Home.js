import {
  ScrollView,
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import RightArrow from '../components/icons/RightArrow';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const [isWelcomeModalVisible, setWelcomeModalVisible] = useState(true);
  const [shuffledCards, setShuffledCards] = useState([]);
  const cards = [
    {id: 1, image: require('../assets/images/vachanam/1.jpg')},
    {id: 2, image: require('../assets/images/vachanam/2.jpg')},
    {id: 3, image: require('../assets/images/vachanam/3.jpg')},
    {id: 4, image: require('../assets/images/vachanam/4.jpg')},
    {id: 5, image: require('../assets/images/vachanam/5.jpg')},
    {id: 6, image: require('../assets/images/vachanam/6.jpg')},
    {id: 7, image: require('../assets/images/vachanam/6.jpg')},
    {id: 8, image: require('../assets/images/vachanam/7.jpg')},
    {id: 9, image: require('../assets/images/vachanam/8.jpg')},
    {id: 10, image: require('../assets/images/vachanam/9.jpg')},
    {id: 11, image: require('../assets/images/vachanam/10.jpg')},
    {id: 12, image: require('../assets/images/vachanam/11.jpg')},
    {id: 13, image: require('../assets/images/vachanam/12.jpg')},
    {id: 14, image: require('../assets/images/vachanam/13.jpg')},
    {id: 15, image: require('../assets/images/vachanam/14.jpg')},
    {id: 16, image: require('../assets/images/vachanam/15.jpg')},
  ];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const shuffleArray = array => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap elements
    }
    return shuffledArray;
  };

  const shuffleCards = useCallback(() => {
    const shuffled = shuffleArray(cards).map(card => ({
      ...card,
      color: getRandomColor(),
    }));
    setShuffledCards(shuffled); // Update state to trigger re-render
  }, [cards]);

  const goToCardContent = card => {
    // console.log('shuffledCards', shuffledCards);
    navigation.navigate('CardContent', {card});
    shuffleCards();
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isWelcomeModalVisible}
        onRequestClose={() => setWelcomeModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Image
              source={require('../assets/images/penguin-welcome.jpg')}
              style={styles.penguinWelcomeImage}
              resizeMode="contain"
            />

            <Text style={styles.modalText}>
              Hi Sanu, Excited? You're about to pick your card! ✨
            </Text>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setWelcomeModalVisible(false)}>
              <RightArrow width={30} height={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.cardContainer}>
        {shuffledCards.map(card => (
          <TouchableOpacity
            style={[styles.card, {backgroundColor: card.color}]}
            onPress={() => goToCardContent(card)}>
            <Text style={{fontWeight: 60}}>Press to reveal</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  penguinWelcomeImage: {
    width: '50%',
    height: '50%',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    width: '80%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Adds shadow on Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  modalText: {
    marginTop: 20,
    color: '#464a46',
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#b1eb34',
    padding: 10,
    borderRadius: 15,
  },

  cardContainer: {
    padding: 10,
  },
  card: {
    height: '8%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
  cardTitle: {
    color: 'black',
    textAlign: 'center',
  },
  cardText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default Home;
