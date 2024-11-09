import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { MyContext } from "../MyContext";

export default function CustomLineChart() {
	const { rows } = React.useContext(MyContext);
	const xAxisData = rows.length > 0 ? rows.map((row, index) => index + 1) : [1];

	const profitData = rows.length > 0 ? rows.map((row) => row.profit) : [0];
	const expenseData = rows.length > 0 ? rows.map((row) => row.expense) : [0]; 
	const investmentData =
		rows.length > 0 ? rows.map((row) => row.investment) : [0]; 

	return (
		<LineChart
			xAxis={[{ data: xAxisData }]}
			series={[
				{
					name: "Profit",
					data: profitData,
					valueFormatter: (value) => (value == null ? "0" : value.toString()),
				},
				{
					name: "Expense",
					data: expenseData,
					valueFormatter: (value) => (value == null ? "0" : value.toString()),
				},
				{
					name: "Investment",
					data: investmentData,
					valueFormatter: (value) => (value == null ? "0" : value.toString()),
				},
			]}
			width={700}
			height={200}
			margin={{ top: 10, bottom: 20 }}
		/>
	);
}
