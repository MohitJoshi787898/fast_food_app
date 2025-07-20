import { CustomButtonProps } from "@/type";
import cn from "clsx";
import React from "react";
import {
  ActivityIndicatorBase,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CustomButton = ({
  title = "Click Me",
  onPress,
  style,
  leftIcon,
  textStyle,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={cn("custom-btn", style)}>
      {leftIcon}

      <View className="flex-center flex-row">
        {isLoading ? (
          <ActivityIndicatorBase size={"small"} color={"white"} />
        ) : (
          <>
            {leftIcon && <View>{leftIcon}</View>}
            <Text
              className={cn("text-white-100 paragraph-semibold", textStyle)}
            >
              {title}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
