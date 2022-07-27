import React, { FC, memo } from "react";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { connect } from "react-redux";
import Styles from "../styles";

const { table_container, table, tr, th, padding, sorting_arrow, td } = Styles;

interface TableProps {
	sales: any[];
}

const TableContainer: FC<TableProps> = ({ sales }) => {
	return (
		<div style={table_container}>
			<table style={table}>
				<thead>
					<tr style={tr}>
						{sales &&
							Object.keys(sales[0]).map((item) => {
								return (
									<th key={item} style={{ ...th, ...padding }}>
										{item.toUpperCase()}
										<Arrow style={sorting_arrow} />
									</th>
								);
							})}
					</tr>
				</thead>
				<tbody>
					{sales &&
						sales.map((item) => {
							return (
								<tr key={item.retailerMargin} style={tr}>
									{Object.entries(item).map(([key, value]) => {
										return (
											<td key={value} style={{ ...td, ...padding }}>
												{key === "wholesaleSales" ||
												key === "retailSales" ||
												key === "retailerMargin"
													? `$${value}`
													: value}
											</td>
										);
									})}
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};
const mapStateToProps = ({ salesReducer }) => {
	return salesReducer.data[0] || {};
};
export default connect(mapStateToProps, null)(memo(TableContainer));
