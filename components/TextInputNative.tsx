import * as React from "react";
import { TextInput } from "react-native-paper";
import { TextInputProps } from "react-native";

const TextInputNative = ({ ...props }: TextInputNativeProps) => {
  const [text, setText] = React.useState("");

  return <TextInput {...props} />;
};

export default TextInputNative;

interface TextInputNativeProps extends Partial<TextInputProps> {}
