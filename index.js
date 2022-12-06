const express = require('express');
const tinyurl = require('tinyurl');

const app = express();
app.post('/shorten-url', async (req, res) => {
	try {
		const { options } = req.body;
		const result = await tinyurl.shorten(options);
		res.json({ result, error: null });
	}
	catch (e) {
		res.json({ result: null, error: e });
	}
});

app.listen(3000, () => console.log('Server started'));
