import { Link } from "react-router-dom"
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const QuickButtonGroup = ({id}) => {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  return (
    <div className="QuickButton">
      <button><AiOutlineHeart className="heart" onClick={() => {
        setFavorites(favorites.concat(id))
        }}/></button>
      <Link to={`/detail/${id}`}><FiSearch className="view" /></Link>
    </div>
  )
}

export default QuickButtonGroup