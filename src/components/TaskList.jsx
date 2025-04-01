import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";

export default function TaskList({ loading, tasks }) {
  const loadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox"></span>
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return <div className="list-items">
      {loadingRow}
      {loadingRow}
      {loadingRow}
      {loadingRow}
      {loadingRow}
      {loadingRow}
    </div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">
      <div className="wrapper-message">
        <span className="icon-check"></span>
        <div className="title-message">You have no tasks</div>
        <div className="subtitle-message">Sit back and relax</div>
      </div>
    </div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
};
TaskList.defaultProps = {
  loading: false,
};
