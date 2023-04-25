import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;

// Outlet을 About으로 대체하려고 한다.
// Root를 렌더링하지만 Root에 자식이 있기 때문에 Outlet이라는 컴포넌트를 사용했다.