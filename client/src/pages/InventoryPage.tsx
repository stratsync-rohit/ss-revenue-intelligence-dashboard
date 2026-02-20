import { useAppDispatch, useAppSelector } from "../hooks"
import { setSelectedId } from "../slices/inventorySlice"

const sampleData = [
  { id: "1", sku: "SKU-101", stock: 120 },
  { id: "2", sku: "SKU-102", stock: 45 },
  { id: "3", sku: "SKU-103", stock: 10 }
]

const InventoryPage = () => {
  const dispatch = useAppDispatch()
  const { selectedId } = useAppSelector((state) => state.inventory)

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Inventory</h1>

      <div className="bg-white p-4 rounded shadow">
        {sampleData.map((item) => (
          <div
            key={item.id}
            className="border-b py-2 cursor-pointer"
            onClick={() =>
              dispatch(
                setSelectedId(selectedId === item.id ? null : item.id)
              )
            }
          >
            <div className="flex justify-between">
              <span>{item.sku}</span>
              <span>{item.stock}</span>
            </div>

            {selectedId === item.id && (
              <div className="text-sm text-gray-500 mt-2">
                Expanded details for {item.sku}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InventoryPage
