import * as React from "react"
import data from "../../../configs/contentConfig"
import './home.css'
import icon from "../../layout/icon"



const Welcome = () => {
    return (
        <div className="home-container" >
            <div className="flex-container">
                {data.map(item => (
                    console.log(item),
                    <div className="boxflex">
                        <div className="icon">
                            {icon({ name: item.img })}
                        </div>
                        <div className="multi-box" key={item.name}>
                            <h3>{item.name}</h3>
                            <h4>{item.value}</h4>
                        </div>
                    </div>
                ))}
                <div className="box" style={{ backgroundImage: "linear-gradient(to bottom, rgb(34, 34, 34), rgb(85, 85, 85), rgb(34, 34, 34))", opacity: "0.4" }}></div>
            </div>
        </div >)
};


export default Welcome;