import React from "react";
import styled from "styled-components";

const Photo = ({ img }) => {
  return (
    <CardWrapper>
      <CardImg src={img} alt="Photo" />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 28.8rem;
  overflow: hidden;
  margin: 1rem;
  position: relative;
  z-index: 1;
`;

const CardImg = styled.img`
  width: 100%;
  height: 30rem;
  transform: scale(1.1);
  transition: all 1s;

  &:hover {
    transform: scale(1.01);
  }
`;

export default Photo;
