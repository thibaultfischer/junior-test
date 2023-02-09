import { View, Text, Image, StyleSheet } from 'react-native';
import { LightTeam } from '../../types/team';

type Props = {
  team: LightTeam;
};
const TeamRow = ({ team }: Props) => {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{team.shortDisplayName}</Text>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{ uri: team.logoHref }}
      />
    </View>
  );
};

export default TeamRow;

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
  
    paddingLeft: 10,
    borderRadius: 8,
  },
  loader: { marginTop: 100 },
  container: { flex: 1 },
  row: {
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: { color: '#3C3C3C' },
  image: { width: 30, height: 30 },
});
