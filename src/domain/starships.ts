export type MultipleEntity<T> = {
  count: number,
  "next": string,
  "previous": string,
  "results": T[]
}

export type APIStarship = {
  "name": string,
  "model": string,
  "manufacturer": string,
  "cost_in_credits": string,
  "length": string,
  "max_atmosphering_speed": string,
  "crew": string,
  "passengers":string
  "cargo_capacity": string,
  "consumables": string,
  "hyperdrive_rating": string,
  "MGLT": string,
  "starship_class": string,
  "pilots": [],
  "films": string[],
  "created": string,
  "edited": string,
  "url": string
}

export type Starship = Omit<APIStarship, 'cost_in_credits'> & {cost_in_credits?: number}
export const APIStarshipToStarship = (apiStarship: APIStarship): Starship => {
  return {
    ...apiStarship,
    cost_in_credits: priceToNumber(apiStarship.cost_in_credits),
  }
}

const priceToNumber = (price: string): number | undefined => price==='unknown' ? undefined : +price
