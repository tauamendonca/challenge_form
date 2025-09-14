import Home from "../screens/home";
import GuestForm from "../screens/form";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const {Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
    <Navigator screenOptions={{headerShown: false} }>
        <Screen name="home" component={Home} />
        <Screen name="form" component={GuestForm} />
    </Navigator>
)}