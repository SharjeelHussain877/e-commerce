import AppRouter from './router'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>

      <AppRouter />
      <Outlet />
    </>
  )
}

export default App
