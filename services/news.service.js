const postNewService = async (postBody) => {
  return postBody;
};

const editNews = async ({ id, name, image, updatedAt }) => {
  //const news = await db.Entry.update({ name, image, updatedAt }, { where: { id } });
  return news;
};

const newsExists = async ({ id }) => {
  const newsExists = await db.Entry.findByPk(id);
  return newsExists ? newsExists : null;
};

module.exports = { postNewService, editNews, newsExists };
