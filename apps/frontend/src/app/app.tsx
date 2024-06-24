import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { EmployeesPage } from "./pages/EmployeesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'employees',
        element: <EmployeesPage />,
      },
    ],
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
