import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import "./styles.css"

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        Categoria <FaCaretDown className='dropdown-icon' />
      </button>
      {isOpen && (
        "tanto faz"
      )}
    </div>
  );
};

export default DropDown;
