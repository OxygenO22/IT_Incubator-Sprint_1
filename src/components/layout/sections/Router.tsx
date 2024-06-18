import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { ToDo } from '../../pages/toDo/ToDo'
import { Bank } from '../../pages/bank/Bank'
import { Crosses } from '../../ui/extraLesson/superCrosses/Crosses'
import { MainWithIgor } from '../../pages/withIgor/MainWithIgor'
import { ModalWrapper } from '../../ui/extraLesson/modal/ModalWrapper'
import { NotFound } from '../../pages/notFound/NotFound'
import { S2hw1Microtask } from '../../pages/s2hw1/S2hw1Microtask'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ToDo />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/crosses" element={<Crosses />} />
          <Route path="/modal" element={<ModalWrapper />} />
          <Route path="/atm" element={<MainWithIgor />} />
          <Route path="/s2hw1" element={<S2hw1Microtask />} />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}