import React from 'react';
import { NavLink } from 'react-router-dom';
import { getButtonIcon } from '../GetIcons';

type TitleButtonType = {
  isArchiv: boolean;
};

// if isArchiv true return backToNotesTable button, else showArchiv button
function TitleButton(props: TitleButtonType): JSX.Element {
  return (
    <th className="th_icon">
      {props.isArchiv ? (
        <NavLink to="/">
          <input type="image" src={getButtonIcon('archiv')} />
          <span> Back </span>
        </NavLink>
      ) : (
        <NavLink to="/archive">
          <input type="image" src={getButtonIcon('archiv')} />
          <span> Show Archive </span>
        </NavLink>
      )}
    </th>
  );
}

export default TitleButton;
