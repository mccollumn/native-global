import * as React from "react";
import { Picker } from '@react-native-picker/picker';

export const PickerMono = ({
  
}) => {
  return (
    <Picker>
      <Picker.Item label="Poot" value="Poot" />
      <Picker.Item label="Boot" value="Boot" />
    </Picker>
  );
};

export interface PickerMono {
  /**
 * All other types
 */
  [x: string]: any;
}
