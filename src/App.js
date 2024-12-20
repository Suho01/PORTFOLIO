import './App.css';
import Intro from './components/Intro';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { toggleTheme } from "./store";
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import GoTop from './components/GoTop';
import Loading from './pages/Loading';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);
    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <Provider store={store}>
                        <Inner />
                        <Nav />
                        <Intro />
                        <Aboutme />
                        <Projects />
                        <Skills />
                        <Footer />
                        <GoTop />
                    </Provider>
                )
            }
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
