import React from "react";
import { getButtonIcon } from "../GetIcons";
import { NavLink } from 'react-router-dom';

type TitleButtonType = {
    isArchiv: boolean
}

//if isArchiv true return backToNotesTable button, else showArchiv button
function TitleButton(props: TitleButtonType) {
    return (
        <th>
            { props.isArchiv 
            ?   <NavLink to={"/"}> 
                <input type="image" src={getButtonIcon("archiv")}/>
                <span> Back </span> 
                </NavLink>

            :   <NavLink to={"/archive"}> 
                <input type="image" src={getButtonIcon("archiv")}/>
                <span> Show Archive </span> 
                </NavLink>
            }

        </th>
    )
}

export default TitleButton;