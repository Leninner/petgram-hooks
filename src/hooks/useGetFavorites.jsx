import { useQuery, gql } from '@apollo/client';

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const useGetFavorites = () => {
  const { data, loading, error } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    favs: data?.favs || [],
    loading,
    error,
  };
};
