import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import FavButton from '../FavButton';
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({ id, likes, liked = 0, src = DEFAULT_IMAGE }) => {
  const [show, imgRef] = useNearScreen();
  const { mutation } = useToggleLikeMutation();

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={imgRef}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt={id} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string,
  likes: (props, propName, componentName) => {
    const propValue = props[propName];

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`);
    }

    return null;
  },
  liked: PropTypes.bool.isRequired,
};
