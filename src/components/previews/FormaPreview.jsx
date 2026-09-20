import { Layers, Search, Plus, Check } from 'lucide-react'

const columns = [
  {
    label: 'To do',
    tasks: ['Explore visual direction', 'Gather inspiration'],
    tone: 'orange',
  },
  {
    label: 'In progress',
    tasks: ['Design system', 'Homepage exploration'],
    tone: 'purple',
  },
  {
    label: 'Done',
    tasks: ['Project kickoff', 'Research & discovery'],
    tone: 'green',
  },
]

export default function FormaPreview() {
  return (
    <div className="forma-window" aria-hidden="true">
      <div className="forma-top">
        <b>
          <Layers size={17} /> forma
        </b>
        <span>
          Workspace <span className="mx-2">/</span> Website redesign
        </span>
        <div className="avatar-stack">
          <i>A</i>
          <i>J</i>
          <i>M</i>
        </div>
      </div>
      <div className="forma-heading">
        <h4>
          Website redesign <span>✳</span>
        </h4>
        <p>A fresh start for something great.</p>
      </div>
      <div className="board-tabs">
        <span>▤ Board</span>
        <span>☷ List</span>
        <span>▦ Calendar</span>
        <Search size={12} />
      </div>
      <div className="kanban">
        {columns.map((column, columnIndex) => (
          <div key={column.label}>
            <div className="column-title">
              <span>
                <i className={column.tone} />
                {column.label} <small>2</small>
              </span>
              <Plus size={11} />
            </div>
            {column.tasks.map((task, taskIndex) => (
              <div className="task" key={task}>
                <span className={`task-tag ${column.tone}`}>
                  {taskIndex === 1 ? 'Design' : 'Planning'}
                </span>
                <b>{task}</b>
                <div>
                  <span>{columnIndex === 2 ? <Check size={11} /> : '☷  2'}</span>
                  <i>{taskIndex === 1 ? 'J' : 'A'}</i>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
