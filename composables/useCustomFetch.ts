type TypeFetch = typeof useFetch

export const useCustomFetch: TypeFetch = (request: string, options = {}) => {
  const config = useRuntimeConfig()

  return useFetch(request, {
    baseURL: config.public.API_URL,
    ...options
  })
}
