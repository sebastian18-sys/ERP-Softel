import React, { useEffect, useState } from 'react'
import { MdDarkMode } from 'react-icons/md'
// import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function ButtonDarkMode() {

  // const [theme, setTheme] = useLocalStorage('item', 'theme' ? 'dark' : 'light')

  // const handleTheme = () => {
  //   console.log("theme.", theme)
  //   const newTheme = theme === 'light' ? 'dark' : 'light'
  //   setTheme(newTheme)
  // }
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  useEffect(() => {
    const color = localStorage.getItem("theme") || null
    if(color == null) {
      localStorage.setItem("theme", "light");
    } else {
      document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
    }
  },[]);

  const handleTheme = () => {;
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  }

  return (
    <div className='navbar__items--item' onClick={handleTheme}>
      <MdDarkMode />
    </div>
  )
}
