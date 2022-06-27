import { useEffect, useState } from "react";
import { movieApi } from "../../../api";
import { movieNum } from "../../../constants/constant";
import { Loading } from "../../Loding";
import { MainBanner } from "./MainBanner";
// console.log(movieApi.nowplaying());

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [comming, setUpcomming] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: nowplayData },
        } = await movieApi.nowplaying();
        setPlaying(nowplayData);

        const {
          data: { results: topratDate },
        } = await movieApi.topRated();
        setRated(topratDate);

        const {
          data: { results: upCommingData },
        } = await movieApi.upComming();
        setUpcomming(upCommingData);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영 영화:", playing);
  // console.log("인기 영화:", rated);
  // console.log("개봉예정 영화:", comming);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>{playing && <MainBanner playData={playing[movieNum]} />}</>
      )}
    </div>
  );
};
