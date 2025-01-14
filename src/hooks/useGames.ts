import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import { CACHE_KEY_GAME } from "../constants";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";



const apiClient = new APIClient('/games')


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {

   const gameQuery = useGameQueryStore(s => s.gameQuery)
  
  return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: [CACHE_KEY_GAME,gameQuery],
    queryFn: ({pageParam = 1}) => 
      apiClient
    .getAll({
      params:{
        genres:gameQuery.genreId, 
        parent_platforms:gameQuery.platformId,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText,page: pageParam
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1: undefined;
    },
    staleTime: ms('24h')//24hrs
    
  });
}
 

export default useGames;
