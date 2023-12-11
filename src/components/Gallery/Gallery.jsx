import React from 'react';
import { Card, Cards, Container, Image, LoadBtn } from './GalleryStyled';

export const Gallery = ({ fetchedImgs, loadMore, imageClick, query }) => {
  return (
    <Container>
      <Cards>
        {fetchedImgs.map(img => {
          return (
            <Card key={img.id} onClick={() => imageClick(img.largeImageURL)}>
              <Image src={img.webformatURL} alt="" />
            </Card>
          );
        })}
      </Cards>
      <LoadBtn onClick={() => loadMore()} type="button">
        {query !== 'cat' ? 'Load More' : 'Show cats'}
      </LoadBtn>
    </Container>
  );
};
