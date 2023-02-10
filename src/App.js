import Home from './component/Home';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchResult from './component/SearchResult';
import Movie from './component/Movie';
import Actor from './component/actor';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/search/:movie",
      element: <SearchResult/>
    },
    {
      path: "/movie/:movieId",
      element: <Movie/>,
    },
    {
      
        path:'/actor/:actorId',
        element:<Actor/>,
      
    }
  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
