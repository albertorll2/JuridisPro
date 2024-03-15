import React from 'react';
// import { Box, StatusBar, ScrollView, VStack } from '@gluestack-ui/themed';
import { Box , VStack } from '../components/ui';
import { ScrollView , StatusBar } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMediaQuery, useTheme, useToken } from '@gluestack-style/react';

type GuestLayoutProps = {
  children: React.ReactNode;
};

export default function GuestLayout(props: GuestLayoutProps) {
  const primary500=useToken('colors','primary500')
  const primary900=useToken('colors','primary900')
  const backgroundDark900=useToken('colors','backgroundDark900')
  const theme=useTheme()
  const isMediumScreen=useMediaQuery({
      minWidth:'768px'
  })
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Box
          className='h-full web:h-[100vh] overflow-hidden' 
        >
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
            style={{
              flex:1,
              backgroundColor: theme==='dark'? backgroundDark900 : isMediumScreen ? primary900 : primary500,
            }}
            bounces={false}
          >
            {/* $max-w-$$containerWidth */}
            <VStack
              className='w-full flex-1 overflow-hidden md:max-w-fit md:flex-row md:rounded-xl md:flex-none'
            >
              {props.children}
            </VStack>
          </ScrollView>
        </Box>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
