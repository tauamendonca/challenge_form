import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "../../components/Input";

export function GuestForm() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Nome:
            </Text>
            <Input icon="user" />

            <Text style={styles.title}>
                Nome:
            </Text>
            <Input icon="linkedin" />

            <Text style={styles.title}>
                Nome:
            </Text>
            <Input icon="mail" />

            <Text style={styles.title}>
                Nome:
            </Text>
            <Input icon="message-square" />
        </View>
    )
}