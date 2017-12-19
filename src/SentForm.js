import React from 'react'
import {
	Card,
	CardHeader,
	CardFooter,
	CardBody,
	CardTitle,
	CardText,
} from 'reactstrap'

export default ({ email, name, cocktail, message }) => (
	<Card>
		<CardHeader tag="h3">Deine gesendete Kontaktanfrage</CardHeader>
		<CardBody>
			<CardTitle>Message:</CardTitle>
			{message}
			<CardText />
		</CardBody>
		<CardFooter className="text-muted">
			sent at {new Date().toISOString()} | Email: {email} | Name: {name}
		</CardFooter>
	</Card>
)
