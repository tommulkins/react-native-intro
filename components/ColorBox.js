// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

/**
 * Return a React component with provided color name and hex code of color as its background color
 *
 * @component
 * @example
 * const color = 'white'
 * const hex = '#ffffff'
 * return (
 * <ColorBox name={color} hex={hex} />
 * )
 */
const ColorBox = props => {
  const { name, hex } = props;

  return (
    <View
      style={[
        {
          marginBottom: 10,
          borderRadius: 3,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        },
        { backgroundColor: hex },
      ]}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
        }}>{`${name.charAt(0).toUpperCase() + name.slice(1)} ${hex}`}</Text>
    </View>
  );
};

ColorBox.propTypes = {
  /**
   * Color name
   */
  name: PropTypes.string.isRequired,
  /**
   * Color hex code
   */
  hex: PropTypes.string.isRequired,
};

export default ColorBox;
