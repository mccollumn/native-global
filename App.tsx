import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import StorybookUI from "./storybook";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
};

import {
  LOAD_STORYBOOK,
  POOT
} from '@env';

console.log('istrue', LOAD_STORYBOOK, typeof LOAD_STORYBOOK);

console.log('POOT', POOT);

export function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}

//export default StorybookUI;

export default LOAD_STORYBOOK === "true" ? StorybookUI : App;
