import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, TextField } from "@mui/material";
import { MyContext } from "../MyContext";

function createData(name, investment, profit, expense, targetProfit) {
	return { name, investment, profit, expense, targetProfit };
}

export default function BasicTable() {
	const {
		budgetName,
		setBudgetName,
		investment,
		setInvestment,
		targetProfit,
		setTargetProfit,
		rows,
		setRows,
	} = React.useContext(MyContext);

	const handleAddRow = (event) => {
		event.preventDefault();
		if (budgetName && investment && targetProfit) {
			const randomIncome = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Random 100 ile 500 arasında değer üretiyor
			const randomExpense = Math.floor(Math.random() * (400 - 50 + 1)) + 50; // 50 ile 400 arasında değer üretiyor

			let profit = randomIncome - randomExpense;
			let calculatedProfit =
				profit > 0 ? profit * 0.25 : profit < 0 ? profit * 0.5 : 0;

			const newRow = createData(
				budgetName,
				parseFloat(investment),
				calculatedProfit.toFixed(2),
				randomExpense,
				parseFloat(targetProfit),
			);

			setRows([...rows, newRow]);

			setBudgetName("");
			setInvestment(0);
			setTargetProfit(0);
		} else {
			alert("Please fill in all fields");
		}
	};

	function handleDeleteRow(index) {
		const newRows = rows.filter((_, i) => i !== index);
		setRows(newRows);
	}

	return (
		<>
			<Box sx={{ width: 600 }}>
				<Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<TextField
							required
							label="Budget Name"
							placeholder="Enter the budget name"
							value={budgetName}
							sx={{ width: 300 }}
							onChange={(e) => setBudgetName(e.target.value)}
						/>
						<Button
							variant="outlined"
							sx={{ py: 2, mt: 2, color: "white", borderColor: "black" }}
							onClick={handleAddRow}
						>
							Save
						</Button>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
						<TextField
							required
							label="Investment (€)"
							value={investment}
							onChange={(e) => setInvestment(e.target.value)}
						/>
						<TextField
							required
							label="Target Profit (€)"
							value={targetProfit}
							onChange={(e) => setTargetProfit(e.target.value)}
						/>
					</Box>
				</Box>
				<TableContainer component={Paper} sx={{ mt: 10, opacity: 0.35 }}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>All Investment </TableCell>
								<TableCell align="center">Investment</TableCell>
								<TableCell align="center">Profit </TableCell>
								<TableCell align="center">Expense </TableCell>
								<TableCell align="center">Target Profit </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, index) => (
								<TableRow key={row.name} onClick={() => handleDeleteRow(index)} sx={{cursor: 'pointer', "&:hover": {backgroundColor: '#f0f0f0'}}}>
									<TableCell component="th" scope="row">
										{index + 1} - {row.name}
									</TableCell>
									<TableCell align="center">{row.investment} €</TableCell>
									<TableCell align="center">{row.profit} €</TableCell>
									<TableCell align="center">{row.expense} €</TableCell>
									<TableCell align="center">{row.targetProfit} €</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</>
	);
}
