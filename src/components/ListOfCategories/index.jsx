import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './style';
import axios from 'axios';

export const ListOfCategories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios('https://petgram-server-leninner.vercel.app/categories').then((response) => {
			setCategories(response.data);
		});
	}, []);

	return (
		<List>
			{categories.map((category) => (
				<Item key={category.id}>
					<Category {...category} />
				</Item>
			))}
		</List>
	);
};
