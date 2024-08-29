import { useState } from 'react';
import Header from '../components/AdminHeader'

function AdminDashboard() {
  // Data awal untuk komponen server
  const [components] = useState([
    { id: 1, category: 'Processor', name: 'Intel Core i5', stock: 25 },
    { id: 2, category: 'Processor', name: 'Intel Core i7', stock: 15 },
    { id: 3, category: 'RAM', name: '8GB DDR4', stock: 25 },
    { id: 4, category: 'RAM', name: '16GB DDR4', stock: 50 },
    { id: 5, category: 'RAM', name: '32GB DDR4', stock: 30 },
    { id: 6, category: 'RAM', name: '64GB DDR4', stock: 20 },
    { id: 7, category: 'HDD', name: '256GB SSD', stock: 40 },
    { id: 8, category: 'HDD', name: '512GB SSD', stock: 25 },
    { id: 9, category: 'HDD', name: '1TB SSD', stock: 10 },
    { id: 10, category: 'GPU', name: 'NVIDIA RTX 3060', stock: 5 },
    { id: 11, category: 'GPU', name: 'NVIDIA RTX 3080', stock: 3 },
    { id: 12, category: 'GPU', name: 'NVIDIA RTX 3090', stock: 1 },
    { id: 13, category: 'Motherboard', name: 'ASUS ROG Strix', stock: 8 },
    { id: 14, category: 'Motherboard', name: 'MSI B450 TOMAHAWK', stock: 12 },
    { id: 15, category: 'Motherboard', name: 'Gigabyte Aorus', stock: 7 },
    { id: 16, category: 'SSD', name: 'SAMSUNG EVO 860 256GB', stock: 15 },
    { id: 17, category: 'SSD', name: 'SAMSUNG EVO 860 512GB', stock: 20 },
    { id: 18, category: 'SSD', name: 'SAMSUNG EVO 860 1TB', stock: 17 },
    { id: 19, category: 'SSD', name: 'SAMSUNG EVO 860 2TB', stock: 18 },
    { id: 20, category: 'Power Supply', name: 'PSU 500W', stock: 8 },
    { id: 21, category: 'Power Supply', name: 'PSU 850W', stock: 12 },
    { id: 22, category: 'Power Supply', name: 'PSU 1000W', stock: 6 },
    { id: 23, category: 'Power Supply', name: 'PSU 1100W', stock: 2 },
    { id: 24, category: 'Network Card', name: 'Intel I219-LM', stock: 4 },
    { id: 25, category: 'Network Card', name: 'Intel I219-T1', stock: 7 },
    { id: 26, category: 'Network Card', name: 'Realtek RTL8125', stock: 3 },
  ]);

  // Mengelompokkan komponen berdasarkan kategori
  const categorizedComponents = components.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {});

  return (
    <>
        <Header />
        <div className="container mx-auto mt-16 p-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(categorizedComponents).map((category) => (
            <div
                key={category}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
                <h3 className="text-xl font-bold text-center mb-4">{category}</h3>
                <ul>
                {categorizedComponents[category].map((component) => (
                    <li key={component.id} className="mb-2">
                    <div className="flex justify-between">
                        <span className="text-gray-700">{component.name}</span>
                        <span className={`font-bold ${component.stock <= 5 ? 'text-red-500' : 'text-green-500'}`}>
                        {component.stock} in stock
                        </span>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </div>
    </>
  );
}

export default AdminDashboard;
