import { useMutation, gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const useLoginUser = () => {
  const [loginMutation, { loading, error }] = useMutation(LOGIN_USER);

  return { loginMutation, loading, error };
};
