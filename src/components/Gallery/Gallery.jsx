import React from 'react';
import {
  Card,
  Cards,
  Container,
  Image,
  LoadBtn,
  NoResults,
} from './GalleryStyled';

export const Gallery = ({
  fetchedImgs,
  loadMore,
  imageClick,
  query,
  total,
}) => {
  return (
    <Container>
      {total === 0 ? (
        <NoResults>There is nothing found 😥</NoResults>
      ) : (
        <Cards>
          {fetchedImgs.map(img => {
            return (
              <Card key={img.id} onClick={() => imageClick(img.largeImageURL)}>
                <Image src={img.webformatURL} alt="" />
              </Card>
            );
          })}
        </Cards>
      )}

      {fetchedImgs.length !== total ? (
        <LoadBtn onClick={() => loadMore()} type="button">
          {query !== 'cat' ? 'Load More' : 'Show me some cats 😍'}
        </LoadBtn>
      ) : null}
    </Container>
  );
};
