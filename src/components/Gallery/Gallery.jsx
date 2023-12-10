import React from 'react';
import { Card, Cards, Container, Image, LoadBtn } from './GalleryStyled';

export const Gallery = ({ fetchedImgs, loadMore }) => {
  return (
    <Container>
      <Cards>
        {fetchedImgs.map(img => {
          return (
            <Card key={img.id}>
              <Image src={img.webformatURL} alt="" />
            </Card>
          );
        })}
      </Cards>
      <LoadBtn onClick={() => loadMore()} type="button">
        Load More
      </LoadBtn>
    </Container>
  );
};
