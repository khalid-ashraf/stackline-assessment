import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import Styles from "../styles";
import LeftBar from "../components/leftBar.tsx";
import ChartContainer from "../components/chartContainer.tsx";
import TableContainer from "../components/tableContainer.tsx";
import { fetchSales } from "../store_modules/sales_module/actions";
import response from "../mock/data.json";
import { ReactComponent as Stackline } from "../assets/stackline_logo.svg";
import salesReducer from "../store_modules/sales_modules/salesReducer";

interface Props {}
const { layout, containers, leftBar, header, stackline_logo } = Styles;

const ProductDetails: FC<Props> = (props) => {
	// const [salesData, setSalesData] = useState<any>(null);

	// async function fetchMyAPI() {
	//   const resp = await fetch('http://example.com/product', {
	//     // request options will go here
	//   });
	//   const data = await response.json();
	//   setSalesData(salesData);
	// }

	useEffect(() => {
		// fetchMyAPI();
		props.fetchSales("http://example.com/product");
	}, []);

	if (props.isFetching) {
		return <div>loading...</div>;
	}
	return (
		<div>
			<div style={header}>
				<Stackline style={stackline_logo} />
			</div>
			<div style={layout}>
				<div style={leftBar}>
					<LeftBar />
				</div>
				<div style={containers}>
					<ChartContainer />
					<TableContainer />
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	fetchSales,
};

const mapStateToProps = ({ salesReducer }) => {
	return salesReducer || {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
