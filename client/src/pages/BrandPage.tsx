const brands = [
  {
    name: "Christian Dior",
    skus: 4,
    totalStock: 930,
    trueAvail: 1010,
    aging: 0
  },
  {
    name: "Bulgari",
    skus: 4,
    totalStock: 1500,
    trueAvail: 1520,
    aging: 4
  },
  {
    name: "Hugo Boss",
    skus: 4,
    totalStock: 1235,
    trueAvail: 1230,
    aging: 1
  }
]

const BrandPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Brand Report</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-sm text-gray-600">
            <tr>
              <th className="p-4">Brand</th>
              <th className="p-4">SKUs</th>
              <th className="p-4">Total Stock</th>
              <th className="p-4">True Available</th>
              <th className="p-4">Aging &gt; 60d</th>
            </tr>
          </thead>

          <tbody>
            {brands.map((b, i) => (
              <tr key={i} className="border-t">
                <td className="p-4">{b.name}</td>
                <td className="p-4">{b.skus}</td>
                <td className="p-4">{b.totalStock}</td>
                <td className="p-4">{b.trueAvail}</td>
                <td className="p-4">{b.aging}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BrandPage
