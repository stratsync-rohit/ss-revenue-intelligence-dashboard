
interface InventoryExpandProps {
  item: {
    id: string;
    sku: string;
    description: string;
    warehouse: string;
    onHand: number;
    trueAvail: number;
    age: number;
    status: string;
    supplierInfo: {
      reliability: string;
      pendingPOs: string;
      lastCost: string;
    };
    keyCustomers: { name: string; qty: number }[];
  };
}


const InventoryExpand: React.FC<InventoryExpandProps> = ({ item }) => {
  return (
    <div className="expand-section">
      <div className="expand-card">
        <h3 className="font-semibold mb-2">Supplier Info</h3>
        <p>Reliability: {item.supplierInfo.reliability}</p>
        <p>Pending POs: {item.supplierInfo.pendingPOs}</p>
        <p>Last Cost: {item.supplierInfo.lastCost}</p>
      </div>
      <div className="expand-card">
        <h3 className="font-semibold mb-2">Key Customers</h3>
        {item.keyCustomers.length > 0 ? (
          item.keyCustomers.map((customer, idx) => (
            <p key={idx}>{customer.name} – {customer.qty} qty</p>
          ))
        ) : (
          <p>No key customers</p>
        )}
      </div>
    </div>
  );
};

export default InventoryExpand;
