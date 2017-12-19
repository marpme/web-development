import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => (
	<header className="App-header logo">
		<Link to="/web-development/">
			<div className="logo">
				<img
					className="logo"
					alt="The foobar logo"
					src="https://i.imgur.com/HkRqWDD.png"
				/>
				<h1>
					<p className="subtitle">~ die Bar deines Vertrauens ~</p>
				</h1>
			</div>
		</Link>
		<Link to="/web-development/">
			<Button color="info">Homepage</Button>
		</Link>{' '}
		<Link to="/web-development/products">
			<Button color="info">Products</Button>
		</Link>{' '}
		<Link to="/web-development/contact">
			<Button color="info">Contact us</Button>
		</Link>
	</header>
)
