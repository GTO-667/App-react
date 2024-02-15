import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const BlogHome = () => {
  const weatherData = {
    temperature: 13,
    condition: 'Nuages prédominants',
    maxTemperature: 13,
    minTemperature: 7,
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('./video/nuage.mp4')}
        style={styles.videoBackground}
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
      />
      <View style={styles.overlay}>
        <View style={styles.weatherContainer}>
          <Text style={styles.city}>Nice</Text>
          <Text style={styles.temperature}>{weatherData.temperature}°</Text>
          <Text style={styles.condition}>{weatherData.condition}</Text>
          <View style={styles.temperatureRange}>
            <Text style={styles.temperatureArrow}>↑</Text>
            <Text style={styles.temperatureMinMax}>{weatherData.maxTemperature}°</Text>
            <Text style={styles.temperatureArrow}>↓</Text>
            <Text style={styles.temperatureMinMax}>{weatherData.minTemperature}°</Text>
          </View>
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.middleRectangle}>
          <Text style={styles.middleRectangleText}>Dégradé</Text>
          <View style={styles.line}></View>
          <Text style={styles.bottomText}>
            La qualité de l'air est la même qu'hier, à peu près à la même hauteur.
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('./video/map.jpg')}
              style={styles.modalImage}
            />
            <Text style={styles.modalHeaderText}>Informations sur la santé</Text>
            <View style={styles.modalRectangle}>
              <View style={styles.innerRectangle}></View>
            </View>
            <Button title="Fermer" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoBackground: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'relative',
  },
  weatherContainer: {
    alignItems: 'center',
    paddingTop: 100,
    flex: 1,
  },
  city: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  temperature: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
  },
  condition: {
    fontSize: 24,
    fontWeight: '200',
    color: 'white',
  },
  temperatureRange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureArrow: {
    fontSize: 16,
    color: 'white',
  },
  temperatureMinMax: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
  },
  middleRectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(173, 216, 230, 0.7)', 
    height: 100,
    width: '80%',
    top: '40%', 
    left: '10%',
    borderRadius: 12,
    justifyContent: 'flex-start',
    paddingLeft: 20,
  },
  middleRectangleText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  line: {
    height: 3,
    width: '100%',
    backgroundColor: 'blue', 
    marginTop: 5, 
  },
  bottomText: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
    marginTop: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 200, 
    height: 200,
    marginBottom: 10, 
  },
  modalRectangle: {
    backgroundColor: 'rgba(173, 216, 230, 0.7)', 
    height: 80,
    width: '60%',
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRectangle: {
    backgroundColor: 'blue', 
    height: 40,
    width: '80%',
    borderRadius: 8,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    background: 12, 
  },
});

export default BlogHome;
