import React from 'react';
import { Card, Cards, Container, LoadBtn } from './GalleryStyled';

export const Gallery = () => {
  return (
    <Container>
      <Cards>
        <Card>Kartinochka</Card>
        <Card>Kartinochka</Card>
        <Card>Kartinochka</Card>
        <Card>Kartinochka</Card>
      </Cards>
      <LoadBtn>Load More</LoadBtn>
    </Container>
  );
};
