import React, {useState} from "react";

const Tabs = ({tabs}) =>{
    let[clickedTab, setClickedTab] = useState("");


    return(
        <div className="tabs">
            <ul>
                <li onClick = {() => setClickedTab("Tab 1")}>Tab 1</li>
                <li onClick = {() => setClickedTab("Tab 2")}>Tab 2</li>
                <li onClick = {() => setClickedTab("Tab 3")}>Tab 3</li>
            </ul>
            <p>This is the content for {clickedTab}.</p>

        </div>
    )
}
export default Tabs;