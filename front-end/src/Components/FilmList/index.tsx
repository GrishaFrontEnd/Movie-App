import React from "react";
import styled from "styled-components";
import { useGetItemsQuery } from "../../Store/Services/ItemAPI";
import { FlexWrapper } from "../UI";
import FilmItem from "./FilmItem";

interface IFilmList {}

let FilmListWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  min-height: 100vh;
`;

let FilmListHeader = styled.h1`
  padding-top: 25px;
  margin: 0 auto;
`;

let Films = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
`;

let FilmList: React.FC<IFilmList> = () => {
  let { data: items, error, isLoading } = useGetItemsQuery("");
  let filmItems = items ? items.map((item) => <FilmItem {...item} />) : null;
  return (
    <FlexWrapper>
      <FilmListWrapper>
        <FilmListHeader>Last Films</FilmListHeader>
        <Films>{filmItems}</Films>
      </FilmListWrapper>
    </FlexWrapper>
  );
};

export default FilmList;
