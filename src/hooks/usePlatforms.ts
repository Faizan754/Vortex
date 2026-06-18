import platforms from "@/data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platforms as Platform[],
  error: null,
  isLoading: false,
});

export default usePlatforms;
