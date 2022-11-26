const headers = (req, res, next) => {
	const origin = 'http://localhost/3000'
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', true)
	res.setHeader('Content-Type', 'application/json')
	next()
}

module.exports = headers