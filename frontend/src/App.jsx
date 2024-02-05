import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./constants/routes/index";
import AppRoutes from "./constants/routes/index";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
