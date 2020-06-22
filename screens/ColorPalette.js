import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const {
    params: { colors },
  } = route;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={item => item.colorName}
      renderItem={({ item }) => (
        <ColorBox name={item.colorName} hex={item.hexCode} />
      )}
    />
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
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

export default ColorPalette;
