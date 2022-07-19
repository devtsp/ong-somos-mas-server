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
    return res.status(404).json({ errors: 'Request body missing' });
  }

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, content, image, categoryId, type, deleteAt } = req.body;
  const { id } = req.params;

  try {
    const news = await newsExists({ id });
    if (!news) {
      return res.status(404).json({ errors: `New not found` });
    }
    const updatedNew = await editNews({
      id,
      name,
      content,
      image,
      categoryId,
      type,
      updatedAt: new Date(),
      deleteAt,
    });
    res.status(200).json({ msg: `News updated`, new: updatedNew });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postNew, putNews };
