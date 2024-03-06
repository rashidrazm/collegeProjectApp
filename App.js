import { AppRegistry } from 'react-native'; // Import AppRegistry
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import StackNavigator from './StackNavigator';

// Define your App component
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});

// Register the App component with AppRegistry
AppRegistry.registerComponent('MyApp', () => App);

// Export App for potential use in other files
export default App;
