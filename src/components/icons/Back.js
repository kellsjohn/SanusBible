import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Back = ({width = 24, height = 24, color = '#fff'}) => {
  return (
    <Svg fill={color} width={width} height={height} viewBox="0 0 24 24">
      <Path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z" />
    </Svg>
  );
};

export default Back;
