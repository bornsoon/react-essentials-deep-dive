import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    // 상태 업데이트를 함수를 통해서 하지 않은 아래의 두 줄 => 예상 밖의 결과! (상태값 업데이트가 즉각적이지 않음!)
    // setIsEditing(!isEditing); => schedules a state update to true
    // setIsEditing(!isEditing); => false? NO! shecules a state update to true
    setIsEditing((editing) => !editing); // **함수 형태로 상태값 업데이트해야함!!**
    // setIsEditing((editing) => !editing);
    if (isEditing) {
      // isEditing === truthy => Save 누
      onChangeName(symbol, playerName);
    }
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

  // playerName 상태를 끌어올리면 (App으로 보내면)
  // input이 발생할 때마다 App에 있는 요소들이 수시로 재평가됨

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
