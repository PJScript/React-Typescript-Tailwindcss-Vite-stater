import {
  Button,
  IconButton,
  MobileNav,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const StickyNavbar = (): JSX.Element => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to="/">
        <Typography
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          home
        </Typography>
      </Link>
    </ul>
  );

  return (
    <div className="flex justify-center max-h-[768px] overflow-auto border-b-2 px-4 py-2 lg:px-8 lg:py-4 ">
      <Navbar className="sticky top-0 z-10 h-max rounded-none shadow-none max-w-screen-xl  px-0 py-0 lg:px-0 lg:py-0">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              Title
            </Typography>
          </Link>

          <div className="items-center gap-4 flex">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Link to="/login">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={(): void => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default StickyNavbar;
