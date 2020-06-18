import React from 'react';
import { Platform, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const colors = [
  {
    name: 'Cyan',
    hex: '#2aa198',
  },
  {
    name: 'Blue',
    hex: '#268bd2',
  },
  {
    name: 'Magenta',
    hex: '#d33682',
  },
  {
    name: 'Orange',
    hex: '#cb4b16',
  },
];

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.description}>
            Here are some boxes of different colors
          </Text>
        </View>
        {colors.map(color => (
          <ColorBox key={color.name} name={color.name} hex={color.hex} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
});
export default App;
