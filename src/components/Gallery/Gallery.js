import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '../Link';
import Image from '../Image/Image';

const GalleryContainer = styled.div`
  width: ${(props) => `calc((${props.initiallyShow} * ${props.width}) + .4rem)`};
  height: ${(props) => `calc(${props.height} + .4rem)`};
  overflow-x: ${(props) => props.scrollDirection === 'horizontal' ? 'scroll' : 'hidden'};
  overflow-y: ${(props) => props.scrollDirection === 'vertical' ? 'scroll' : 'hidden'};
  white-space: ${(props) => props.scrollDirection === 'horizontal' ? 'nowrap' : 'initial'};
`;

const ImageContainer = styled.span`
  width: ${(props) => `calc(${props.width} + .4rem)`};
  height: ${(props) => `calc(${props.height} + .4rem)`};
  border: 0.4rem solid #f00;
  display: inline-block;
`;

const Gallery = ({ width, height, images, isAvailable, initiallyShow, scrollDirection }) => (

  <GalleryContainer
    width={width}
    height={height}
    initiallyShow={initiallyShow}
    scrollDirection={scrollDirection}
  >
    {
      images.length ? images.map((image) => (

        <ImageContainer
          width={width}
          height={height}
        >
          <Link
            href={image.redirectUrl}
            key={image.url}
          >
            <Image
              src={image.url}
              alt={image.tagline}
              grayscale={!isAvailable}
              width="100%"
              height="100%"

            />
          </Link>
        </ImageContainer>
      )) : [1, 2].map(() => (
        <Image
          width={width}
          height={height}
        />
      ))
    }
  </GalleryContainer>
);

Gallery.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  images: PropTypes.array,
  isAvailable: PropTypes.bool,
  initiallyShow: PropTypes.string,
  scrollDirection: PropTypes.string,
};

Gallery.defaultProps = {
  width: '100rem',
  height: '100rem',
  isAvailable: true,
  initiallyShow: '1rem',
  scrollDirection: 'horizontal',
};

export default Gallery;
