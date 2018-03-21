import React from 'react';
import { storiesOf } from '@storybook/react';
import Gallery from '../Gallery';

storiesOf('Gallery', module)
  .add('simple', () => (
    <Gallery
      width="24rem"
      height="16rem"
      images={[
        { url: 'http://images.treebohotels.com/files/biznotel/1Treebo_Cartier_Biznotel_Main.jpg?w=400&h=300&fm=pjpg&fit=crop&auto=compress', redirectUrl: '/' },
        { url: 'http://images.treebohotels.com/files/biznotel/1Treebo_Cartier_Biznotel_Main.jpg?w=400&h=300&fm=pjpg&fit=crop&auto=compress', redirectUrl: '/' },
        { url: 'http://images.treebohotels.com/files/Treebo_Shree_Krishn_Comfort/Shree_Krishn_Comfort_Maple_King_04.jpg?w=400&h=300&fm=pjpg&fit=crop&auto=compress', redirectUrl: '/' },
        { url: 'http://images.treebohotels.com/files/Treebo_Shree_Krishn_Comfort/Shree_Krishn_Comfort_Maple_King_04.jpg?w=400&h=300&fm=pjpg&fit=crop&auto=compress', redirectUrl: '/' },
      ]}
      isAvailable
      nextImageWidth="4rem"
      initiallyShow="1.2"
    />
  ));
