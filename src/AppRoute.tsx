import { StickyNavbar } from './components/mt/StickyNav';
import PAGE_LIST from './routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const AppRoute = () => {
  console.log('test')
  return (
    <>
      <StickyNavbar />
      <div className="flex flex-col w-[100%] items-center justify-center px-4 py-2 lg:px-8 lg:py-4">
        <Routes>
          {PAGE_LIST.map(({ path, children }) => (
            <Route
              path={path}
              element={
                <div className="max-w-screen-xl w-[100%]">{children}</div>
              }
            />
          ))}
        </Routes>
      </div>
    </>
  );
};

export default AppRoute;
