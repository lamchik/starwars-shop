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

export const loadStarshipsInCart = (urls: string[]): Promise<Starship[]> => {
  const promiseArray = urls.map((url) =>
     fetch(`${url}`, {
      method: 'GET',
    })
  );
  return Promise.all(promiseArray)
    .then((allResults) => {
      return Promise.all(allResults.map(

        (fetchResult) => {
          return fetchResult.json()
        }
      ))
    }).then((res: APIStarship[]): Starship[] => {return res.map(APIStarshipToStarship)})
}

