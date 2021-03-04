import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TitleText = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default TitleText