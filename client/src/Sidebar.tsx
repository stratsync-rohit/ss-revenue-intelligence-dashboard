import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md p-4 space-y-4">
      <h2 className="text-xl font-bold">StratSync</h2>

      <nav className="flex flex-col space-y-2">
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/suppliers">Suppliers</Link>
        <Link to="/brands">Brands</Link>
      </nav>
    </div>
  )
}

export default Sidebar
