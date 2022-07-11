import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a
            href="https://www.linkedin.com/in/joosecj-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @joosecj
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
