import useData from "../../utilities/hooks/useData";
import { GameQuery } from "../models/gameModels";
import { Game } from "../models/gameModels";
import GameStaticData from '../data/games';

const useGames = (gameQuery: GameQuery) =>
    useData<Game>(
      "/games",
      {
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText
        },
      },
      [gameQuery]
    );

const useGamesStatic = (gameQuery: GameQuery) => ({ data: GameStaticData, isLoading: false, error: null });

export { useGamesStatic };  
export default useGames;