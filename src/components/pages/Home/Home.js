import { useEffect } from "react";
import { movieApi } from "../../../styles/api";
// console.log(movieApi.nowplaying());

export const Home = () => {
  useEffect(() => {
    const movieData = async () => {
      const {} = await movieApi.nowplaying();
      //   console.log(playing);
      //   console.log(await movieApi.nowplaying());
    };
    movieData();
  }, []);

  return <div>Home</div>;
};
