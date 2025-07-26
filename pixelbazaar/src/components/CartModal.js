import React, { useState } from "react";

const CartModal = ({ open, onClose, cart, onRemove, onCheckout, total }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    instructions: "",
    payment: "Credit Card"
  });
  const [checkoutMsg, setCheckoutMsg] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.id.replace('co', '').toLowerCase()]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onCheckout();
    setCheckoutMsg(true);
    setTimeout(() => setCheckoutMsg(false), 3000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Order Summary</h3>
        <div className="bg-white rounded p-4 mb-4">
          {cart.length === 0 ? (
            <div className="text-gray-500 text-center">Your cart is empty.</div>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id} className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold">{item.name}</span><br />
                    <span className="text-sm text-gray-500">Qty: {item.qty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">₹{(item.price * item.qty).toLocaleString()}</span>
                    <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 text-lg">&times;</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 text-right font-bold text-lg">Total: ₹{total.toLocaleString()}</div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">First Name</label>
              <input type="text" id="coFirstName" className="w-full p-2 rounded border border-gray-300" required value={form.firstName} onChange={handleChange} />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Last Name</label>
              <input type="text" id="coLastName" className="w-full p-2 rounded border border-gray-300" required value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Email</label>
              <input type="email" id="coEmail" className="w-full p-2 rounded border border-gray-300" required value={form.email} onChange={handleChange} />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">Phone</label>
              <input type="tel" id="coPhone" className="w-full p-2 rounded border border-gray-300" required value={form.phone} onChange={handleChange} />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input type="text" id="coAddress" className="w-full p-2 rounded border border-gray-300" required value={form.address} onChange={handleChange} />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">City</label>
              <input type="text" id="coCity" className="w-full p-2 rounded border border-gray-300" required value={form.city} onChange={handleChange} />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">ZIP Code</label>
              <input type="text" id="coZip" className="w-full p-2 rounded border border-gray-300" required value={form.zip} onChange={handleChange} />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Delivery Instructions (optional)</label>
            <input type="text" id="coInstructions" className="w-full p-2 rounded border border-gray-300" value={form.instructions} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Payment Method</label>
            <select id="coPayment" className="w-full p-2 rounded border border-gray-300" value={form.payment} onChange={handleChange}>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>UPI</option>
              <option>Cash on Delivery</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold flex items-center justify-center gap-2 text-lg">
            <i className="fa fa-credit-card"></i> Complete Order
          </button>
        </form>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl">&times;</button>
        {checkoutMsg && <p className="text-green-600 text-center mt-4 text-lg font-semibold">Thank you for your order! Your purchase was successful.</p>}
      </div>
    </div>
  );
};

export default CartModal; 