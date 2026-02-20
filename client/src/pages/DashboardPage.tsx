import { AlertCircle, Clock, Package } from "lucide-react"

const DashboardPage = () => {
  const stats = [
    {
      title: "Expired SOs",
      description: "Past expiry date · 520 total units",
      count: 2,
      color: "border-red-300 bg-red-50"
    },
    {
      title: "SOs Expiring 30d",
      description: "Action needed soon · 930 total units",
      count: 4,
      color: "border-yellow-300 bg-yellow-50"
    },
    {
      title: "Expired POs",
      description: "Stale supplier offers · $0 value",
      count: 0,
      color: "border-red-300 bg-red-50"
    },
    {
      title: "POs Expiring 30d",
      description: "Review supplier offers · $218,500 value",
      count: 1,
      color: "border-yellow-300 bg-yellow-50"
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-5 rounded-xl border ${item.color}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>
              </div>

              <span className="bg-white px-2 py-1 rounded-full text-sm font-semibold shadow">
                {item.count}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Items to Cover */}
      <div className="p-5 rounded-xl border border-yellow-300 bg-yellow-50">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold">Items to Cover / Buy</h2>
            <p className="text-sm text-gray-600 mt-1">
              Net negative position — place orders with suppliers · 590 units to buy
            </p>
          </div>

          <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            2
          </span>
        </div>
      </div>

      {/* Clear Now */}
      <div className="p-5 rounded-xl border border-red-300 bg-red-50">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-semibold flex items-center gap-2">
              <AlertCircle size={18} /> Clear Now
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Stock aging &gt; 30 days — revenue impact · 1,905 total units
            </p>
          </div>

          <span className="bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
            7
          </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
