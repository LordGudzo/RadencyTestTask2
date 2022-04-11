import React from "react";
import { getButtonIcon } from "../GetIcons";

type TitleButtonType = {
    isArchiv: boolean
}

//if isArchiv true return backToNotesTable button, else showArchiv button
function TitleButton(props: TitleButtonType) {
    return (
        <th>
            <input type="image" src={getButtonIcon("archiv")}/>
            <span> {props.isArchiv? "back" : "Show Archive"}</span>              
        </th>
    )
}

export default TitleButton;