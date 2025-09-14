import React from 'react';
import { Text, Image, View } from 'react-native';
import { layout, typography } from './styles';


export function Logo() {

  return (
    <>
        <View style={layout.container}>
            <Image
            source={require("../../../assets/lisbela.jpg")} 
            style={[layout.logo, { width: 200, height: 240 }]}
            />
        </View>
        {/* Title */}
        <Text style={typography.title}>
            Pule no balde com a Lisbela!
        </Text>
        <Text style={typography.subtitle}>
            🦴  🐶  💖
        </Text>
    </>
  );
}