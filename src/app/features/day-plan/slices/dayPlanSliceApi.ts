import { emptySplitApi } from "@store/emptySliceApi"
import type { RecipeType } from "../types"


const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => 'test',
    }),
    mineRecipes: build.query<RecipeType[], void>({
      query: () => 'recipes',
    }),
  }),
  overrideExisting: false,
})

export const { useExampleQuery, useMineRecipesQuery } = extendedApi