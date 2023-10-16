import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CircularProgressBar = ({ initialValue }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(initialValue || 0);

  useEffect(() => {
    setProgress(initialValue || 0);
  }, [initialValue]);

  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <View>
      <Svg
        height={radius * 2 + 20}
        width={radius * 2 + 20}
        viewBox={`0 0 ${radius * 2 + 20} ${radius * 2 + 20}`}
      >
        <Circle
          cx={radius + 10}
          cy={radius + 10}
          r={radius}
          stroke="#ccc"
          strokeWidth={10}
          fill="transparent"
        />
        <Circle
          cx={radius + 10}
          cy={radius + 10}
          r={radius}
          stroke="yellow"
          strokeWidth={10}
          fill="transparent"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      <Text>{`${progress}%`}</Text>
    </View>
  );
};

export default CircularProgressBar;
