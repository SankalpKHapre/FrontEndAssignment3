import React from "react";
 
export default function Child({ username, onAction }) {
  return (
    <div style={{ marginTop: 12, padding: 12, border: "1px dashed #aaa" }}>
      <h4>Child</h4>
      <p>Received from parent: <b>{username}</b></p>
 
      <button onClick={() => onAction(`Hi ${username}, button clicked!`)}>
        Notify Parent
      </button>
    </div>
  );
}
 