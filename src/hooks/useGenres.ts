import genres from "../data/Genres";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;
