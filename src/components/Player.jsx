import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // 상태 업데이트를 함수를 통해서 하지 않은 아래의 두 줄 => 예상 밖의 결과! (상태값 업데이트가 즉각적이지 않음!)
    // setIsEditing(!isEditing); => schedules a state update to true
    // setIsEditing(!isEditing); => false? NO! shecules a state update to true
    setIsEditing((editing) => !editing); // **함수 형태로 상태값 업데이트해야함!!**
    // setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      {/* <button onClick={handleEditClick}>{btnCaption}</button> */}
    </li>
  );
}
