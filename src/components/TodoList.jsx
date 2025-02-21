import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;
