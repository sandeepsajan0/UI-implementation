import * as React from "react"
import data from "../../../configs/contentConfig"
import './home.css'
import icon from "../../layout/icon"



interface WelcomeProps {
    uses?: string, // Change the required prop to an optional prop.
    implements?: string,
    openSource?: string,
    session?: string,
    complexity?: string,
    scraping?: string
}


const Welcome: React.FC<WelcomeProps> = (props) => {


    return (<div>
        <div className="home-container">
            <div className="flex-container">
                <div className="boxflex">
                    <div className="icon">
                        {icon({ name: "easeOfUse.png" })}
                    </div>
                    <div className="multi-box">
                        <h3> Easy to use and understand</h3>
                        <h4>{data.uses}</h4>
                    </div>
                </div>
                <div className="vertical-box" style={{ backgroundImage: "linear-gradient(to bottom, rgb(34, 34, 34), rgb(85, 85, 85), rgb(34, 34, 34))", opacity: "0.4" }}></div>
                <div className="boxflex">
                    <div className="icon">
                        {icon({ name: "openSource.png" })}
                    </div>
                    <div className="multi-box">
                        <h3> Open Source</h3>
                        <h4>{data.openSource}</h4>
                    </div>
                </div>
            </div>

            <div className="box" style={{ backgroundImage: "linear-gradient(to right, rgb(34, 34, 34), rgb(85, 85, 85), rgb(34, 34, 34))", opacity: "0.4" }}></div>

            <div className="flex-container">
                <div className="boxflex">
                    <div className="icon">
                        {icon({ name: "endToEnd.png" })}
                    </div>
                    <div className="multi-box">
                        <h3> End-to-end implementation</h3>
                        <h4>{data.implementation}</h4>
                    </div>
                </div>
                <div className="vertical-box" style={{ backgroundImage: "linear-gradient(to bottom, rgb(34, 34, 34), rgb(85, 85, 85), rgb(34, 34, 34))", opacity: "0.4" }}></div>
                <div className="boxflex">
                    <div className="icon">
                        {icon({ name: "longSession.png" })}
                    </div>
                    <div className="multi-box">
                        <h3> Long lived sessions</h3>
                        <h4>{data.session}</h4>
                    </div>
                </div>

            </div>
            <div className="box" style={{ backgroundImage: "linear-gradient(to right, rgb(34, 34, 34), rgb(85, 85, 85), rgb(34, 34, 34))", opacity: "0.4;" }}></div>
            <div className="flex-container">
                <div className="boxflex">
                    <div className="icon">
                        {icon({ name: "spaceComplex.png" })}
                    </div>
                    <div className="multi-box">
                        <h3> Optimal Time and Space Complexity</h3>
                        <h4>{data.complexity}</h4>
                    </div>
                </div>
                <div className="vertical-box" style={{ backgroundImage: "linear-gradient(to bottom, rgb(34, 34, 34), rgb(85, 85, 85), rgb(34, 34, 34))", opacity: "0.4" }}></div>
                <div className="boxflex">
                    <div className="icon">
                        {icon({ name: "scraping.png" })}
                    </div>
                    <div className="multi-box">
                        <h3> Prevents unwanted data scraping.</h3>
                        <h4>{data.scraping}</h4>
                    </div>
                </div>
            </div>
            <div className="box" style={{ backgroundImage: "linear-gradient(to right, rgb(34, 34, 34), rgb(85, 85, 85), rgb(34, 34, 34))", opacity: "0.4;" }}></div>
        </div>
    </div >);
}
Welcome.defaultProps = {
    uses: data.uses, // This value is adopted when name prop is omitted.
    implements: data.implementation
}

export default Welcome;