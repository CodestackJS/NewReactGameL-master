import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../constants";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => apiClient.getAll({}),
    staleTime: ms('24h')// 24hrs
})



export default usePlatforms