import React, { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Gallery } from './Gallery/Gallery';
import { Wrapper } from './GlobalStyles';
import { fetchImages } from './Services/Api';
import { Notify } from 'notiflix';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    query: 'cat',
    total: 0,
    page: 0,
    per_page: 12,
    largeImageURL: '',
    loading: false,
    isModalOpen: false,
  };
  componentDidMount() {
    console.log('Page reloaded');
  }
  async componentDidUpdate(_, prevState) {
    const { query, page, per_page } = this.state;
    console.log('Update');
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { hits, totalHits } = await fetchImages({
        q: query,
        page,
        per_page,
      });
      this.setState(prev => ({
        images: [...prev.images, ...hits],
        total: totalHits,
      }));
    }
  }
  handleLoadMore() {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  handleSearch = searchQuery => {
    console.log(`запрос на поиск ${searchQuery}`);

    console.log(this.state.query);
    if (searchQuery === '') {
      Notify.info('You need to type something in order to find 🧐');
      return;
    }
    if (searchQuery !== this.state.query) {
      this.setState(prev => ({ query: searchQuery, images: [], page: 1 }));
      Notify.success('Look, we found something!)');
    }
  };

  handleOpenImage = largeImageURL => {
    this.setState(() => ({
      isModalOpen: true,
      largeImageURL: largeImageURL,
    }));
  };
  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  render() {
    return (
      <Wrapper>
        <Filter onSearchSubmit={this.handleSearch} />
        <Gallery
          fetchedImgs={this.state.images}
          loadMore={() => this.handleLoadMore()}
          imageClick={this.handleOpenImage}
          query={this.state.query}
        />
        {this.state.isModalOpen ? (
          <Modal
            imageURL={this.state.largeImageURL}
            closeModal={this.toggleModal}
          />
        ) : null}
      </Wrapper>
    );
  }
}
