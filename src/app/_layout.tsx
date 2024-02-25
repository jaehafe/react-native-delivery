import CustomHeader from '@/components/CustomHeader';
import Colors from '@/constants/Colors';
import theme from '@/styles/theme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ChevronLeft, X } from 'lucide-react-native';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider theme={theme}>
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                header: () => <CustomHeader />,
              }}
            />

            <Stack.Screen
              name="(modal)/filter"
              options={{
                presentation: 'modal',
                headerTitle: 'Filter',
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: Colors.lightGrey,
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <X size={28} color={Colors.primary} />
                  </TouchableOpacity>
                ),
              }}
            />

            <Stack.Screen
              name="(modal)/location-search"
              options={{
                presentation: 'fullScreenModal',
                headerTitle: 'Select location',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <X size={28} color={Colors.primary} />
                  </TouchableOpacity>
                ),
              }}
            />

            <Stack.Screen
              name="(modal)/dish"
              options={{
                presentation: 'modal',
                headerTitle: '',
                headerTransparent: true,

                headerLeft: () => (
                  <TouchableOpacity
                    style={{ backgroundColor: '#fff', borderRadius: 20, padding: 6 }}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <X size={28} color={Colors.primary} />
                  </TouchableOpacity>
                ),
              }}
            />

            <Stack.Screen
              name="basket"
              options={{
                headerTitle: 'Basket',
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}
                  >
                    <ChevronLeft size={28} color={Colors.primary} />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack>
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
