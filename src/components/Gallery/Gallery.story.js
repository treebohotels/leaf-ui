import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '../Image';
import Gallery from '../Gallery';

storiesOf('Gallery', module)
  .add('simple', () => {
    const images1 = [
      {
        id: 9952,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Room_2.jpg',
        is_showcased: true,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Maple_Room_2.jpg',
      },
      {
        id: 9945,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Lobby_1.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Lobby_1.jpg',
      },
      {
        id: 9949,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Room_.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Acacia_Room_.jpg',
      },
      {
        id: 10611,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Treebo_9_Marks_Maple_Room_2.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Treebo_9_Marks_Maple_Room_2.jpg',
      },
      {
        id: 9947,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Room_1.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Acacia_Room_1.jpg',
      },
      {
        id: 9946,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Bathroom_1.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Acacia_Bathroom_1.jpg',
      },
      {
        id: 9948,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Acacia_Bathroom_2.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Acacia_Bathroom_2.jpg',
      },
      {
        id: 9950,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Room_1.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Maple_Room_1.jpg',
      },
      {
        id: 9951,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Room_5.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Maple_Room_5.jpg',
      },
      {
        id: 9956,
        url: '//images.treebohotels.com/files/./Treebo_9_Marks_Inn/Maple_Bathroom_1.jpg',
        is_showcased: false,
        tagline: 'Treebo 9 Marks Inn',
        main: './Treebo_9_Marks_Inn/Maple_Bathroom_1.jpg',
      },
    ];

    const images2 = [
      {
        id: 10782,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Akshaya_Lalbagh_Oak_Queen_03.jpg',
        is_showcased: true,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Akshaya_Lalbagh_Oak_Queen_03.jpg',
      },
      {
        id: 4670,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/1Treebo_Akshaya_Lalbagh_Main.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/1Treebo_Akshaya_Lalbagh_Main.jpg',
      },
      {
        id: 4682,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Maple/4Treebo_Akshaya_Lalbagh_Maple.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Maple/4Treebo_Akshaya_Lalbagh_Maple.jpg',
      },
      {
        id: 4679,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Oak/2Treebo_Akshaya_Lalbagh_Oak.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Oak/2Treebo_Akshaya_Lalbagh_Oak.jpg',
      },
      {
        id: 4683,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Maple/Treebo_Akshaya_Lalbagh_Maple_Room.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Maple/Treebo_Akshaya_Lalbagh_Maple_Room.jpg',
      },
      {
        id: 4676,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Oak/Treebo_Akshaya_Lalbagh_Oak_room.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Oak/Treebo_Akshaya_Lalbagh_Oak_room.jpg',
      },
      {
        id: 4681,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Maple/Treebo_Akshaya_Lalbagh_Maple_Room2.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Maple/Treebo_Akshaya_Lalbagh_Maple_Room2.jpg',
      },
      {
        id: 4680,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Maple/5Treebo_Akshaya_Lalbagh_Maple_Bathroom.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Maple/5Treebo_Akshaya_Lalbagh_Maple_Bathroom.jpg',
      },
      {
        id: 4678,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Oak/Treebo_Akshaya_Lalbagh_Oak_room3.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Oak/Treebo_Akshaya_Lalbagh_Oak_room3.jpg',
      },
      {
        id: 4677,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Lalbagh_Inn/Oak/3Treebo_Akshaya_Lalbagh_Oak_Bathroom.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Lalbagh Inn',
        main: './Treebo_Akshaya_Lalbagh_Inn/Oak/3Treebo_Akshaya_Lalbagh_Oak_Bathroom.jpg',
      },
    ];

    const images3 = [
      {
        id: 10781,
        url: '//images.treebohotels.com/files/./Treebo_Akshaya_Mayflower/Akshaya_Mayflower_Mahogany_(8).jpg',
        is_showcased: true,
        tagline: 'Treebo Akshaya Mayflower',
        main: './Treebo_Akshaya_Mayflower/Akshaya_Mayflower_Mahogany_(8).jpg',
      },
      {
        id: 963,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_others_4.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_others_4.jpg',
      },
      {
        id: 977,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_acacia_2.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_acacia_2.jpg',
      },
      {
        id: 965,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_oak_1.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_oak_1.jpg',
      },
      {
        id: 970,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_maple_2.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_maple_2.jpg',
      },
      {
        id: 975,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_mahagony_2.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_mahagony_2.jpg',
      },
      {
        id: 978,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_acacia_3.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_acacia_3.jpg',
      },
      {
        id: 976,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_acacia_1.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_acacia_1.jpg',
      },
      {
        id: 964,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_mahagony_1.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_mahagony_1.jpg',
      },
      {
        id: 973,
        url: '//images.treebohotels.com/files/./akshaya_mayflower_mahagony_5.jpg',
        is_showcased: false,
        tagline: 'Treebo Akshaya Mayflower',
        main: './akshaya_mayflower_mahagony_5.jpg',
      },
    ];

    const images4 = [
      {
        id: 11160,
        url: '//images.treebohotels.com/files/./Treebo_Annora/Annora_Standard_Room.jpg',
        is_showcased: true,
        tagline: 'Treebo Annora',
        main: './Treebo_Annora/Annora_Standard_Room.jpg',
      },
      {
        id: 1669,
        url: '//images.treebohotels.com/files/./annora_2.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_2.jpg',
      },
      {
        id: 1643,
        url: '//images.treebohotels.com/files/./annora_oak_2.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_oak_2.jpg',
      },
      {
        id: 1666,
        url: '//images.treebohotels.com/files/./annora_mahagony_6.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_mahagony_6.jpg',
      },
      {
        id: 1650,
        url: '//images.treebohotels.com/files/./annora_oak_9.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_oak_9.jpg',
      },
      {
        id: 1651,
        url: '//images.treebohotels.com/files/./annora_maple_1.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_maple_1.jpg',
      },
      {
        id: 1665,
        url: '//images.treebohotels.com/files/./annora_mahagony_5.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_mahagony_5.jpg',
      },
      {
        id: 1661,
        url: '//images.treebohotels.com/files/./annora_mahagony_1.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_mahagony_1.jpg',
      },
      {
        id: 1662,
        url: '//images.treebohotels.com/files/./annora_mahagony_2.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_mahagony_2.jpg',
      },
      {
        id: 1663,
        url: '//images.treebohotels.com/files/./annora_mahagony_3.jpg',
        is_showcased: false,
        tagline: 'Treebo Annora',
        main: './annora_mahagony_3.jpg',
      },
    ];

    return (
      <div>
        <Gallery
          isAvailable
        >
          {
            images1.map((image) => (
              <span style={{ background: 'red', display: 'inline-flex' }}>
                <Image
                  height="150px"
                  width="150px"
                  src={image.url}
                />
              </span>
          ))
      }

        </Gallery>
        <Gallery
          id="gallery2"
          isAvailable
        >
          {
            images2.map((image) => (
              <span style={{ background: 'red', display: 'inline-flex' }}>
                <Image
                  height="300px"
                  width="300px"
                  src={image.url}
                />
              </span>
          ))
      }

        </Gallery>
        <Gallery
          isAvailable
          id="gallery3"
        >
          {
            images3.map((image) => (
              <span style={{ background: 'red', display: 'inline-flex' }}>
                <Image
                  height="300px"
                  width="300px"
                  src={image.url}
                />
              </span>
          ))
      }

        </Gallery>
        <Gallery
          isAvailable
          id="gallery4"
        >
          {
            images4.map((image) => (
              <span style={{ background: 'red', display: 'inline-flex' }}>
                <Image
                  height="300px"
                  width="300px"
                  src={image.url}
                />
              </span>
          ))
      }

        </Gallery>
      </div>
    );
  });
