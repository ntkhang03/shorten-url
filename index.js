const express = require('express');
const tinyurl = require('tinyurl');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/shorten', async (req, res) => {
	try {
		const url = req.body.url;
		const result = await tinyurl.shorten(url);
		res.json({ result, error: null });
	}
	catch (e) {
		res.json({ result: null, error: e });
	}
});

app.post('/shortenWithAlias', async (req, res) => {
	try {
		const url = req.body.url;
		const alias = req.body.alias;
		const result = await tinyurl.shortenWithAlias(url, alias);
		res.json({ result, error: null });
	}
	catch (e) {
		res.json({ result: null, error: e });
	}
});

app.post('/resolve', async (req, res) => {
	try {
		const url = req.body.url;
		const result = await tinyurl.resolve(url);
		res.json({ result, error: null });
	}
	catch (e) {
		res.json({ result: null, error: e });
	}
});

app.get('/', async (req, res) => {
	res.sendFile(__dirname + '/home.html');
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
