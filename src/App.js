import './App.css';
import Intro from './components/Intro';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { toggleTheme } from "./store";
import { useEffect } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import GoTop from './components/GoTop';
import { Route, Routes } from 'react-router-dom';

function App() {
    
    return (
        <>
            <Provider store={store}>
                <Inner />
                <Nav />
                <Intro />
                <Aboutme />
                <Projects />
                <Skills />
                <Footer />
                <GoTop />
                <Routes>
                    <Route path='/' element={<Intro />}></Route>
                    <Route path='/aboutme' element={<Aboutme />}></Route>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path='/skills' element={<Skills />}></Route>
                    <Route path='/contact' element={<Footer />}></Route>
                </Routes>
            </Provider>
        </>
    );
}

function Inner() {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.dark);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme && savedTheme !== darkMode) {
            dispatch(toggleTheme());
        }
    }, [dispatch]);

    useEffect(() => {
        if (darkMode === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("theme");
        }
    }, [darkMode]);
}

export default App;
