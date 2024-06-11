import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './contexts/ThemeContext'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = ()=> {
    setThemeMode("dark");
  }

  const lightMode = ()=> {
    setThemeMode("light")
  }

  useEffect(()=> {
    var classList = document.querySelector('html').classList;
    classList.remove("light", "dark");
    classList.add(themeMode);

  }, [themeMode])

  return (

    <ThemeContextProvider value={{themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
