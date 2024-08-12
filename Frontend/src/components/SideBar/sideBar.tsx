import React, { useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex ${isOpen ? 'w-36' : 'w-0'} h-screen bg-gray-800 transition-all duration-500 absolute top-0 left-0`}>
      <div className="flex flex-col">
        <button onClick={toggleSideBar} className="bg-gray-700 text-white p-2 mt-2 hover:bg-gray-600 ml-2 focus:outline-none">
          {isOpen ? '<<' : '>>'}
        </button>
        { isOpen && (
            <nav className="mt-2 pl-3">
                <ul className={`space-y-2 text-left transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
                    <li><a href="/home" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="/membros" className="text-white hover:text-gray-400">Membros</a></li>
                    <li><a href="/mesas" className="text-white hover:text-gray-400">Mesas</a></li>
                    <li><a href="/cardapio" className="text-white hover:text-gray-400">Cardapio</a></li>
                    <li><a href="/registros" className="text-white hover:text-gray-400">Registro</a></li>
                </ul>
            </nav>
        )}
      </div>
    </div>
  );
}
