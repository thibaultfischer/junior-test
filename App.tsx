import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TeamList from './src/components/TeamList/TeamList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <TeamList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
