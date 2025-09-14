import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { TextInput } from "react-native";
import { styles } from "./styles";

type Props = {
    icon: keyof typeof Feather.glyphMap;
}

export function Input ({icon}: Props) {
    return (
        <View>
            <Feather 
                name={icon}
                size={24}
                color="black"
            />
            
            <TextInput style={styles.textInput}/>
        </View>
    )
}