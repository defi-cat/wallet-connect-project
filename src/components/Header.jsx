import React from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useAppKit } from "@reown/appkit/react";

const Header = () => {
  const { open, close } = useAppKit();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800">
      <div className="flex items-center space-x-2">
        <CurrencyDollarIcon className="h-8 w-8 text-purple-400" />
        <span className="text-2xl font-bold text-purple-300">DogeCat</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-purple-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-300 transition-colors">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-300 transition-colors">
              Community
            </a>
          </li>
        </ul>
      </nav>

      <appkit-button />
    </header>
  );
};

export default Header;
