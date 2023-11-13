import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

interface IPageListType {
  path: string;
  icon: string;
  bgColor: string;
  children: React.ReactElement | React.ReactNode;
}
const PAGE_LIST: IPageListType[] = [
  {
    path: '/',
    icon: '',
    bgColor: '',
    children: <Home />,
  },
  {
    path: '/login',
    icon: '',
    bgColor: '',
    children: <Login />,
  },
  {
    path: '/signup',
    icon: '',
    bgColor: '',
    children: <SignUp />,
  },
];

export default PAGE_LIST;
