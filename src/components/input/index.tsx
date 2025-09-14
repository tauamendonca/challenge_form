import { Feather } from "@expo/vector-icons";
import { View, TextInputProps, TextInput } from "react-native";
import { styles } from "./styles";
import { Controller, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";

type Props = {
    icon: keyof typeof Feather.glyphMap;
    formProps:  UseControllerProps;
    inputProps: TextInputProps;
    multi?: boolean;
}

const Input = forwardRef<TextInput, Props> (({icon, formProps, inputProps, multi}, ref) => {
    return (
    <Controller
        render = {() => (
            <View style={styles.group}>
                <View style={styles.icon}>
                    <Feather name={icon} size={24} color="black"/>
                </View>
                            
                <TextInput
                    multiline = {multi}
                    ref = {ref}    
                    style={styles.textInput}
                    {...inputProps}
                />
            </View>
        )}
        {...formProps}
    />
    )
})

export { Input }