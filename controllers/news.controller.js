const { postNewService, editNews, newsExists } = require('../services/news.service');

const postNew = async (req, res) => {
  if (!req?.body) {
    return res.status(404).json({ errors: 'request body missing' });
  }
  req.body.type = 'news';
  const result = await postNewService(req.body);
  res.json(result);
};

const putNews = async (req, res) => {
  if (!req?.body) {
    return res.status(404).json({ errors: 'request body missing' });
  }
};

module.exports = { postNew };
