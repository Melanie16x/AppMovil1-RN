import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './component/Home.js';
import Contacts from './component/contacts.js';
import ProductDetail from './component/product_detail.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Home} />
        <Stack.Screen name="Contactos" component={Contacts} />
        <Stack.Screen name="Product_detail" component={ProductDetail} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}