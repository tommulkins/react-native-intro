// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

/**
 * Return a component with provided color name and hex code of color as its background color
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
  const textColor =
    parseInt(hex.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';

  return (
    <View
      style={[
        {
          marginBottom: 10,
          borderRadius: 3,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          elevation: 3,
        },
        { backgroundColor: hex },
      ]}>
      <Text
        style={{
          color: textColor,
          fontWeight: 'bold',
        }}>{`${name} ${hex}`}</Text>
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
