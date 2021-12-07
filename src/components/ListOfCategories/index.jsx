import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './style';
import axios from 'axios';

const useCategoriesData = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios('https://petgram-server-leninner.vercel.app/categories').then((response) => {
			setCategories(response.data);
			setLoading(false);
		});
	}, []);

	return { categories, loading };
};

export const ListOfCategories = () => {
	const { categories, loading } = useCategoriesData();

	const [showFixed, setShowFixed] = useState(false);

	useEffect(() => {
		const onScroll = (e) => {
			const newShowFixed = window.scrollY > 200;

			showFixed !== newShowFixed && setShowFixed(newShowFixed);
		};

		document.addEventListener('scroll', onScroll);

		return () => document.removeEventListener('scroll', onScroll);
	}, [showFixed]);

	const renderList = (fixed) => {
		return (
			<List fixed={fixed}>
				{categories.map((category) => (
					<Item key={category.id}>
						<Category {...category} />
					</Item>
				))}
			</List>
		);
	};

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	);
};
