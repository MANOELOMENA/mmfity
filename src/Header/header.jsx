import './header.scss'

const Header = () => {
    return(
        <>
        <header className="header">
        <h1>M&M<span>FITY</span></h1>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Músicas</a></li>
          </ul>
        </nav>
        </header>
        </>
    )
}

export default Header