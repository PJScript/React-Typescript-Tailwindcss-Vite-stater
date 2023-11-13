import { Route, Routes } from 'react-router-dom';
import StickyNavbar from './components/mt/StickyNav';
import PAGE_LIST from './routes';

const AppRoute: () => JSX.Element = () => {
  console.log('test');

  return (
    <>
      <StickyNavbar />
      <div className="flex w-[100%] flex-col items-center justify-center px-4 py-2 lg:px-8 lg:py-4">
        <Routes>
          {PAGE_LIST.map(({ path, children }) => (
            <Route
              path={path}
              element={
                <div className="w-[100%] max-w-screen-xl">{children}</div>
              }
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default AppRoute;
