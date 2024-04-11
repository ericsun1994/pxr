import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import RootNavigator from './src/navigations/root/RootNavigator';
import AuthStackNavigator from './src/navigations/stack/AuthStackNavigator';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
        {/* <AuthStackNavigator /> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
