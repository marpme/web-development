import React from 'react'
import { Table } from 'reactstrap'
import { products, errors } from './productList.json'
import Product from './Product'
import { chacheRequest } from './api/Caching'
import { allCocktailDetails } from './api/Cocktailing'

export default class Products extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cocktails: products,
		}
	}

	componentDidMount() {
		chacheRequest('cocktails', allCocktailDetails)
			.then(state => this.setState(state))
			.catch(error => this.setState({ cocktails: errors }))
	}

	render() {
		return (
			<div>
				<span>
					<h1>Unsere Produkte:</h1>
					<p className="subtitle">
						Suchen Sie immer noch einen Drink? Hier werden sie
						fündig!
					</p>
				</span>
				<br />
				<Table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Preise</th>
							<th>Beschreibung</th>
						</tr>
					</thead>
					<tbody>
						{this.state.cocktails.map((product, index) => (
							<Product
								key={index}
								index={index + 1}
								{...product}
							/>
						))}
					</tbody>
				</Table>
			</div>
		)
	}
}
