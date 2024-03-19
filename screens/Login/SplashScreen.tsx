import React from 'react';
import { Box } from "@/components/ui/box";
import { VStack } from '@/components/ui/vstack';
import { Button , ButtonText} from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Center } from '@/components/ui/center';
import GuestLayout from '../../layouts/GuestLayout';
import StyledExpoRouterLink from '../../app/components/StyledExpoRouterLink';

function ActionButtons() {
  return (
    <VStack className="space-xs mt-10 md:mt-12">
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        className="hover:bg-background-100 bg-background-0 p-2 rounded-md"
      >
        <StyledExpoRouterLink href="/login" width="auto">
          <ButtonText className="font-bold decoration-0 color-primary-500">
            LOGIN
          </ButtonText>
        </StyledExpoRouterLink>
      </Button>
      <Button
        className="hover:bg-background-0 hover:color-primary-500 border-border-0 my-4 p-2 rounded-md"
        size="md"
        variant="outline"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <StyledExpoRouterLink href="/signup" width="auto">
          <ButtonText className="decoration-0 color-typography-100 ">
            SIGN UP
          </ButtonText>
        </StyledExpoRouterLink>
      </Button>
    </VStack>
  );
}

function HeaderLogo() {
  return (
    <Box className='items-center justify-center'>
      <Image
        alt="gluestack-ui Pro"
        resizeMode="contain"
        source={require('./assets/images/gluestackUiProLogo_web_light.svg')}
        className='md:hidden flex  sm:h-[40px] sm:w-[320px] md:h-[141px] md:w-[275px]'
      />
      <Image
        alt="gluestack-ui Pro"
        className=' hidden md:flex sm:h-[40px] sm:w-[320px] md:h-[141px] md:w-[275px]'
        source={require('./assets/images/gluestackUiProLogo_mobile.png')}
      />
    </Box>
  );
}

export default function SplashScreen() {
  return (
    <GuestLayout>
      <Center className='flex-1 w-full'>
        <Box
          className='w-full min-h-[$authcard] md:px-8 md:bg-primary-500 px-4 justify-center py-2'
        >
          <HeaderLogo />
          <ActionButtons />
        </Box>
      </Center>
    </GuestLayout>
  );
}
