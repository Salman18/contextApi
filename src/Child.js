import React,{useContext} from 'react';
import {AppContext} from './App';


function Child(props) {
	// const userContext = useContext(AppContext);
	const {state, increnetAge} = useContext(AppContext);
		return (
		<div>
     {/* <h3>{userContext}</h3> */}
    <h3>Child Component {state.name}</h3>
				<h3>Child Component {state.age}</h3>
				<button onClick={increnetAge}>+Inc</button>
		</div>
);
}

export default Child;
