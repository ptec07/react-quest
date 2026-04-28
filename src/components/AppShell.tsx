import { Link, NavLink, Outlet } from 'react-router-dom'

export function AppShell() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand" aria-label="React Quest home">
          <span className="brand-mark">RQ</span>
          <span>React Quest</span>
        </Link>
        <nav className="topnav" aria-label="Main navigation">
          <NavLink to="/quest">Quest Map</NavLink>
          <a href="https://ko.react.dev/" target="_blank" rel="noreferrer">
            ko.react.dev
          </a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
