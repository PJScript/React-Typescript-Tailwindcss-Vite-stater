import { useSuspenseQuery } from '@tanstack/react-query';
import { getUsersApi } from '../apis/api/auth/users';

const UserList = (): JSX.Element => {
  const { error } = useSuspenseQuery({
    queryKey: ['test'],
    queryFn: () => getUsersApi({ limit: 1, offset: 1 }),
    retry: 1,
  });

  if (error) {
    throw error;
  }

  return <div>유저리스트</div>;
};
export default UserList;
