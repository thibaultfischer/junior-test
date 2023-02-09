import { useState, useEffect } from 'react';
import { getSports } from '../../api/getTeams';
import { LightTeam } from '../../types/team';
import {
  mapSportsToLightTeamArray,
  sortLightTeamsAlphabetically,
} from './helpers';

type UseTeamList = {
  teams?: LightTeam[];
  loading: boolean;
  searchValue: string;
  setSearchValue: (v: string) => void;
  error: boolean;
};

const useTeamList = (): UseTeamList => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [teams, setTeams] = useState<LightTeam[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    const didMount = async () => {
      try {
        const result = await getSports();
        setTeams(
          sortLightTeamsAlphabetically(
            mapSportsToLightTeamArray(result.sports, 'football', 'nfl')
          )
        );
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    didMount();
  }, []);

  const teamsFiltered = teams?.filter((team) =>
    team.shortDisplayName.startsWith(searchValue)
  );

  return { teams: teamsFiltered, loading, searchValue, setSearchValue, error };
};

export default useTeamList;
