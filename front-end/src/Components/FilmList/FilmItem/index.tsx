import React from "react";
import styled from "styled-components";

let FilmItemWrapper = styled.div`
  background-color: #f7f1f1;
  display: flex;
  width: 27%;
  min-height: 50vh;
  margin: 20px 20px;
  padding: 0 5px;
`;

let ItemImage = styled.div<{ imageAddress: string }>`
  background-image: url(${(props) => props.imageAddress});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  min-width: 50%;
  min-height: 100%;
  margin-right: 5px;
`;

let ItemTitle = styled.h3``;

let ItemDescr = styled.h3``;

let ItemRating = styled.div``;

let ItemInfo = styled.div``;

export interface IFilmItem {
  title: string;
  imageAddress: string;
  descr: string;
  rating: string;
}

let FilmItem: React.FC<IFilmItem> = ({
  title,
  imageAddress,
  descr,
  rating,
}) => {
  return (
    <FilmItemWrapper>
      <ItemImage imageAddress={imageAddress}></ItemImage>
      <ItemInfo>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescr>{descr}</ItemDescr>
        <ItemRating>{rating}</ItemRating>
      </ItemInfo>
    </FilmItemWrapper>
  );
};

export default FilmItem;
