import React from "react";
import { getButtonIcon } from "../../GetIcons"

type BodyButtonsType = {
    isArchive: boolean;
}

function BodyButtons(props: BodyButtonsType) {
    return(
        <td>
            {props.isArchive ? "" : <input type="image" src={getButtonIcon("edit")}/>}
            {<input type="image" src={getButtonIcon("archiv")}/>}
            {props.isArchive ? "" : <input type="image" src={getButtonIcon("delete")}/>}
        </td>
    )
}

export default BodyButtons;