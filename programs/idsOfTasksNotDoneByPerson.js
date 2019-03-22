const { compose, map, filter, getProp, reduce } = require('../common/utils');

const tasksNotDone = compose(
  map(getProp('id')),
  filter(({ done }) => !done),
  getProp('tasks')
);

const idsOfTasksNotDoneByPerson = compose(
  reduce(
    (acc, curr) => ((acc[curr.responsible] = tasksNotDone(curr)), acc),
    {}
  ),
  getProp('byPerson')
);

module.exports = idsOfTasksNotDoneByPerson;
