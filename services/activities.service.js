const { Activity } = require('../models');

const addActivity = async (activityBody) => {
  const newActivity = await Activity.create(activityBody);
  return newActivity;
};

const findAllActivities = async () => {
  const activities = await Activity.findAll();
  return activities
};

const findActivity = async (id) => {
  const activity = await Activity.findOne({ where: { id: id } });
  return activity;
};

const updateActivity = async (activityInstance, newValues) => {
  const updatedActivity = await activityInstance.update(newValues);
  return updatedActivity;
};

const destroyActivity = async (id) => {
  await Activity.destroy({ where: { id } });  
};

module.exports = { addActivity, findAllActivities, findActivity, updateActivity, destroyActivity };
