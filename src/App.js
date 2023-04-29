import {useEffect, useState, useRef} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import ButtonBar from "./components/ButtonBar";
import MenuIcon from "./icons/menu";
import HomePage from "./pages/HomePage";
import ConsultingPage from "./pages/ConsultingPage";
import BanksPage from "./pages/BanksPage";
import StatePage from "./pages/StatePage";

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeBar, setActiveBar] = useState(false)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 100)
    }, [])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (<div className='App' style={{
        overflow: activeBar && windowWidth <= 720 ? 'hidden' : '',
        height: activeBar && windowWidth <= 720 ? '100vh' : ''
    }}>

        <header style={{
            width: animate ? '100%' : 0, transition: 'all 1s', opacity: animate ? 1 : 0
        }}>
            <div className={activeBar ? 'active-header' : 'header'}>

                <div className='header-container'>
                    <div className='left-header-container'>
                        <Link to='/' onClick={() => setActiveBar(false)}>
                            <div className='logo'>b2b</div>
                        </Link>
                    </div>
                    <div className='main-header-container'>
                        <div className='main-header-links' style={{opacity: animate ? 1 : 0}}>
                            <Link to="/">
                                <ButtonBar text='Главная'/>
                            </Link>
                            <Link to="/consulting">
                                <ButtonBar  text='Консалтинг'/>
                            </Link>
                            <Link to="/banks">
                                <ButtonBar text='Банки'/>
                            </Link>
                            <Link to="/state">
                                <ButtonBar text='Гос поддержка'/>
                            </Link>
                        </div>
                    </div>
                    <div className='right-header-container' style={{opacity: animate ? 1 : 0}}>
                        <div className='menu-right' onClick={() => setActiveBar(a => !a)}>
                            <MenuIcon color='#fff'/>
                        </div>
                    </div>
                </div>

                <div className={activeBar ? 'top-active-mobile-buttons' : 'top-mobile-buttons'}>
                    <div>
                        <Link to="/" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Главная' menu/>
                        </Link>
                        <Link to="/consulting" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar  text='Консалтинг' menu/>
                        </Link>
                        <Link to="/banks" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Банки' menu/>
                        </Link>
                        <Link to="/state" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Гос поддержка' menu/>
                        </Link>
                    </div>
                </div>

            </div>
        </header>

        <main className='main' style={{paddingTop: activeBar && windowWidth <= 720 ? 71 : 0,
            opacity: animate ? 1 : 0, transition: 'opacity 1s', transitionDelay: '.3s'}}>
            <div className='main-container'>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/consulting" exact element={<ConsultingPage/>}/>
                    <Route path="/banks" exact element={<BanksPage/>}/>
                    <Route path="/state" exact element={<StatePage/>}/>
                </Routes>
            </div>

        </main>
    </div>);
}

export default App;


