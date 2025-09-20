import classNames from 'classnames';
import React from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
  filter: 'ALL' | 'ACTIVE' | 'COMPLETED';
  onFilter: (type: 'ALL' | 'ACTIVE' | 'COMPLETED') => void;
  onClearCompletedTodos: () => void;
  activeTodos: number;
};

export const TodoFooter: React.FC<Props> = ({
  todos,
  filter,
  onFilter,
  onClearCompletedTodos,
  activeTodos,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            ' selected': filter === 'ALL',
          })}
          data-cy="FilterLinkAll"
          onClick={() => onFilter('ALL')}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            ' selected': filter === 'ACTIVE',
          })}
          data-cy="FilterLinkActive"
          onClick={() => onFilter('ACTIVE')}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            ' selected': filter === 'COMPLETED',
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => onFilter('COMPLETED')}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        onClick={onClearCompletedTodos}
        disabled={!todos.some(todo => todo.completed)}
      >
        Clear completed
      </button>
    </footer>
  );
};
