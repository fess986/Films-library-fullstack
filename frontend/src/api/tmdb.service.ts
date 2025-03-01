const TMDB_CONFIG = {
  API_KEY: '08c7a52e0f9692a6b875c08d416797cb', // ключ сервиса с  https://www.themoviedb.org/settings/api
  BASE_URL: 'https://api.themoviedb.org/3', // базовый URL для API, где 3 - версия API
  LANGUAGE: 'en-US', // Изменим на английский для теста
}

export const TMDBService = {
  async getMovieVideos(movieId: string | number) {
    try {
      console.log('Fetching videos for movie:', movieId)

      const response = await fetch(
        `${TMDB_CONFIG.BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_CONFIG.API_KEY}&language=${TMDB_CONFIG.LANGUAGE}`
      )
      const data = await response.json()
      console.log('API response:', data)

      if (!data.results?.length) {
        console.log('No videos found, trying without language parameter')
        const fallbackResponse = await fetch(
          `${TMDB_CONFIG.BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_CONFIG.API_KEY}`
        )
        const fallbackData = await fallbackResponse.json()
        console.log('Fallback response:', fallbackData)
        data.results = fallbackData.results
      }

      const video = data.results?.find(
        (v: { type: string }) => v.type === 'Trailer' || v.type === 'Teaser'
      )

      if (video) {
        return `https://www.youtube.com/embed/${video.key}?origin=${window.location.origin}&enablejsapi=1`
      }

      return null
    } catch (error) {
      console.error('Error fetching TMDB videos:', error)
      return null
    }
  },
}

export const TestId = 120467
