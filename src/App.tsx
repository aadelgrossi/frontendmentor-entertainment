import type { Component } from 'solid-js';
import logo from './logo.svg';

import {
  Box,
  Button,
  Flex,
  HopeProvider,
  Icon,
  Image,
  Text,
  VStack,
} from '@hope-ui/solid';
import { keyframes } from '@stitches/core';

import { ImBooks } from 'solid-icons/im';
const logoSpin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const MyApp: Component = () => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        as="header"
        color="whitesmoke"
        fontSize="$2xl"
        bgColor="#282c34"
        minH="100vh"
        direction="column"
        textAlign="center"
      >
        <Image
          animation={`${logoSpin} infinite 20s linear`}
          height="40vmin"
          pointerEvents="none"
          src={logo}
          alt="logo"
        />
        <VStack mt={40} spacing={10}>
          <Text
            fontSize={{
              '@initial': '$base',
              '@sm': '$xl',
              '@md': '$2xl',
            }}
          >
            Edit <Text as="code">src/App.tsx</Text> and save to reload.
          </Text>
          <Button
            leftIcon={<Icon as={ImBooks} />}
            colorScheme="info"
            as="a"
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

const App = () => (
  <HopeProvider>
    <MyApp />
  </HopeProvider>
);

export default App;
