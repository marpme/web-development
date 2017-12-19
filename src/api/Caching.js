export const chacheRequest = (id, fetchPromised) => {
	return new Promise((res, rej) => {
		if (localStorage.getItem(id)) {
			return res({
				cocktails: JSON.parse(localStorage.getItem(id)),
			})
		} else {
			const fetchedPromise = fetchPromised().then(values => {
				localStorage.setItem(id, JSON.stringify(values))
				return { [id]: values }
			})
			return res(fetchedPromise)
		}
	})
}
