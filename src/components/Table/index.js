import React, { PureComponent } from "react";
import "../../assets/css/style.less";

class Table extends PureComponent {

	handleAllowDrop = (ev) => {
		ev.target.parentNode.className = "hover";
		ev.preventDefault();
	}

	handleLeave = (ev) => {
		ev.target.parentNode.className = "initial";
		ev.preventDefault();
	}

	handleDrag = (ev) => {
		this.setState({ dragId: ev.target.id });
		ev.target.style.opacity = 0.3;
	}

	handleDrop = (ev) => {
		const { onDragAction } = this.props;

		ev.target.parentNode.className = "initial";

		onDragAction(this.state.dragId , ev.target.parentNode.id);

		ev.preventDefault();
	}

	handleDragEnd(ev) {
		ev.target.style.opacity = 1;
		ev.preventDefault();
	}

	renderWithHeader() {
		const { data, header } = this.props;

		const table = data.map((row, i) => (
			<tr
				draggable="true"
				id={i}
				key={i}
				onDragEnd={this.handleDragEnd}
				onDragLeave={this.handleLeave}
				onDragOver={this.handleAllowDrop}
				onDragStart={this.handleDrag}
				onDrop={this.handleDrop}
			>
				{
					header.map(({ name }) => (
						<td key={name}>
							{row[name]}
						</td>
					))
				}
			</tr>));

		const headerTitles = header.map(({ label }) => (
			<th key={label}>
				{label}
			</th>
		));

		return (
			<table>
				<tr>{headerTitles}</tr>
				{table}
			</table>
		);
	}

	renderWithoutHeader() {
		const { data } = this.props;

		const table = data.map((row, i) => (
			<tr
				draggable="true"
				id={i}
				key={row}
				onDragEnd={this.handleDragEnd}
				onDragLeave={this.handleLeave}
				onDragOver={this.handleAllowDrop}
				onDragStart={this.handleDrag}
				onDrop={this.handleDrop}
			>
				{
					Object.keys(row).map(el => (
						<td key={el}>
							{row[el]}
						</td>))
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
