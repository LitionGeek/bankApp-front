import React, { useEffect, useRef } from "react";
import { TouchableOpacity, useColorScheme, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { COLORS } from "../../constants/Colors";

export const TabButton = (props: any) => {
  const animate1 = { 0: { scale: 0.5, translateY: 7 }, 0.92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } };
  const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 1 } };
  const circle1 = { 0: { scale: 0 }, 0.5: { scale: 0.5 }, 1: { scale: 1 } };
  const circle2 = {
    0: { scale: 1 },
    0.5: { scale: 0.5 },
    1: { scale: 0 },
  };

  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<Animatable.View>(null);
  const circleRef = useRef<any>(null);
  const textRef = useRef<Animatable.Text>(null);
  const isDarkMode = useColorScheme() === "dark";

  const { colors } = useTheme();
  const color = isDarkMode ? COLORS.white : COLORS.black;
  const bgColor = colors.background;

  useEffect(() => {
    if (focused) {
      viewRef.current?.animate(animate1);
      circleRef.current?.animate(circle1);
      textRef.current?.transitionTo({ scaleY: 1 });
    } else {
      viewRef.current?.animate(animate2);
      circleRef.current?.animate(circle2);
      textRef.current?.transitionTo({ scaleY: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <Animatable.View style={[styles.btn, { borderColor: bgColor, backgroundColor: bgColor }]}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <item.icon name={item.iconName} color={focused ? COLORS.white : COLORS.black} size={24} />
        </Animatable.View>
        <Animatable.Text ref={textRef} style={[styles.text, { color }]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 75,
  },
  tabBar: {
    height: 70,
    position: "absolute",
    margin: 16,
    borderRadius: 16,
  },
  btn: {
    width: 55,
    height: 55,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.gray,
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
