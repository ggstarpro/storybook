import * as TaskStories from "./Task.stories";
import TaskList from "./TaskList";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

export const Default = {
  args: {
    tasks: [
      {
        ...TaskStories.Default.args.task,
        id: "1",
        title: "Test Task 1",
      },
      {
        ...TaskStories.Default.args.task,
        id: "2",
        title: "Test Task 2",
      },
      {
        ...TaskStories.Default.args.task,
        id: "3",
        title: "Test Task 3",
      },
      {
        ...TaskStories.Default.args.task,
        id: "4",
        title: "Test Task 4",
      },
      {
        ...TaskStories.Default.args.task,
        id: "5",
        title: "Test Task 5",
      },
      {
        ...TaskStories.Default.args.task,
        id: "6",
        title: "Test Task 6",
      },
    ],
  },
};
