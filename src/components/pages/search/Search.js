import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { Container } from "../../Container";
import { Loading } from "../../Loding";
import { PageTitle } from "../../PageTitle";

const SearchWrap = styled.div`
  margin-top: 150px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #555;
  padding: 20px;
  box-sizing: border-box;
  font-size: 20px;
  font &::placeholder {
    font-size: 20px;
  }
`;
const ConWrap = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

export const Search = () => {
  const [searchTerm, setSearchTrem] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchmovie = async () => {
    const { Search: term } = getValues();
    // =>getValues는 인풋태그에 작성된 내용을 가져옴
    setLoading(true);
    try {
      const {
        data: { results },
      } = await movieApi.search(term);
      setSearchTrem(results);

      if (results.length <= 0) {
        setError("result", {
          message: "영화가 없어요..!",
        });
        // =>setError("에러 이름 ", {message:"값"})
        // =>useForm에 있는 속성으로 에러를 설정할수 있음
      } else {
        setSearchTrem(results);
      }
      setLoading(false);
    } catch (erros) {
      console.log(errors);
    }
  };
  // =>폼상태에 에러처리담당

  // console.log(searchTerm);
  return (
    <div>
      <PageTitle title={"Search"} />

      <Container>
        <SearchWrap>
          <form onSubmit={handleSubmit(searchmovie)}>
            <Input
              {...register("Search", {
                required: "내용은 필수 입니다 ~.~",
                onChange() {
                  clearErrors("result");
                },
              })}
              type="text"
              placeholder="영화 검색...."
            />

            {errors?.search?.message}
            {errors?.results?.message}
          </form>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {searchTerm && (
              <ConWrap>
                {searchTerm.map((term) => (
                  <Con key={term.id}>
                    <Link to={`/detail/${term.id}`}>
                      <Bg
                        style={{
                          background: `url(${imgUrl}${term.backdrop_path}) no-repeat center/cover`,
                        }}
                      />
                      <Title>{term.title}</Title>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </div>
  );
};
