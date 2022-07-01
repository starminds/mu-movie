import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { ScrollTop } from "../../../ScrollTop";
import { Container } from "../../Container";
import { Loading } from "../../Loding";
import { PageTitle } from "../../PageTitle";
import { MovieDetall } from "./MovieDetall";

const Iframe = styled.iframe`
  width: 100%;
  height: 800px;
  margin-top: 150px;
  @media screen and (max-width: 500px) {
    height: 300px;
  }
`;

export const Detail = () => {
  const [movieData, setmovieData] = useState();
  const [loading, setLoading] = useState(true);
  const [movieViedo, setmovieViedo] = useState();
  const { id } = useParams();

  useEffect(() => {
    const movieData = async () => {
      try {
        const { data: detailData } = await movieApi.moviedetail(id);
        setmovieData(detailData);

        const {
          data: { results },
        } = await movieApi.video(id);
        setmovieViedo(results.length === 0 ? null : results[0].key);
        setLoading(false);
      } catch (error) {}
    };
    movieData();
  }, []);

  return (
    <div>
      <PageTitle title={"Detail"} />
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movieData && <MovieDetall movieData={movieData} />}
          {movieViedo ? (
            <Iframe
              src={`https://www.youtube.com/embed/${movieViedo}`}
              allowFullScreen
            ></Iframe>
          ) : null}
        </Container>
      )}
    </div>
  );
};
