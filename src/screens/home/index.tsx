import { Text, View } from 'react-native';
import { styles } from './styles';
import { PressableButton } from '../../components/button';

function handleNavigation() {
    console.log('Navegou');
}
 
export default function Home() {
    return (
       <View style={styles.background}>
        <View style={styles.container}>
            <Text style={styles.title}>
               🦴🐶💖 Pule no balde com a Lisbela! 🦴🐶💖
            </Text>

            <PressableButton text='Ativar' onPress={() => {}}/>
        </View>
      </View>
    )
}