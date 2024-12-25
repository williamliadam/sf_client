import type { RecipeType } from "@features/day-plan/types"
import { emptySplitApi } from "@services/emptySliceApi"



const dayPlanApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => 'test',
    }),
    mineRecipes: build.query<RecipeType[], void>({
      query: () => 'recipe',
    }),
  }),
  overrideExisting: false,
})

export const { useExampleQuery, useMineRecipesQuery } = dayPlanApi