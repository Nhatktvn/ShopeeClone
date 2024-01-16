import { useRoutes } from "react-router-dom"
import ProductList from "./pages/ProductList"
import Login from "./pages/Login"

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path:"/",
      element: <ProductList/>
    },
    {path:"/login",
  element:<Login/>}
  ])
  return (

  )
}
