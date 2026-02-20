const customers = [
  {
    name: "Paris Gallery LLC",
    qty3m: 3200,
    qty6m: 7400,
    value: "$798,000",
    pending: "$124,500",
    trend: "↑"
  },
  {
    name: "Faces Beauty Stores",
    qty3m: 1800,
    qty6m: 4200,
    value: "$390,000",
    pending: "$48,200",
    trend: "↑"
  },
  {
    name: "Al Shaya Perfumes",
    qty3m: 1400,
    qty6m: 3800,
    value: "$330,000",
    pending: "$18,700",
    trend: "-"
  }
]

const CustomerPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Customer Report</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-sm text-gray-600">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">3M Qty</th>
              <th className="p-4">6M Qty</th>
              <th className="p-4">YTD Value</th>
              <th className="p-4">Pending Orders</th>
              <th className="p-4">Trend</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{c.name}</td>
                <td className="p-4">{c.qty3m}</td>
                <td className="p-4">{c.qty6m}</td>
                <td className="p-4">{c.value}</td>
                <td className="p-4">{c.pending}</td>
                <td className="p-4">{c.trend}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomerPage
