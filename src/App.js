import {useEffect, useState} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import ButtonBar from "./components/ButtonBar";
import MenuIcon from "./icons/menu";
import HomePage from "./pages/HomePage";
import DisabledPeoplePage from "./pages/DisabledPeoplePage";

export default function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeBar, setActiveBar] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenu = () => {
        window.scrollTo(0, 0);
        setActiveBar(a => !a);
    }

    return (<div className='App'>
        <header>
            <div className={activeBar ? 'active-header' : 'header'}>

                <div>
                    <div className='left-header-container'>
                        <Link to='/' onClick={() => setActiveBar(false)}>
                            <div className='logo'>
                                <img height={100} width={100} style={{objectFit: 'cover'}}
                                     src={require('./images/logo.jpg')}
                                     alt="logo"/>
                                <div style={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 120
                                }}>
                                    <div className="h1-title" style={{
                                        marginLeft: 20, fontSize: 30, overflow: 'visible', lineHeight: '25px'
                                    }}>Инклюзивная платформа
                                    </div>
                                    <div className="h1-title" style={{
                                        marginLeft: 20,
                                        fontSize: 30,
                                        overflow: 'visible',
                                        lineHeight: '25px',
                                        color: '#47436B'
                                    }}>"Особенная среда"
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='header-container'>
                    <div className='main-header-container'>
                        <div className='main-header-links'>
                            <Link to="/">
                                <ButtonBar text='Гражданам'/>
                            </Link>
                            <Link to="/">
                                <ButtonBar text='Работодателям'/>
                            </Link>
                            <Link to="/">
                                <ButtonBar text='Служба занятости'/>
                            </Link>
                            <Link to="/">
                                <ButtonBar text='Информация'/>
                            </Link>
                            <Link to="/">
                                <ButtonBar text='Войти через гос услуги'/>
                            </Link>
                        </div>
                    </div>
                    <div className='right-header-container'>
                        <div className='menu-right' onClick={handleMenu}>
                            <MenuIcon color='#fff'/>
                        </div>
                    </div>
                </div>

                <div className={activeBar ? 'top-active-mobile-buttons' : 'top-mobile-buttons'}>
                    <div>
                        <Link to="/" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Гражданам' menu/>
                        </Link>
                        <Link to="/" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Работодателям' menu/>
                        </Link>
                        <Link to="/" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Служба занятости' menu/>
                        </Link>
                        <Link to="/" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Информация' menu/>
                        </Link>
                        <Link to="/" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Войти через гос услуги' menu/>
                        </Link>
                    </div>
                </div>

            </div>
        </header>

        <main className='main' style={{
            paddingTop: activeBar && windowWidth <= 820 ? 211 : 0,
        }}>
            <div className='main-container'>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/disabled-people" exact element={<DisabledPeoplePage/>}/>
                </Routes>
            </div>

        </main>
    </div>);
}


