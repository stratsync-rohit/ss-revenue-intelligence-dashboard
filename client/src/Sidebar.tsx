
import { useState } from "react"
import { NavLink } from "react-router-dom"
import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  Tag,
  Menu as MenuIcon,
  X as CloseIcon
} from "lucide-react"

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const menu = [
    { name: "Home", path: "/", icon: LayoutDashboard },
    { name: "Inventory", path: "/inventory", icon: Package },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Suppliers", path: "/suppliers", icon: Truck },
    { name: "Brands", path: "/brands", icon: Tag },
    { name: "Offers", path: "/offers", icon: Tag }
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white/80 rounded-full p-2 shadow-lg backdrop-blur"
        onClick={() => setOpen(true)}
        aria-label="Open sidebar"
      >
        <MenuIcon size={24} />
      </button>

      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={`sidebar fixed top-0 left-0 h-full w-64 md:w-80 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col p-5 transition-transform duration-300 md:static md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"} md:flex md:h-full`}
        style={{ maxWidth: 200 }}
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 z-50 bg-white/80 rounded-full p-1 shadow"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
        >
          <CloseIcon size={20} />
        </button>

        {/* Logo Section */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold tracking-wide">
            StratSync
          </h2>
          <p className="text-xs opacity-60">
            Reports & Analytics
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {menu.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `sidebar-item flex items-center gap-3 px-4 py-2 rounded-lg text-sm ${
                    isActive ? "sidebar-item-active" : ""
                  }`
                }
                onClick={() => setOpen(false)}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="mt-auto text-xs opacity-50 pt-6 border-t border-gray-700">
          Pilot v1.0 <br />
          Category Manager
        </div>
      </aside>
    </>
  )
}

export default Sidebar
