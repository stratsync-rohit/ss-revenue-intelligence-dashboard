
import { createBrowserRouter } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import DashboardPage from "../pages/DashboardPage"
import InventoryPage from "../pages/InventoryPage"
import BrandPage from "../pages/BrandPage"
import SupplierPage from "../pages/SupplierPage"
import CustomerPage from "../pages/CustomerPage"
import NotFoundPage from "../pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, 
    children: [
      { index: true, element: <DashboardPage /> },
    ]
  },
  {
    path: "/inventory",
    element: <AppLayout />, 
    children: [
      { index: true, element: <InventoryPage /> },
    ]
  },
  {
    path: "/customers",
    element: <AppLayout />, 
    children: [
      { index: true, element: <CustomerPage /> },
    ]
  },
  {
    path: "/suppliers",
    element: <AppLayout />, 
    children: [
      { index: true, element: <SupplierPage /> },
    ]
  },
  {
    path: "/brands",
    element: <AppLayout />, 
    children: [
      { index: true, element: <BrandPage /> },
    ]
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
])
