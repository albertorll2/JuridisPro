import '../global.css';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
// import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { GluestackUIProvider as NativewindProvider } from '@/components/ui/gluestack-ui-provider';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@/gluestack-ui.config';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <NativewindProvider mode={colorScheme}>
      <GluestackUIProvider config={config} colorMode={colorScheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
          <Stack.Screen name="verify-otp" options={{ headerShown: false }} />
          <Stack.Screen name="create-password" options={{ headerShown: false }} />
        </Stack>
      </GluestackUIProvider>
    </NativewindProvider>
  );
}
