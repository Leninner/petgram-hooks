import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import FavButton from '../FavButton';
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation';
import { Link } from 'react-router-dom';

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
