const { validationResult } = require('express-validator');
const { addActivity, findActivity, updateActivity } = require('../services/activities.service.js');

const postActivities = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, content } = req.body;

  try {
    await addActivity(name, content);
    res.status(200).json({ msg: 'Activity created succesfully' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send(`Server error: ${error.message}`);
  }
};

const putActivity = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;

  const activityToUpdate = findActivity(id);
  if (activityToUpdate === null) {
    return res.status(404).json({ error: 'There is no activity with the given id' });
  }

  const { name, content } = req.body;

  try {
    const updatedActivity = await updateActivity(activityToUpdate, { name, content });
    res.status(200).json({ msg: `Activity succesfully updated`, activity: { name, content } });
  } catch (error) {
    res.status(500).json({ errors: error.message });
  }
};

module.exports = { postActivities, putActivity };
