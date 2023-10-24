import Home from "./pages/Home";
import Login from "./pages/Login";

const PAGE_LIST = [
    {   
      path: '/',
      children: <Home />,
    },
    {
        path:'/login',
        children:<Login />
    }
  ];

  export default PAGE_LIST