import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '../Image';
import Gallery from './Gallery';

const images = [
  {
    id: 9952,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Room_2.jpg',
  },
  {
    id: 9945,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Lobby_1.jpg',
  },
  {
    id: 9949,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Room_.jpg',
  },
  {
    id: 10611,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Treebo_9_Marks_Maple_Room_2.jpg',
  },
  {
    id: 9947,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Room_1.jpg',
  },
  {
    id: 9946,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Bathroom_1.jpg',
  },
  {
    id: 9948,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Bathroom_2.jpg',
  },
  {
    id: 9950,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Room_1.jpg',
  },
  {
    id: 9951,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Room_5.jpg',
  },
  {
    id: 9956,
    url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Bathroom_1.jpg',
  },
];

storiesOf('Gallery', module).addParameters({
  component: Gallery,
})
  .add('Slides', () => (
    <React.Fragment>
      <Gallery
        width="400"
        height="300"
        type="slides"
      >
        {
          images.map((image, index) => (
            <Image
              key={image.url}
              alt={`img-${index}`}
              width="400"
              height="300"
              src={image.url}
            />
          ))
        }
      </Gallery>
    </React.Fragment>
  ))
  .add('Carousel', () => (
    <React.Fragment>
      <Gallery
        width="400"
        height="300"
        type="carousel"
      >
        {
          images.map((image, index) => (
            <Image
              key={image.url}
              alt={`img-${index}`}
              width="200"
              height="300"
              src={image.url}
            />
          ))
        }
      </Gallery>
    </React.Fragment>
  ));
