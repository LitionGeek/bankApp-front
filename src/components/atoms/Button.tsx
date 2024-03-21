import { Button } from "react-native-paper";
import { View } from "react-native";

type ButtonProps = {
  title: string;
  type: "text" | "contained" | "outlined" | "elevated" | "contained-tonal"; // Asegúrate de que el tipo sea uno de estos valores
  handleChange: () => void;
};

const CustomButton = (props: ButtonProps) => {
  const handlePress = () => {};
  return (
    <View>
      <Button onPress={handlePress} mode={props.type}>
        {props.title}
      </Button>
    </View>
  );
};

export default CustomButton;
