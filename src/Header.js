import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => (
	<div>
		<header className="App-header">
			<div className="logo">
				<Link to="/web-development/">
					<img
						className="logo"
						alt="The foobar logo"
						src="https://i.imgur.com/HkRqWDD.png"
					/>
				</Link>
			</div>
			<Link to="/web-development/">
				<Button id="home" color="info">
					<span>Homepage</span>
				</Button>
			</Link>{' '}
			<Link to="/web-development/products">
				<Button id="products" color="info">
					<span>Products</span>
				</Button>
			</Link>{' '}
			<Link to="/web-development/contact">
				<Button id="contact" color="info">
					<span>Contact us</span>
				</Button>
			</Link>
			<br />
		</header>
		<h1 className="subtitle">~ die Bar deines Vertrauens ~</h1>
	</div>
)
