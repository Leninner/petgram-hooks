import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, Item } from './style';
import { Spinner } from '../Spinner';
import { useDataFetched } from '../../hooks/useDataFetched';

const API = 'https://petgram-server-leninner.vercel.app/categories';

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useDataFetched(API, 'categories');

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
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        ))}
      </List>
    );
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
