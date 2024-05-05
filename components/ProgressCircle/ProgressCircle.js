import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const ProgressCircle = ({ size, progress }) => {
    
    const radius = size / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeWidth = 4;
    const halfCircumference = circumference / 2;
    const progressStrokeDashoffset = halfCircumference - (progress / 100) * circumference;

    return (
        <View>
            <Svg width={size} height={size}>
                <Circle
                    cx={radius}
                    cy={radius}
                    r={radius - strokeWidth / 2}
                    stroke="#e6e6e6"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                />
                <Circle
                    cx={radius}
                    cy={radius}
                    r={radius - strokeWidth / 2}
                    stroke="#840F74"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={progressStrokeDashoffset}
                />
                <Text style={{ textAlign: 'center', top: '95%', fontSize: 12, color: '#840F74', fontWeight: 'bold' }}>
                    {progress * 100}%
                </Text>
            </Svg>
        </View>
    );
};

export default ProgressCircle;
