import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/test', () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      firstName: 'John',
      lastName: 'Maverick',
    })
  }),
  http.get("/api/recipes", () => {
    return HttpResponse.json([
      { id: 1, name: "Burger" },
      { id: 2, name: "Pizza" },
      { id: 3, name: "Dumpling" },
      { id: 4, name: "Rice" },
    ])
  })
]