import { KeyboardAvoidingView, Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';

export function GuestForm() {
    const { control } = useForm();

    const lnkRef = useRef<TextInput>(null);
    const emailRef = useRef<TextInput>(null);
    const msgRef = useRef<TextInput>(null);

    return (
    <KeyboardAvoidingView style={styles.avoid} behavior={'padding'}>
      <View style={styles.container}>
            <Text style={styles.title}>
                Livro de Visitas
            </Text>
            <Input 
                icon='user' 
                formProps={{
                    name: 'name',
                    control,
                }}
                inputProps={{ 
                    placeholder: 'Nome',
                    onSubmitEditing: () => lnkRef.current?.focus(),                  
                    returnKeyType: 'next',
                }}
            />

            <Input 
                icon='linkedin' 
                formProps={{
                    name: 'linkedin',
                    control,
                }}
                inputProps={{ 
                    placeholder: 'LinkedIn',
                    onSubmitEditing: () => emailRef.current?.focus(),                  
                    returnKeyType: 'next',
                }}
            />

            <Input 
                icon='mail' 
                formProps={{
                    name: 'email',
                    control,
                }}
                inputProps={{ 
                    placeholder: 'E-mail',
                    onSubmitEditing: () => msgRef.current?.focus(),                  
                    returnKeyType: 'next',
                }}
            />

            <Input
                multi = {true}
                icon='message-square' 
                formProps={{
                    name: 'comment',
                    control,
                }}
                inputProps={{ 
                    placeholder: 'Deixe seu comentário, elogio, crítica ou sugestão',
                }}    
            />

            <Button title='Enviar'/>
        </View>
        </KeyboardAvoidingView>
    )
}