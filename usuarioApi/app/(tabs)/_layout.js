import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"

export default function Tabslayout() {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{title:"inicio", href:null,}}/>
            <Tabs.Screen name="alta" options={{
                title:"Alta",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={size} color={color} />
                ),
            }}/>
            <Tabs.Screen name="consulta" options={{
                title:"consulta",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-add" size={size} color={color} />
                ),
            }}/>
        </Tabs>
    )
}