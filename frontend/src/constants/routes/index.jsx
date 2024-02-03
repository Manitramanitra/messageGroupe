import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Homepages = lazy(() => import('../../Pages/Homepages'));
const Chatpages = lazy(() => import('../../Pages/Chatpages'));

function AppRoutes() {
  return (
     <Router>
       <Suspense fallback={<div>Loading...</div>}>
         <Routes>
           <Route path="/" element={<Homepages />} />
           <Route path="/chats" element={<Chatpages />} />
           <Route path="*" element={<Homepages />} />
         </Routes>
       </Suspense>
     </Router>
  );
 }

export default AppRoutes;