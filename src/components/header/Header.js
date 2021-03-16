import { Link } from 'react-router-dom';
import Nav from './Nav';
import Search from './Search';

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">✨✨SuperStore✨✨</h1>
        </Link>
        <Nav />
      </header>
      <Search />
    </>
  );
}
