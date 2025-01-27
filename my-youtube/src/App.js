import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import {Provider} from 'react-redux';
import store from "./Utils/store";
import MainContainer from "./components/MainContainer"
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import WatchPage from "./components/WatchPage";
const App=()=>{
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[{

    
      path:"/",
      element:<MainContainer/>
  },{
    path:"watch",
    element:<WatchPage/>
  }

    ]

  }])

  return(
    <Provider store={store}>
    <div>
    
      <Head/>
      <RouterProvider router={appRouter}/>
    


    </div>
    </Provider>

  )
}

export default App;

// Head
// Body
//     Sidebar
//       MenuItems

//     Maincontainer
//       ButtonList
//       VideoContainer
//         videoCard