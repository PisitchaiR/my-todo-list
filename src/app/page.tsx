'use client';

import TodoList from '@/modules/TodoList/components/TodoList';
import React from 'react';

const Home = () => {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center container max-w-md w-full gap-5">
        <h1 className="text-8xl mb-5 font-medium">MY TODO</h1>
        <TodoList />
      </div>
    </main>
  );
};

export default Home;
