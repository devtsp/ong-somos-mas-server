const { Activity } = require('../models');

const addActivity = ({ name, content }) => {
  //Activity.create({name, content});
};

const findActivity = async (id) => {
  const activity = await Activity.findOne({ where: { id: id } });
  return activity;
};

const updateActivity = async (activityInstance, newValues) => {
  const updatedActivity = await Activity.update(newValues);
  return updatedActivity;
};

module.exports = { addActivity, findActivity, updateActivity };
