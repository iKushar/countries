import { useEffect, useState } from "react"

function Header() {

    const [isDark , setIsDark] = useState(false)
    const handleChangeTheam = () =>{
         setIsDark(!isDark)
         localStorage.setItem("Dark", !isDark);
         if(isDark){
          document.body.classList.add("dark");
        }else{
          document.body.classList.add("dark");
        }
       
        
    }

    

    useEffect(() =>{
        
        const storedTheme = localStorage.getItem("Dark");
        if(storedTheme == 'true'){
          setIsDark(true)
            document.body.classList.add("dark");
        }else{
          setIsDark(false)
          document.body.classList.remove("dark");
        }
        

    },[isDark])

    

    return (
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="/">Where in the world?</a>
          </h2>
          <p className="theme-changer"  onClick={handleChangeTheam}>
            <i className={(isDark ==false) ? "fa-solid fa-moon}" : "fa-solid fa-sun}"} />
            &nbsp;&nbsp; {(isDark==false) ? "Dark" : "Light"} Mode
          </p>
        </div>
      </header>
    )
  }

  export default Header