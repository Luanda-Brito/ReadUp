import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) return null;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/biblioteca">Biblioteca</Link>
        </li>
      </ul>
    </nav>
  );
}
