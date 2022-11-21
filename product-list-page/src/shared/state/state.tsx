import { createGlobalState } from "react-hooks-global-state";
import { Items } from "../../types/types";

type StateType = {
  favorites: Array<Items>;
};

const initialState: StateType = {
  favorites: [],
};

const { useGlobalState } = createGlobalState(initialState);

export const useFavorite = () => {
  const [favorite, setFavorite] = useGlobalState("favorites");

  const toggleFavorite = (data: Items) => {
    setFavorite((prevFavorites) => {
      const isExist = prevFavorites.find((item) => item.id === data.id);
      if (isExist) {
        return prevFavorites.filter((item) => item.id !== data.id);
      }
      return [...prevFavorites, data];
    });
  };
  return { favorite, toggleFavorite };
};
