import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [statusInput, setStatusInput] = useState(props.status);
  const editStatus = () => {
    setEditMode(true);
  };
  const disableEditMode = () => {
    setEditMode(false);
    props.updateStatusThunk(statusInput);
  };
  const handleChanger = (e) => {
    setStatusInput(e.target.value);
  };

  useEffect(() => {
    setStatusInput(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode && (
        <div>
          <h4 onClick={editStatus}>{props.status || "no status"}</h4>
        </div>
      )}

      {editMode && (
        <div>
          <input
            value={statusInput}
            autoFocus={true}
            onBlur={disableEditMode}
            onChange={handleChanger}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
