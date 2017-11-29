import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    Progress,
} from 'reactstrap'
import { chacheRequest } from './api/Caching'
import { allCocktailDetails } from './api/Cocktailing'
import SentForm from './SentForm'

export default class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cocktails: [],
            form: {
                email: '',
                name: '',
                cocktail: '',
                message: '',
            },
            submitted: false,
            progress: false,
        }
    }

    componentDidMount() {
        chacheRequest('cocktails', allCocktailDetails)
            .then(({ cocktails }) => cocktails.map(c => c.name))
            .then(cocktails => this.setState({ cocktails }))
    }

    onSubmitEvent(event) {
        event.preventDefault()
        this.setState({ progress: true })
        setTimeout(() => {
            this.setState({ submitted: true, progress: false })
        }, 1500)
    }

    handleEmailChange(event) {
        this.setState({
            form: {
                ...this.state.form,
                email: event.target.value,
            },
        })
    }

    handleNameChange(event) {
        this.setState({
            form: {
                ...this.state.form,
                name: event.target.value,
            },
        })
    }

    handleCocktailChange(event) {
        this.setState({
            form: {
                ...this.state.form,
                cocktail: event.target.selectedIndex,
            },
        })
    }

    handleMessageChange(event) {
        this.setState({
            form: {
                ...this.state.form,
                message: event.target.value,
            },
        })
    }

    render() {
        const { email, name, cocktail, message } = this.state.form

        if (this.state.submitted) {
            return (
                <div>
                    <Alert color="success">
                        Super, ihre Nachricht wurde an uns versandt! <br />Und
                        wird in den nächsten Stunden bearbeitet. Vielen Dank für
                        ihr Interesse!
                    </Alert>
                    <SentForm {...this.state.form} />
                </div>
            )
        }

        return (
            <div className="contact-form">
                <span>
                    <h1>Kontaktieren Sie uns:</h1>
                    <p className="subtitle">
                        Hier können sie uns zu allen dingen gern kontaktieren!
                    </p>
                </span>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Dein Name:</Label>
                        <Input
                            type="name"
                            name="name"
                            id="nameInput"
                            placeholder="Dein Namen"
                            onChange={this.handleNameChange.bind(this)}
                            value={name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Deine E-Mail-Adresse:</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="Deine E-Mail-Adresse"
                            onChange={this.handleEmailChange.bind(this)}
                            value={email}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Wähle ein Produkt aus:{' '}
                        </Label>
                        <Input
                            type="select"
                            name="select"
                            id="CocktailSelect"
                            value={cocktail}
                            onChange={this.handleCocktailChange.bind(this)}
                        >
                            {this.state.cocktails.map((c, index) => (
                                <option key={c} value={index}>
                                    {c}
                                </option>
                            ))}
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Nachricht:</Label>
                        <Input
                            type="textarea"
                            name="text"
                            id="volltext"
                            placeholder="Deine Nachricht an uns ..."
                            value={message}
                            onChange={this.handleMessageChange.bind(this)}
                        />
                    </FormGroup>
                    {this.state.progress ? (
                        <div>
                            <Progress animated value="100" />
                            Deine Nachricht wird versandt ...
                        </div>
                    ) : (
                        <Button onClick={this.onSubmitEvent.bind(this)}>
                            Submit
                        </Button>
                    )}
                </Form>
            </div>
        )
    }
}
