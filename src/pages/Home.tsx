import UserList from '../components/UserList';
import { ApiErrorBoundary } from '../components/error/ApiErrorBoundary';

const Home = (): JSX.Element => {
  // if (isLoading) {
  //   return <div>LOADING...</div>;
  // }

  // if (isError) {
  //   return <div>Opps.. throw ERROR</div>;
  // }
  return (
    <div>
      <ApiErrorBoundary>
        <UserList />
      </ApiErrorBoundary>
    </div>
  );
};

export default Home;
