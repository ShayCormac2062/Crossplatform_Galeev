import React from 'react';
import { View } from 'react-native';

const Box = (props) => {
    const { width, height, color, radius, align } = props;
    const boxStyle = {
        width: width,
        height: height,
        backgroundColor: color,
        borderRadius: radius,
        alignItems: align,
    };

    return <View style={boxStyle} />;
};

export default Box;