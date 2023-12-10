import React, { Component } from 'react';
import { Filter } from './Filter/Filter';
import { Gallery } from './Gallery/Gallery';
import { Wrapper } from './GlobalStyles';
import { fetchImages } from './Services/Api';

export class App extends Component {
  state = {
    images: [],
    query: 'cat',
    totalHit: 0,
    page: 1,
    per_page: 12,
    loading: false,
  };
  componentDidMount() {
    console.log('Page reloaded');
  }
  async componentDidUpdate(_, prevState) {
    const { query, page, per_page } = this.state;
    console.log('Update');
    console.log(this.state);
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { hits } = await fetchImages({
        q: query,
        page,
        per_page,
      });
      this.setState(prev => ({ images: [...prev.images, ...hits] }));
    }
  }
  handleLoadMore() {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  handleSearch = searchQuery => {
    console.log(`запрос на поиск ${searchQuery}`);

    console.log(this.state.query);

    if (searchQuery !== this.state.query) {
      this.setState(prev => ({ query: searchQuery }));
    }
  };

  render() {
    return (
      <Wrapper>
        <Filter onSearchSubmit={this.handleSearch} />
        <Gallery
          fetchedImgs={this.state.images}
          loadMore={() => this.handleLoadMore()}
        />
      </Wrapper>
    );
  }
}
