const Styles = {
	// Landing Page Styles
	layout: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#f5f5f5",
		padding: "3.125rem 1.25rem",
		width: "100%",
		boxSizing: "border-box",
	},

	leftBar: {
		backgroundColor: "#ffffff",
		display: "flex",
		flexDirection: "column",
		width: "20%",
		marginRight: "1.25rem",
		boxSizing: "border-box",
	},

	containers: {
		display: "flex",
		flexDirection: "column",
		width: "80%",
	},

	//Header
	header: {
		backgroundColor: "#052849",
		height: "4.5rem",
		display: "flex",
		alignItems: "center",
	},

	stackline_logo: { height: "2rem", paddingLeft: "1rem" },

	//Leftbar Component Styles
	leftbar_container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "1.563rem 0",
	},

	subTitle: {
		padding: "0.625rem 0",
		color: "#B8B8B8",
		textAlign: "center",
		padding: "2.188rem",
	},

	img: {
		width: "12.5rem",
		height: "12.5rem",
	},
	h2: {
		textAlign: "center",
	},

	tagSection: {
		display: "flex",
		flexWrap: "wrap",
		height: "min-content",
		gap: "0.625rem",
		padding: "1.25rem 1.875rem",
		borderWidth: "1px 0px",
		borderStyle: "solid",
		borderColor: "#e1e1e1",
	},

	tags_children: {
		listStyleType: "none",
		border: "1px solid #B8B8B8",
		borderRadius: "0.313rem",
		padding: "0.125rem 0.75rem",
		color: "#B8B8B8",
	},

	// TableContainer Component Styles
	table_container: {
		backgroundColor: "#ffffff",
		height: "auto",
	},

	sorting_arrow: {
		width: "0.5rem",
		height: "0.5rem",
		position: "relative",
		left: "0.313rem",
		bottom: "1px",
		opacity: "50%",
	},

	table: {
		width: "100%",
		textAlign: "center",
		borderCollapse: "collapse",
		fontSize: "0.875rem",
	},

	tr: {
		borderBottom: "0.5px solid #C3C5C6",
	},

	th: {
		color: "#687F94",
		fontWeight: "400",
	},

	td: {
		color: "#C4C4C4",
	},

	padding: {
		padding: "0.625rem",
	},

	// ChartContainer Component Styles
	chart_container: {
		height: "37.5rem",
		backgroundColor: "#ffffff",
		marginBottom: "3.125rem",
	},

	h3: {
		position: "relative",
		top: "1.25rem",
		left: "1.25rem",
	},
};

export default Styles;
