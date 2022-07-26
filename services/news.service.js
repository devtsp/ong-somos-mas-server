const db = require('../models/index');

const retrieveNewById = async (id) => {
  const foundNew = await db.Entry.findByPk(id);
  return foundNew;
};

const retrieveNews = async () => {
  const news = await db.Entry.findAll({
    attributes: ['name', 'image', 'createdAt'],
    where: { type: 'news' },
  });
  return news;
};

const postNewService = async (postBody) => {
  return postBody;
};

const editNews = async ({ id, content, image, categoryId, type, updatedAt, deleteAt }) => {
  const news = await db.Entry.update(
    { content, image, categoryId, type, updatedAt, deleteAt },
    { where: { id } }
  );
  return news;
};

const destroyNew = async (id) => {
  const savedInDb = await db.Entry.findOne({ where: { id, type: 'news' } });
  await db.Entry.destroy({ where: { id } });
  return savedInDb;
};

const newsExists = async ({ id }) => {
  const newsExists = await db.Entry.findByPk(id);
  return newsExists ? newsExists : null;
};

module.exports = {
  postNewService,
  editNews,
  newsExists,
  retrieveNews,
  retrieveNewById,
  destroyNew,
};
