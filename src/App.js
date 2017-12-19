// @flow

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'
import PageNotFound from './PageNotFound'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					{/* frist row */}
					<div />
					<Header />
					<div />
					{/* second row */}
					<div />
					<Switch>
						<Route
							exact
							path="/web-development/"
							component={Home}
						/>
						<Route
							path="/web-development/products"
							component={Products}
						/>
						<Route
							path="/web-development/contact"
							component={Contact}
						/>
						<Route component={PageNotFound} />
					</Switch>
					<div />
					{/* third row */}
					<div />
					<Footer />
					<div />
				</div>
			</Router>
		)
	}
}

export default App
