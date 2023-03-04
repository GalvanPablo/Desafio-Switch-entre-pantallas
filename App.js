import { GameScreen, StartGameScreen } from './src/screens'
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import React from 'react';
import colors from './src/constants/colors';

export default function App() {

  const [screen, setScreen] = React.useState('Start')
  const possibleScreens = ['Start', 'Game']

  const handlerScreen = (screen) => {
    if (possibleScreens.includes(screen)) {
      setScreen(screen)
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Adivina un número"/>
      { screen === 'Start' && <StartGameScreen handlerScreen={handlerScreen}/> }
      { screen === 'Game' && <GameScreen handlerScreen={handlerScreen}/> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.background,
  },
});
