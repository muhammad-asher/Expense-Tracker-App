import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial state
const initialstate = {
	transactions: [
		{ id: 1, text: "Flower", amount: -20 },
		{ id: 2, text: "Salary", amount: 300 },
		{ id: 3, text: "Book", amount: -10 },
		{ id: 4, text: "Camera", amount: 150 },
	],
};
export const GlobalContext = createContext(initialstate);

//Provider

export const GlobalProvider = (childern) => {
	const [state, dispatch] = useReducer(AppReducer, initialstate);
	return (
		<GlobalContext.Provider value={{ transactions: state.transactions }}>
			{childern}
		</GlobalContext.Provider>
	);
};
