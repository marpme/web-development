import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => (
	<header className="App-header logo">
		<Link to="/">
			<div className="logo">
				<img
					className="logo"
					alt="The foobar logo"
					src="images/foobar-logo.png"
				/>
				<h1>
					<p className="subtitle">~ die Bar deines Vertrauens ~</p>
				</h1>
			</div>
		</Link>
		<Link to="/">
			<Button color="info">Homepage</Button>
		</Link>{' '}
		<Link to="/products">
			<Button color="info">Products</Button>
		</Link>{' '}
		<Link to="/contact">
			<Button color="info">Contact us</Button>
		</Link>
	</header>
)
