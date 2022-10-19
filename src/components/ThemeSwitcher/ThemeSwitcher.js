import useLocalStorage from 'use-local-storage'

import '../../MainStyle/MainStyle.css'


const ThemeSwitcher = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () =>{
        const newTheme = theme === 'light'? 'dark':'light'
        setTheme(newTheme)
    }

    return (
        <div className={theme === 'light'? 'container' :''}>
            <button onClick={switchTheme}>
                switch to {theme === 'light' ? 'dark':'light'} theme
            </button>
        </div>
    );
};

export {ThemeSwitcher};