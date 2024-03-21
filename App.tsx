import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo, FontAwesome } from "@expo/vector-icons";
import Transferencias from "./src/pages/Transferencias";
import Home from "./src/pages/HomeScreen";
import Mas from "./src/pages/MasScreen";
import { TabButton } from "./src/components/organisms/TabButton";
import { COLORS } from "./src/constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import { ROUTES } from "./src/routes/indes";
import { View } from "react-native-animatable";
import { Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const TabArr = [
  {
    route: ROUTES.TRANSFERENCIAS,
    label: "Transferencias",
    icon: FontAwesome,
    iconName: "exchange",
    component: Transferencias,
    color: COLORS.purple,
    alphaClr: COLORS.purpleAlpha,
  },
  {
    route: ROUTES.HOME,
    label: "Home",
    icon: Entypo,
    iconName: "home",
    component: Home,
    color: COLORS.primary,
    alphaClr: COLORS.primaryAlpha,
  },
  {
    route: ROUTES.MAS,
    label: "Mas",
    icon: Feather,
    iconName: "more-horizontal",
    component: Mas,
    color: COLORS.green,
    alphaClr: COLORS.greenAlpha,
  },
];
export default function App() {
  const [isAuth, setisAuth] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          height: 70,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 30,
        }}
      >
        <View>
          <Text>Bienvenido, Alan</Text>
          <Text>Puntos 585</Text>
        </View>
        <View>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={ROUTES.HOME}
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          {TabArr.map((item, index) => {
            return (
              <Tab.Screen
                name={item.route}
                component={item.component}
                options={{
                  tabBarShowLabel: false,
                  tabBarButton: (props) => <TabButton {...props} item={item} />,
                }}
              />
            );
          })}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  tabBar: {
    height: 70,
    position: "absolute",
    margin: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: "500",
  },
});
