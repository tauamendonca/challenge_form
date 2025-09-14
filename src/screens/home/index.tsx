import { Text, View } from 'react-native';
import { styles } from './styles';
import { PressableButton } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../components/Logo';

 
export default function Home() {
    const { navigate } = useNavigation();

    function handleNavigation() {
        navigate('form');
    }

    return (
       <View style={styles.background}>
        <View style={styles.container}>
            <Logo />
            <PressableButton text='Pular' onPress={() => handleNavigation()}/>
        </View>
      </View>
    )
}