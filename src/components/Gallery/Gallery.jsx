import React from 'react';
import { Card, Cards, Container, Image, LoadBtn } from './GalleryStyled';
import { fetchImages } from 'components/Services/Api';

export class Gallery extends React.Component {
  state = {
    images: [],
    loading: false,
    page: 1,
  };
  async componentDidMount() {
    console.log('ComponentDidMount');
    const images = await fetchImages();
    console.log(images);
    this.setState({ images: [...images] });
  }

  async handleLoadMore() {
    const newImages = await fetchImages(`page:2,`);
    console.log(newImages);

    this.setState(prevState => ({
      page: (prevState.page += 1),
    }));
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
        <LoadBtn onClick={() => this.handleLoadMore()} type="button">
          Load More
        </LoadBtn>
      </Container>
    );
  }
}
