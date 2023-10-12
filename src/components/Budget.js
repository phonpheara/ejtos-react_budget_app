import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
	const { budget, expenses, dispatch, currency } = useContext(AppContext);
	const [newBudget, setNewBudget] = useState(budget);
	const handleBudgetChange = (event) => {
		const updatedBudget = parseInt(event.target.value);

		// Check if the updated budget is greater than or equal to the total amount spent
		const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
		if (updatedBudget >= totalExpenses) {
			setNewBudget(updatedBudget);
			dispatch({ type: "SET_BUDGET", payload: updatedBudget });
		} else {
			alert("Cannot set budget lower than total expenses!");
		}
	};
	return (
		<div className='alert alert-secondary'>
			<span>
				Budget: {currency}
				{budget}
			</span>
			<input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
		</div>
	);
};
export default Budget;
