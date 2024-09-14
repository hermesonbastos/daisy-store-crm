import './styles.css';
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoryCard = () => {

  const navigate = useNavigate();

  const handleClick = () => {navigate("../categories/edit")}

  return (
    <div className='category-card'>
      <div className='category-container'>
        <div className='category-span'>
          <span className='span1'>Categoria</span>
          <span>Produtos: </span>
        </div>
        <div className='category-icon' onClick={handleClick}>
          <FaPen className="edit-icon" />
        </div>
      </div>
    </div>
  )
};

export default CategoryCard;