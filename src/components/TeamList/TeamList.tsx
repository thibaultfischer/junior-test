import useTeamList from './useTeamList';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
} from 'react-native';
import TeamRow from '../TeamRow/TeamRow';

const TeamList = () => {
  const { teams, loading, searchValue, setSearchValue, error } = useTeamList();
  if (error) {
    return (
      <Text style={styles.error}>An error occured, please try again later</Text>
    );
  }

  if (loading) {
    return <ActivityIndicator style={styles.loader} size='large' />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder='Search for a team...'
        style={styles.input}
      />
      <ScrollView>
        {teams?.map((team) => (
          <TeamRow key={team.shortDisplayName} team={team} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeamList;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
    alignSelf: 'center',
    paddingLeft: 10,
    borderRadius: 8,
  },
  loader: { marginTop: 100 },
  error: { marginTop: 100, color: '#3C3C3C', alignSelf: 'center' },
  container: { flex: 1 },
});
