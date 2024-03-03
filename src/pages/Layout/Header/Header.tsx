const Header: React.FC = () => {
  return (
    <header>
      <nav className="nav min-vh-20 bg-success">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" aria-current="page" href="#">About me</a>
        <a className="nav-link" aria-current="page" href="#">Projects</a>
        <a className="nav-link" aria-current="page" href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header;
