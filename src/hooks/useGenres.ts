import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from 'ms'

const apiClient = new APIClient('/genres')


export interface Genre {
  id: number;
  name: string;
  image_background: string

}


const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: CACHE_KEY_GENRES,
  queryFn: () => apiClient.getAll({}),
  staleTime: ms('24h')// 24hrs
  
})

export default useGenres;
