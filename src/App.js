import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./RootLayout";
import {Posts} from "./Posts";
import {postPromise as postLoader} from "./PostLoader";
import Home from "./HomeContent";
import {homeLoader} from "./homeLoader";
import {Test} from "./Test";
import {TestLoader} from "./testLoader";
import {AxiosTest} from "./AxiosTest";
import {AxiosTestLoader} from "./AxiosTestLoader";
function ErrorFallback({ error }) {
  return <div>Error: {error} </div>;
}
function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      children:[
        {
          path:"posts",
          element:<Posts/>,
          loader:postLoader
        },
        {
          path: "home",
          element: <Home />,
          loader: homeLoader, // Loader for fetching data
          errorElement: <ErrorFallback />, // Fallback UI for errors
        },
        {
          path:"test",
          element:<Test/>,
          loader:TestLoader
        },
        {
          path:"/axios-test",
          element:<AxiosTest/>,
          errorElement:(error)=><p>{error}</p>,
          loader:AxiosTestLoader
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
