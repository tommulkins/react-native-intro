import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const PalettePreview = ({ navigation, palette }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ColorPalette', palette)}>
      <Text style={styles.paletteTitle}>{palette.paletteName}</Text>
      <View
        style={{
          margin: 10,
          flexDirection: 'row',
        }}>
        {palette.colors.slice(0, 5).map(color => (
          <View
            key={color.colorName}
            style={{
              height: 30,
              width: 30,
              backgroundColor: color.hexCode,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.5,
              elevation: 3,
              margin: 3,
            }}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paletteTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default PalettePreview;
