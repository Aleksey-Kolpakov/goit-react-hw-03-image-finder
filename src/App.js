import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Profile from './components/Profile/Profile';
import fetchImages from './utils/backend-services'
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';

fetchImages('cat').then(console.log)

class App extends Component {
  state = {
    images: [],
    searchQuerry: '',
    pageNumber: 1,
  }
  searchImages = (submitValue) => {
    this.setState({
      searchQuerry: submitValue
    })
  }
  openImage = () => {

  };
  loadMore = () => {

  }

  componentDidUpdate(prevProps, prevState) {
    const { images, searchQuerry } = this.state;
    if (prevState.searchQuerry !== searchQuerry) {
      fetchImages(searchQuerry).then(images => this.setState({ images: [...images] }))

    }
  }
  render() {

    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery>
          {images.map(image => <ImageGalleryItem key={image.id} id={image.id} src={image.previewURL} openImage={this.openImage} />)}
        </ImageGallery>
        <Button loadMore={this.loadMore} />
      </>
    );
  }
}

export default App;

