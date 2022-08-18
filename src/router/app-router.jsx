import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ScreenHome } from '../views/screen-home';
import { ScreenRead } from '../views/screen-read';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<ScreenHome />} />
            <Route path="/read" element={<ScreenRead />} />
        </Routes>
    </>
  );
}
