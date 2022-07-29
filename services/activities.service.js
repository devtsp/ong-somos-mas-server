const { Activity } = require('../models');

const addActivity = async ({ name, content }) => {
  const newActivity = await Activity.create({ name, content });
  return newActivity;
};

const findActivity = async (id) => {
  const activity = await Activity.findOne({ where: { id: id } });
  return activity;
};

const updateActivity = async (activityInstance, newValues) => {
  const updatedActivity = await activityInstance.update(newValues);
  return updatedActivity;
};

module.exports = { addActivity, findActivity, updateActivity };
