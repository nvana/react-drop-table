import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table";

//Entry datas
const fakeData = [
	{
		"balance": "$3,096.60",
		"picture": "http://placehold.it/32x32",
		"age": 40,
		"eyeColor": "blue",
		"name": "Romero Thomas",
		"gender": "male",
		"company": "EMTRAK",
		"email": "romerothomas@emtrak.com"
	},
	{
		"balance": "$2,160.73",
		"picture": "http://placehold.it/32x32",
		"age": 32,
		"eyeColor": "blue",
		"name": "Manuela Guerra",
		"gender": "female",
		"company": "NEXGENE",
		"email": "manuelaguerra@nexgene.com"
	},
	{
		"balance": "$2,712.73",
		"picture": "http://placehold.it/32x32",
		"age": 29,
		"eyeColor": "brown",
		"name": "Alexander Foley",
		"gender": "male",
		"company": "FROSNEX",
		"email": "alexanderfoley@frosnex.com"
	},
	{
		"balance": "$1,490.28",
		"picture": "http://placehold.it/32x32",
		"age": 39,
		"eyeColor": "blue",
		"name": "Amparo Copeland",
		"gender": "female",
		"company": "KOFFEE",
		"email": "amparocopeland@koffee.com"
	},
	{
		"balance": "$2,975.49",
		"picture": "http://placehold.it/32x32",
		"age": 21,
		"eyeColor": "blue",
		"name": "Margery Wagner",
		"gender": "female",
		"company": "ILLUMITY",
		"email": "margerywagner@illumity.com"
	},
	{
		"balance": "$2,513.41",
		"picture": "http://placehold.it/32x32",
		"age": 20,
		"eyeColor": "blue",
		"name": "Janis Rodriguez",
		"gender": "female",
		"company": "BOSTONIC",
		"email": "janisrodriguez@bostonic.com"
	}
];

const header = [
	{
		name: "name",
		label: "Nom"
	},
	{
		name: "company",
		label: "Entreprise"
	},
	{
		name: "email",
		label: "Email"
	}
];

const app = document.getElementById("app");

ReactDOM.render(
	<Table
		data={fakeData}
		header={header}
	/>
	, app);
