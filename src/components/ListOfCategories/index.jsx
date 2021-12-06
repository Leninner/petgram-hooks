import React from 'react';
import { Category } from '../Category';
import { List, Item } from './style';

export const ListOfCategories = () => {
	return (
		<List>
			{[1, 2, 3, 4].map((value) => (
				<Item key={value}>
					<Category />
				</Item>
			))}
		</List>
	);
};
