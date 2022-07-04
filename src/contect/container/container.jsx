import Navbar from "../navbar/navbar"
import './container.scss'
import MinContainer from "./minContainer"

const Container = ({ children }) =>{
    return(
        <div className="container">
           <Navbar />
           <MinContainer>{children}</MinContainer>
        </div>
    )
}

export default Container