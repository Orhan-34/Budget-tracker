import React, { createContext } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
	const [budgetName, setBudgetName] = React.useState("");
	const [investment, setInvestment] = React.useState(0);
	const [targetProfit, setTargetProfit] = React.useState(0);
	const [rows, setRows] = React.useState([]);

	return (
		<MyContext.Provider
			value={{
				budgetName,
				setBudgetName,
				investment,
				setInvestment,
				targetProfit,
				setTargetProfit,
				rows,
				setRows,
			}}
		>
            {children}
        </MyContext.Provider>
	);
};
