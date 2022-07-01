import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { ScrollTop } from "../../../ScrollTop";
import { Container } from "../../Container";
import { Loading } from "../../Loding";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    display: block;
    margin-top: 70px;
  }
`;

const Con = styled.div`
  width: 48%;
  &:nth-child(1) {
    height: 80vh;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 40px;

  @media screen and (max-width: 500px) {
    height: 100px;
    margin-top: 25px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Release = styled.div`
  font-size: 20px;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const Genres = styled.ul`
  font-size: 20px;
  font-weight: 600;
  li {
    list-style: disc;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const RunTime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 30px;
  opacity: 0.8;
  letter-spacing: 0.5px;
`;

export const Detail = () => {
  const [movieData, setmovieData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const movieData = async () => {
      try {
        const { data: detailData } = await movieApi.moviedetail(id);
        setmovieData(detailData);
        setLoading(false);
      } catch (error) {}
    };
    movieData();
  }, []);

  return (
    <div>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <>
          {movieData && (
            <Container>
              <Wrap>
                <Con
                  style={{
                    background: `url(${
                      movieData.backdrop_path
                        ? `${imgUrl}/${movieData.backdrop_path}`
                        : "http://www.gbe.kr/images/co/na/noImg.gif"
                    }) no-repeat center/cover`,
                  }}
                />
                <Con>
                  <Title>{movieData.title}</Title>
                  <Release>개봉일: {movieData.release_date}</Release>
                  <RunTime>{movieData.runtime}분</RunTime>
                  <Genres>
                    {movieData.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </Genres>
                  <Desc>{movieData.overview.slice(0, 300) + "...."}</Desc>
                </Con>
              </Wrap>
            </Container>
          )}
        </>
      )}
    </div>
  );
};
