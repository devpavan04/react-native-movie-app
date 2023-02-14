import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { AppStack } from './src/components/Stacks';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style='light' />
    </NativeBaseProvider>
  );
}
