import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Watch from './components/Watch'
import Shorts from './components/Shorts'
import Subscriptions from './components/Subscriptions'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import appStore from './utils/appStore'

function App() {

  return (
    <>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <Watch />
        },
        {
          path: "/shorts",
          element: <Shorts />
        },
        {
          path: "/subscriptions",
          element: <Subscriptions />
        }
      ]
    }
])

export default App
