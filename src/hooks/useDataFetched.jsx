import { useState, useEffect } from 'react';
import axios from 'axios';

// NOTE: Este custom hook sirve para ahcer fetching de datos
export const useDataFetched = (API, type) => {
	if (type === 'categories') {
		const [categories, setCategories] = useState([]);
		const [loading, setLoading] = useState(true);

		useEffect(() => {
			axios(API).then((response) => {
				setCategories(response.data);
				setLoading(false);
			});
		}, []);

		return { categories, loading };
	} else {
		const [posts, setPosts] = useState([]);

		useEffect(() => {
			axios(API).then((response) => {
				setPosts(response.data);
			});
		}, []);

		return posts;
	}
};
