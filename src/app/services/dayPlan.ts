import type { RecipeType } from "@app/features/day-plan/types"
import { emptySplitApi } from "@app/services/emptySliceApi"



const dayPlanApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => 'test',
    }),
    mineRecipes: build.query<RecipeType[], void>({
      query: () => 'recipe/findAll',
    }),
  }),
  overrideExisting: false,
})

export const { useExampleQuery, useMineRecipesQuery } = dayPlanApi