import { useState } from 'react';
import Header from '../components/Header';

function ServerPriceCalculator() {
  // Data awal untuk setiap komponen
  const initialComponents = [
    {
      id: 1,
      category: 'Processor',
      options: [
        { id: 1, name: 'Intel Core i5', price: 2500000 },
        { id: 2, name: 'Intel Core i7', price: 3500000 },
        { id: 3, name: 'Intel Core i9', price: 5000000 }
      ],
      selectedOption: { id: 1, name: 'Intel Core i5', price: 2500000 },
      quantity: 1
    },
    {
      id: 2,
      category: 'RAM',
      options: [
        { id: 1, name: '8GB DDR4', price: 700000 },
        { id: 2, name: '16GB DDR4', price: 1300000 },
        { id: 3, name: '32GB DDR4', price: 2500000 },
        { id: 4, name: '64GB DDR4', price: 2800000 },
      ],
      selectedOption: { id: 1, name: '8GB DDR4', price: 700000 },
      quantity: 1
    },
    {
      id: 3,
      category: 'SSD',
      options: [
        { id: 1, name: '256GB SSD', price: 900000 },
        { id: 2, name: '512GB SSD', price: 1600000 },
        { id: 3, name: '1TB SSD', price: 3000000 }
      ],
      selectedOption: { id: 1, name: '256GB SSD', price: 900000 },
      quantity: 1
    }
  ];

  const server = [
    {id: 1, name: 'Dell EMC PowerEdge R640', price: 1000000},
    {id: 2, name: 'Dell EMC PowerEdge R630', price: 1000000},
    {id: 3, name: 'Dell EMC PowerEdge R740', price: 1000000},
    {id: 4, name: 'Dell EMC PowerEdge R750', price: 1000000},
  ];

  // Semua kategori komponen dan opsi-opsinya
  const allCategories = {
    Processor: [
      { id: 1, name: 'Intel Core i5', price: 2500000 },
      { id: 2, name: 'Intel Core i7', price: 3500000 },
      { id: 3, name: 'Intel Core i9', price: 5000000 }
    ],
    RAM: [
      { id: 1, name: '8GB DDR4', price: 700000 },
      { id: 2, name: '16GB DDR4', price: 1300000 },
      { id: 3, name: '32GB DDR4', price: 2500000 }
    ],
    SSD: [
      { id: 1, name: '256GB SSD', price: 900000 },
      { id: 2, name: '512GB SSD', price: 1600000 },
      { id: 3, name: '1TB SSD', price: 3000000 }
    ],
    GPU: [
      { id: 1, name: 'NVIDIA RTX 3060', price: 7000000 },
      { id: 2, name: 'NVIDIA RTX 3080', price: 12000000 },
      { id: 3, name: 'NVIDIA RTX 3090', price: 20000000 }
    ],
    Motherboard: [
      { id: 1, name: 'ASUS ROG Strix', price: 3000000 },
      { id: 2, name: 'MSI B450 TOMAHAWK', price: 1500000 },
      { id: 3, name: 'Gigabyte Aorus', price: 2500000 }
    ],
    HDD: [
        { id: 1, name: '1TB HDD', price: 500000 },
        { id: 2, name: '2TB HDD', price: 1000000},
        { id: 3, name: '3TB HDD', price: 1500000},
    ],
    PSU: [
        { id: 1, name: '650W', price: 800000 },
        { id: 2, name: '850W', price: 1200000 },
        { id: 3, name: '1000W', price: 1800000}
    ],
    'Network Card': [
        { id: 1, name: 'Intel I219-LM', price: 2000000 },
        { id: 2, name: 'Intel I210-T1', price: 2500000 },
        { id: 3, name: 'Realtek RTL8125', price: 1500000},
    ]
  };

  // State untuk menyimpan komponen yang dipilih
  const [components, setComponents] = useState(initialComponents);
  const [selectedServer, setSelectedServer] = useState(server[0].id);

  // Fungsi untuk mengupdate pilihan komponen
  const handleOptionChange = (componentId, selectedOptionId) => {
    setComponents(components.map(component => {
      if (component.id === componentId) {
        return {
          ...component,
          selectedOption: component.options.find(option => option.id === parseInt(selectedOptionId))
        };
      }
      return component;
    }));
  };

  // Fungsi untuk mengupdate kategori komponen
  const handleCategoryChange = (componentId, selectedCategory) => {
    setComponents(components.map(component => {
      if (component.id === componentId) {
        return {
          ...component,
          category: selectedCategory,
          options: allCategories[selectedCategory],
          selectedOption: allCategories[selectedCategory][0]
        };
      }
      return component;
    }));
  };

  // Fungsi untuk mengupdate kuantitas komponen
  const handleQuantityChange = (componentId, quantity) => {
    setComponents(components.map(component => {
      if (component.id === componentId) {
        return {
          ...component,
          quantity: parseInt(quantity)
        };
      }
      return component;
    }));
  };

  // Fungsi untuk menambahkan baris baru ke tabel
  const addRow = () => {
    const newId = components.length + 1;
    const newComponent = {
      id: newId,
      category: 'Processor', // Default category
      options: allCategories['Processor'], // Default options
      selectedOption: allCategories['Processor'][0], // Default selected option
      quantity: 1
    };
    setComponents([...components, newComponent]);
  };

  // Menghitung total harga
  const totalPrice = components.reduce((total, component) => {
    return total + (component.selectedOption.price * component.quantity);
  }, 0);

  // Mengupdate server yang dipilih
  const handleServerChange = (e) => {
    setSelectedServer(parseInt(e.target.value));
  };

  return (
    <>
        <Header />
        <div className="container mx-auto mt-16 p-4">
        <h2 className="text-2xl font-bold mb-4">Kalkulasi Harga Server</h2>
        <div className="mb-4">
          <label htmlFor="server-select" className="block text-lg font-medium mb-2">
            Pilih Server:
          </label>
          <select
            id="server-select"
            value={selectedServer}
            onChange={handleServerChange}
            className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {server.map((srv) => (
              <option key={srv.id} value={srv.id}>
                {srv.name} - Rp {srv.price.toLocaleString('id-ID')}
              </option>
            ))}
          </select>
        </div>

        <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
            <tr>
                <th className="border border-gray-300 px-4 py-2">Komponen</th>
                <th className="border border-gray-300 px-4 py-2">Pilihan</th>
                <th className="border border-gray-300 px-4 py-2">Kuantitas</th>
                <th className="border border-gray-300 px-4 py-2">Harga</th>
            </tr>
            </thead>
            <tbody>
            {components.map(component => (
                <tr key={component.id}>
                <td className="border border-gray-300 px-4 py-2">
                    <select
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={component.category}
                    onChange={(e) => handleCategoryChange(component.id, e.target.value)}
                    >
                    {Object.keys(allCategories).map(category => (
                        <option key={category} value={category}>
                        {category}
                        </option>
                    ))}
                    </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    <select
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={component.selectedOption.id}
                    onChange={(e) => handleOptionChange(component.id, e.target.value)}
                    >
                    {component.options.map(option => (
                        <option key={option.id} value={option.id}>
                        {option.name}
                        </option>
                    ))}
                    </select>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    <input
                    type="number"
                    className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={component.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(component.id, e.target.value)}
                    />
                </td>
                <td className="border border-gray-300 px-4 py-2">{(component.selectedOption.price * component.quantity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={addRow}
        >
            Tambah Komponen
        </button>

        <div className="mt-6 text-end">
            <h3 className="text-xl font-semibold">Total Harga:</h3>
            <p className="text-lg">{(totalPrice + server.find(srv => srv.id === selectedServer).price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
        </div>
        </div>
    </>
  );
}

export default ServerPriceCalculator;
