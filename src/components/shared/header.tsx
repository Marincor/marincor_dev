import Logo from '../../../public/assets/imgs/marincor-v2.png'
import Image from 'next/image'

const Header = () => {

    const menuItens = [
        {
            pt: "Início"
        },
        {
            pt: "Skills"
        },
        {
            pt: "Portfolio"
        }
    ]


    return (
       <header className="header">
                
                <nav className="header__menu">
                    <Image src={Logo} alt="" width={50} height={50} className="logo" />
                    <ul className="header__menuList">
                        {menuItens.map((item) =>{
                             return (

                            <li key={item.pt} className="header__menuItem">
                                 <a>
                                  {item.pt}
                                 </a>
                            </li>
                             )
                        })}
                        <li className="header__menuItem-lang">
                            <button>
                                language
                            </button>
                            
                        </li>
                    </ul>
                </nav>
       </header>
    )
}

export default Header;