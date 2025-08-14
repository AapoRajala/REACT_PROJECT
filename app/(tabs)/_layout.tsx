import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
<Tabs screenOptions={{tabBarActiveTintColor: "coral"}}>

<AntDesign name="home" size={24} color="black" />

  <Tabs.Screen name="index" options={{title: "Koti",

   tabBarIcon: ({color, focused}) => {
    return focused ? (
    <AntDesign name="home" size={24} color={color} /> ) : ( <FontAwesome5 name="home" size={24} color="coral" /> )
    
   },
    }}
     />
  <Tabs.Screen name="login" options={{title: "Kirjaudu"}} /> 
</Tabs>
);
}
