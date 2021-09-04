import { Link } from "react-router-dom"
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

const QuickButtonGroup = ({addFavorite, id}) => {
 
  return (
    <div className="QuickButton">
      <button><AiOutlineHeart className="heart" onClick={addFavorite}/></button>
      <Link to={`/detail/${id}`}><FiSearch className="view" /></Link>
    </div>
  )
}

export default QuickButtonGroup