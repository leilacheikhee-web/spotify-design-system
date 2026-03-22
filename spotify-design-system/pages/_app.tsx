import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useState, useEffect } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);
  return <div className={darkMode ? 'dark' : ''}><Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} /></div>;
}
