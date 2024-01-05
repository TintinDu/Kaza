import { Link } from 'react-router-dom';

export const NavBar = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/housing">Housing</Link>
    </nav>
);
