const { postNewService } = require('../services/news.service');

const postNew = async (req, res) => {
	if (!req?.body) {
		return res.status(404).json({ errors: 'request body missing' });
	}
	req.body.type = 'news';
	const result = await postNewService(req.body);
	res.json(result);
};

module.exports = { postNew };
