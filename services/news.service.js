const db = require('../models/index');

const retrieveNewById = async (id) => {
  const stored = await db.Entry.findByPk(id);
  return stored;
};

const retrieveNews = async () => {
  const news = await db.Entry.findAll({
    attributes: ['name', 'image', 'createdAt'],
    where: { categoryId: 1 },
  });
  return news;
};

const postNewService = async (postBody) => {
  const postedNew = await db.Entry.create(postBody);
  return postedNew.id;
};

const editNews = async ({ id, name, content, image, categoryId, type, updatedAt, deletedAt }) => {
  const news = await db.Entry.update(
    { name, content, image, categoryId, type, updatedAt, deletedAt },
    { where: { id } }
  );
  return news;
};

const destroyNew = async (id) => {
  const savedInDb = await db.Entry.findOne({ where: { id, categoryId: 1 } });
  await db.Entry.destroy({ where: { id } });
  return savedInDb;
};

module.exports = {
  postNewService,
  editNews,
  retrieveNews,
  retrieveNewById,
  destroyNew,
};
