import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoute from './AppRoute';

const App = (): JSX.Element => {
  const client = new QueryClient({});

  return (
    <QueryClientProvider client={client}>
      <AppRoute />
    </QueryClientProvider>
  );
};

export default App;
