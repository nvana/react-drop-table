import React, { PureComponent } from 'react';

type Props = {
	data: Object,
	header: Object
}

class Table extends PureComponent {
	renderWithHeader() {
		const { data, header } = this.props;

		const table = data.map(row => (<tr>{
			header.map(({ name }) => (
				<td>{row[name]}</td>
			))
		}</tr>))
		
		const headerTitles = header.map(({ label }) => (<th>{label}</th>));

		return (
			<table>
				<tr>{headerTitles}</tr>
				{table}
			</table>
		)
	}

	renderWithoutHeader() {
		const { data } = this.props;

		const table = data.map(row => (<tr>{
			Object.keys(row).map(el => (<td>{row[el]}</td>))
		}</tr>))
		return (
			<table>
				{table}
			</table>
		)
	}

	render() {
		const { header = false } = this.props;

		return (
			header ?
				this.renderWithHeader()
				:
				this.renderWithoutHeader()
		)
	}
}

export default Table;