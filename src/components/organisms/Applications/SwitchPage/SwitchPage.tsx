/* Switch Page Component (Mainly used at applications page) */

/* Styles Imports */
import { useState } from "react"
import { SwitchPageStyles } from "./SwitchPage.styled"




const SwitchPage = () => {

  const [yourApplications, setYourApplications] = useState(true)
  const [modApplications, setModApplications] = useState(false)


  const handleYourApplications = () => {
    yourApplications === false ? setYourApplications(true) : setYourApplications(true)
    modApplications === true && setModApplications(false)
    
    console.log("Your Applications = " + yourApplications)
    console.log("Mod Applications = " + modApplications)
  }

  const handleModApplications = () => {
    modApplications === false ? setModApplications(true) : setModApplications(true)
    yourApplications === true && setYourApplications(false)
    
    console.log("Your Applications = " + yourApplications)
    console.log("Mod Applications = " + modApplications)

  }

  return (
    <SwitchPageStyles>
      <div className={`switch ${yourApplications ? "active" : ""}`} onClick={handleYourApplications}>
        Suas aplicações
      </div>
      <div className={`switch ${modApplications ? "active" : ""}`} onClick={handleModApplications}>
        Aplicações que você modera
      </div>
    </SwitchPageStyles>
  )
}

export default SwitchPage