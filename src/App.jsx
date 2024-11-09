import { Box } from "@mui/material";
import "./App.css";
import CustomLineChart from "./components/Chart";
import BasicTable from "./components/Table";
import { MyProvider } from "./MyContext";

function App() {
	return (
		<MyProvider>
			<Box
				sx={{
					mt: 10,
					mx: 5,
					display: "flex",
					flexDirection: "row",
					gap: 10,
				}}
			>
				<BasicTable />
				<CustomLineChart />
			</Box>
		</MyProvider>
	);
}

export default App;
