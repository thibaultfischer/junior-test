import { Sport } from '../types/sport';

type Response = {
  sports: Sport[];
};
export const getSports = async (): Promise<Response> => {
  const result = await fetch(
    'http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams'
  );
  const data = result.json();
  return data;
};
