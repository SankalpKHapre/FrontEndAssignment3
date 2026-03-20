 
// 4.This React code snippet that uses multiple useStates (loading/data/error/query etc.). 
// Please refactor it to use useReducer. 
// Also tell me where you would write the reducer function and why
import React, { useEffect, useReducer} from "react";
export default function TodoSearchPage() {

    
  
  const intitialState = {
      query:"",
      page:1,
      data:[],
      loading:false,
      error:""
    }
    const [state,dispatch] = useReducer(reducer,initialState)

    function reducer(state,action){
        switch(action.type){

            case "SET_QUERY": return{...state,query:action.payload}
            case "SET_PAGE": return{...state,page:action.payload}
            case "FETCH_START": return{...state,loading:true,error:""}
            case "FETCH_SUCCESS": return {...state,data:action.payload,loading:false}
            case "FETCH_ERROR": return{...state,error:action.payload,loading:false}
            default: return state
        }


    }

  useEffect(() => {
    let cancelled = false;
    async function fetchTodos() {
      try {
        dispatch({type:"FETCH_START"})
        const res = await fetch(`/api/todos?q=${encodeURIComponent(state.query)}&page=${state.page}`);
        const json = await res.json();
        if (!cancelled) dispatch({type:"FETCH_SUCCESS",payload:json.todos?? []});
      } catch (e) {
        if (!cancelled) dispatch({type:"FETCH_ERROR",payload: e?.message || "Failed to fetch"});
      }
    }
    fetchTodos();
    return () => { cancelled = true; };
  }, [state.query,state.page]);

  
  return (
    <div>
      <input
        value={state.query}
        onChange={(e) => dispatch({type:"SET_QUERY",payload:e.target.value})}
        placeholder="Search todos"
      />
      <button onClick={() => dispatch({type:"SET_PAGE",payload:state.page+1})}>Next Page</button>
 
      {state.loading && <p>Loading…</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      <ul>
        {state.data.map(t => <li key={t.id}>{t.todo}</li>)}
      </ul>
    </div>
  );
}
 

