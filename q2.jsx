
// Parent.jsx
import React, { useState } from "react";
import Child from "./Child";
 
export default function Parent() {
  const [username, setUsername] = useState("React");
  const [log, setLog] = useState([]);
 
  function handleChildAction(action) {
    setLog(prev => [...prev, `Child said: ${action}`]);
  }
  return (
    <div style={{ padding: 12, border: "1px solid #ddd" }}>
      <h3>Parent</h3>
      <p><b>username (state in parent):</b> {username}</p>
      <label>
        Edit username in Parent:{" "}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="type name"
        />
      </label>
      <Child username={username} onAction={handleChildAction} />
      <h4>Log</h4>
      <ul>
        {log.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
    </div>
  );
}
 
/*
The parent component is communicating with the child component through the props passed down in the child 
component like the username and the handleChildAction function.The child extracts the props passed to it
and then is able to use them in its component but the request comes to the parent component when the 
handle function is called, the child component can only read these variables and call them cannot edit these
props passed so when it calls handleChildaction it is still being executed in the parent and the state variable
is being changed in/or edited in the parent component.
The advantages are the fact that the code gets easier to manage all the components remain separate and only the required
variables/functions can be passed to the child component
the disadvantage is that when the child components gets a another component under itand the props are now bein passed
fro the parent component to the granchild component then prop drilling occurs which is a nightmare to figure out when
and where each prop is going



 "what are the possible ways, advantages/disadvantages of each", a complete answer would include:

Props — which you explained well ✅
Lifting state up — you touched on it indirectly but didn't name it
Context API — not mentioned
External state (Redux/Zustand) — not mentioned, but this one is optional depending on how deep the question expects you to go
*/