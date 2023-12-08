import React from 'react';
import { Card, Cards, Container, Image, LoadBtn } from './GalleryStyled';
import { fetchImages } from 'components/Services/Api';

export class Gallery extends React.Component {
  state = {
    images: [],
    loading: false,
  };
  async componentDidMount() {
    console.log('ComponentDidMount');
    const images = await fetchImages();
    console.log(images);
    this.setState({ images: [...images] });
  }

  render() {
    return (
      <Container>
        <Cards>
          {this.state.images.map(img => {
            return (
              <Card key={img.id}>
                <Image src={img.webformatURL} alt="" />
              </Card>
            );
          })}
        </Cards>
        <LoadBtn>Load More</LoadBtn>
      </Container>
    );
  }
}
