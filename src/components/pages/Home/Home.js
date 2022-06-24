import { useEffect } from "react";
import { movieApi } from "../../../api";
// console.log(movieApi.nowplaying());

export const Home = () => {
  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results },
      } = await movieApi.copRated();
    };
    movieData();
  }, []);

  return <div>Home</div>;
};
