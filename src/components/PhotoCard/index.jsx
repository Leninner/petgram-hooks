import React, { useEffect, useRef, useState } from 'react';
import { ImgWrapper, Img, Button, Article } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
	const imgRef = useRef(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		const observer = new window.IntersectionObserver((entries) => {
			const { isIntersecting } = entries[0];
			if (isIntersecting) {
				console.log('Si');
				setShow(true);
				observer.disconnect();
			}
		});

		observer.observe(imgRef.current);
	}, [imgRef]);

	return (
		<Article ref={imgRef}>
			{show && (
				<>
					{' '}
					<a href={`/detail/${id}`}>
						<ImgWrapper>
							<Img src={src} alt={id} />
						</ImgWrapper>
					</a>
					<Button>
						<MdFavoriteBorder size='32px' />
						{likes} likes!
					</Button>
				</>
			)}
		</Article>
	);
};
