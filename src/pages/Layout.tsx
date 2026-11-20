import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Nyilvános</NavLink>
          <NavLink to="/admin">Admin</NavLink>
          <NavLink to="/kosar">Kosár</NavLink>          
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
