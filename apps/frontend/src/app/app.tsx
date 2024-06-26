import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { RegistrationPage } from "./pages/RegistrationPage";
import { ROUTE } from "./routes";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";



export function App() {
  const [user, setUser] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: ROUTE.REGISTRATION,
          element: <RegistrationPage />,
        },
        {
          path: ROUTE.HOME,
          element: <HomePage />,
        },
        {
          path: ROUTE.ABOUT,
          element: <AboutPage />,
        },
        {
          path: ROUTE.CONTACT,
          element: <ContactPage />,
        },
        {
          path: ROUTE.EMPLOYEES,
          element:
            // <ProtectedRoute user={user}>
            //   <EmployeesPage />
            // </ProtectedRoute>,
            <ProtectedRoute user={user} element={<EmployeesPage />} />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
