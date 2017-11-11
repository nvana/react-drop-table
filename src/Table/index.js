import React, { PureComponent } from "react";

class Table extends PureComponent {

	renderWithHeader() {
		const { data, header } = this.props;

		const table = data.map(row => (
			<tr key={row}>{
				header.map(({ name }) => (
					<td key={name}>
						{row[name]}
					</td>
				))
			}
			</tr>));

		const headerTitles = header.map(({ label }) => (<th key={label}>{label}</th>));

		return (
			<table>
				<tr>{headerTitles}</tr>
				{table}
			</table>
		);
	}

	renderWithoutHeader() {
		const { data } = this.props;

		const table = data.map(row => (
			<tr key={row}>{
				Object.keys(row).map(el => (<td key={el}>{row[el]}</td>))
			}
			</tr>));

		return (
			<table>
				{table}
			</table>
		);
	}

	render() {
		const { header = false } = this.props;

		return (
			header ?
				this.renderWithHeader()
				:
				this.renderWithoutHeader()
		);
	}
}

export default Table;
