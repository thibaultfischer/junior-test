import { Sport } from '../../types/sport';
import { LightTeam } from '../../types/team';

export const mapSportsToLightTeamArray = (
  sports: Sport[],
  sportSlug: string,
  leagueSlug: string
) =>
  sports
    .find((sport) => sport.slug === sportSlug)
    .leagues.find((league) => league.slug === leagueSlug)
    .teams.map((team) => ({
      shortDisplayName: team.team.shortDisplayName,
      logoHref: team.team.logos[0].href,
    }));

export const sortLightTeamsAlphabetically = (teams: LightTeam[]): LightTeam[] =>
  teams.sort((a, b) => a.shortDisplayName.localeCompare(b.shortDisplayName));
