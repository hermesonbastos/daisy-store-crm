import React, { useEffect, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import "./styles.css";
import useFetch from '../../hooks/useFetch';
import { GET_CATEGORIES } from '../../api';

const DropDown = ({ onCategoryChange, defaultValue = "Categoria" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const fetchCategories = async () => {
      const { url, options } = GET_CATEGORIES();
      const response = await request(url, options);
      if (response && response.json) {
        setCategories(response.json);
      }
    };
    fetchCategories();
  }, [request]);

  const handleCategorySelect = (category) => {
    onCategoryChange(category.id);
    setSelectedCategoryName(category.name);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div onClick={toggleDropdown} className="dropdown-button">
        {selectedCategoryName ? selectedCategoryName : defaultValue} <FaCaretDown className='dropdown-icon' />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {categories.map((category) => (
            <div
              key={category.id}
              className="dropdown-item"
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
