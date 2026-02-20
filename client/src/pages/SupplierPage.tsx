const suppliers = [
  {
    name: "LVMH Distribution",
    reliability: "High",
    businessValue: "$596,400",
    pendingPO: "$385,000"
  },
  {
    name: "Bulgari MEA",
    reliability: "Medium",
    businessValue: "$274,400",
    pendingPO: "$142,000"
  },
  {
    name: "Coty Prestige",
    reliability: "High",
    businessValue: "$261,000",
    pendingPO: "$218,500"
  }
]

const SupplierPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Supplier Report</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-sm text-gray-600">
            <tr>
              <th className="p-4">Supplier</th>
              <th className="p-4">Reliability</th>
              <th className="p-4">Business Value</th>
              <th className="p-4">Pending POs</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{s.name}</td>
                <td className="p-4">{s.reliability}</td>
                <td className="p-4">{s.businessValue}</td>
                <td className="p-4">{s.pendingPO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SupplierPage
