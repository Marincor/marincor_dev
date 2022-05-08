import Logo from '../../../public/assets/imgs/marincor-v2.png'
import Image from 'next/image'
import brazilIcon from '../../../public/assets/imgs/brazil.svg'
import { useState } from 'react'
import menuIcon from '../../../public/assets/imgs/menu-icon.svg'
import closeIcon from '../../../public/assets/imgs/close.svg'
import { useRouter } from 'next/router'

const Header = () => {
    const [showMobileMenu, setMobileMenu] = useState(false);
    const router = useRouter();
    const redirectTo = (route: string) => {
        router.push(route)
    };
    const menuItens = [
        {
            pt: "Início",
            href: "/"
        },
        {
            pt: "Sobre",
            href: "/about"
        },
        {
            pt: "Skills",
            href: "/skills"
        },
        {
            pt: "Portfolio",
            href: "/portfolio"
        },

    ]


    return (
        <>
            <header className="header">
                <nav className="header__menu">
                    <Image src={Logo} alt="" width={50} height={50} className="logo" />
                    <ul className="header__menuList">
                        {menuItens.map((item) => {
                            return (

                                <li key={item.pt} className="header__menuItem">
                                    <a href={item.href}>
                                        {item.pt}
                                    </a>
                                </li>
                            )
                        })}
                        <li className="header__menuItem-lang">
                            <button style={{ width: 'auto', backgroundColor: "transparent", border: 'none', cursor: 'pointer', display: "flex", alignItems: "center" }}>
                                <Image src={brazilIcon} alt="pt-bR" width={20} height={20} />
                            </button>

                        </li>
                    </ul>
                </nav>
            </header>

            {
                showMobileMenu &&
                <header className="header__mobile">
                    <nav className="header__menu">
                        <Image src={Logo} alt="Marincor" width={50} height={50} className="logo" />
                        <ul className="header__menuList">
                            {menuItens.map((item) => {
                                return (

                                    <li key={item.pt} className="header__menuItem" onClick={() => {redirectTo(item.href)}}>
                                          {item.pt}
                                    </li>
                                )
                            })}
                        </ul>
                        <button className='btn__language' >
                            <Image src={brazilIcon} alt="pt-bR" width={20} height={20} />
                        </button>
                        <button className='wrapper__btn-close' onClick={() => { setMobileMenu(false) }}>
                            <Image src={closeIcon} alt="menu" width={30} height={30} className="menu_toggle"
                            />
                        </button>
                    </nav>
                </header>
            }

            {
                !showMobileMenu &&
                <nav className='wrapper__menuMobile'>
                    <Image src={Logo} alt="Marincor" width={50} height={50} className="logo_" />
                    <button className='wrapper__btn' onClick={() => { setMobileMenu(true) }}>
                        <Image src={menuIcon} alt="menu" width={30} height={30} className="menu_toggle"
                        />
                    </button>

                </nav>
            }
        </>


    )
}

export default Header;