import {MultipleEntity, APIStarship, Starship, APIStarshipToStarship,} from "../domain/starships";

export const loadStarships = (): Promise<MultipleEntity<Starship>> => {
  return fetch('https://swapi.dev/api/starships', {
    method: 'GET',
  }).then((res) => {
    return res.json();
  }).then((res: MultipleEntity<APIStarship>): MultipleEntity<Starship> => {
    return {
      ...res,
      results: res.results.map(APIStarshipToStarship),
    }
  })

}

