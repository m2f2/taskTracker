
/* eslint-disable react/jsx-no-undef */
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';

import Dashboard from './pages/Dashboard'; 
import TaskDetails from './pages/TaskDetails';
import Tasks from './pages/Tasks';
import Trash from './pages/Trash';
import Users from './pages/Users';
import Login from './pages/Log-in';

function Layout() {
  const user = ''; 

  const location = useLocation(); 

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        {/* <Sidebar/> */}
      </div>
      {/* <MobileSidebar/> */} 
      <div className='flex-1 overflow-y-auto'>
        {/* <Navbar/> */} 
      </div>
      <div className='p-4 2xl:px-10'>
        <Outlet /> {/* Renders nested child routes within this layout component. */}
      </div>
    </div>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace /> // Redirects to login if user is not authenticated.
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f5]">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Navigate to='/dashboard' />} /> {/* Redirects root path to dashboard. */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/task/:id' element={<TaskDetails />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Trash />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>

      <Toaster richColors /> {/* Utilizes 'sonner' Toaster component with richColors prop. */}
    </main>
  );
}

export default App;