import React from 'react';
import { Box  } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { ScrollView , StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMediaQuery, useColorMode, useToken } from '@gluestack-ui/themed';

type GuestLayoutProps = {
  children: React.ReactNode;
};

export default function GuestLayout(props: GuestLayoutProps) {
  const primary500=useToken('colors','primary500')
  const primary900=useToken('colors','primary900')
  const backgroundDark900=useToken('colors','backgroundDark900')
  const theme=useColorMode()
  const [isMediumScreen]=useMediaQuery({
    minWidth:'768px'
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box className="h-full web:h-[100vh] overflow-hidden">
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />
          <ScrollView
            contentContainerStyle={{
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
            }}
            className="flex-1 dark:bg-background-900 md:dark:bg-primary-900 bg-primary-500"
            bounces={false}
          >
            {/* $max-w-$$containerWidth */}
            <VStack className="w-full flex-1 overflow-hidden md:max-w-screen-md md:flex-row md:rounded-xl md:flex-none">
              {props.children}
            </VStack>
          </ScrollView>
        </Box>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
