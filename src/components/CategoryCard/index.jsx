import './styles.css';
import { FaPen } from "react-icons/fa";

const CategoryCard = () => {
  return (
    <div className='category-card'>
      <div className='category-container'>
        <div className='category-span'>
          <span className='span1'>Categoria</span>
          <span>Produtos: </span>
        </div>
        <div className='category-icon'>
          <FaPen className="edit-icon" />
        </div>
      </div>
    </div>
  )
};

export default CategoryCard;