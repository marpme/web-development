const translate = id => {
	switch (id) {
		case 'drink':
			return 'Drink'
		case 'user_mail':
			return 'E-Mail'
		case 'user_message':
			return 'Incoming Message'
	}
}

document.addEventListener('DOMContentLoaded', function(event) {
	console.log('DOM fully loaded and parsed')
	const params = location.search
		.split('&')
		.map(item => item.replace('?', '').split('='))

	if (params.length > 1) {
		// const parent = document.getElementById('content')
		const removeable = document.getElementById('myform')
		const child = document.getElementById('info')

		const elements = params
			.map(param => {
				const newChild = document.createElement('p')
				const node = document.createTextNode(
					`${translate(param[0])}: ${decodeURIComponent(param[1])}`
				)
				newChild.appendChild(node)
				return newChild
			})
			.forEach(node => child.appendChild(node))

		removeable.parentNode.removeChild(removeable)
	}
})
