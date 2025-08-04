'use client';
import { FiSun, FiMoon } from 'react-icons/fi';

import {useEffect, useState} from 'react';

export default function ToggleTheme() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => { //useEffect to set the site's theme when the variable "theme" changes
        document.documentElement.className = theme;
    },[theme]);

    return (
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded w-[200px] flex items-center gap-4"
        >
            {theme === 'dark' ? <FiMoon />  : <FiSun /> }
            {theme === 'dark' ? ' Light Mode' : ' Dark Mode'}
        </button>
    )
}