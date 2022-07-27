import React, { FC, memo } from "react";
import { connect } from "react-redux";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import Styles from "../styles";

const { chart_container, h3 } = Styles;

interface ChartProps {
	sales: string[];
}

const ChartContainer: FC<ChartProps> = ({ sales }) => {
	return (
		<div style={chart_container}>
			<h3 style={h3}>Retail Sales</h3>
			<ResponsiveContainer width='100%' height='100%'>
				<LineChart
					data={sales}
					margin={{
						top: 50,
						right: 30,
						left: 20,
						bottom: 40,
					}}>
					<XAxis dataKey='weekEnding' />
					<YAxis hide={true} padding={{ top: 150, bottom: 150 }} />
					<Tooltip />
					<Line
						type='monotone'
						dataKey='retailSales'
						stroke='rgb(76, 173, 247)'
						activeDot={{ r: 8 }}
						strokeWidth={2}
						dot={false}
					/>
					<Line
						type='monotone'
						dataKey='retailerMargin'
						strokeWidth={2}
						stroke='rgb(136, 139, 147)'
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

const mapStateToProps = ({ salesReducer }) => {
	return salesReducer.data[0] || {};
};

export default connect(mapStateToProps, null)(memo(ChartContainer));
