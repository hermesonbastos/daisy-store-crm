import './styles.css';
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category, handleClick }) => {

  const navigate = useNavigate();

  return (
    <div className='category-card'>
      <div className='category-container'>
        <div className='category-span'>
          <span className='span1'>{category.name}</span>
          <span>Produtos: {category?.products?.length}</span>
        </div>
        <div className='category-icon' onClick={handleClick}>
          <FaPen className="edit-icon" />
        </div>
      </div>
    </div>
  )
};

export default CategoryCard;