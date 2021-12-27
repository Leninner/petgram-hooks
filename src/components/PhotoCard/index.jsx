import React from 'react';
import { ImgWrapper, Img, Article } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import FavButton from '../FavButton';
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation';
import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `${id}-like`;

  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, imgRef] = useNearScreen();
  const { mutation, loading, error } = useToggleLikeMutation();

  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
  };

  console.log('{ mutation,loading, error }', { mutation, loading, error });

  return (
    <Article ref={imgRef}>
      {show && (
        <>
          {' '}
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
