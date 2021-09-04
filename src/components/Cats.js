import '../css/CatList.scss';
import { useEffect, useState } from 'react';
import { getCatBreeds } from '../utils/api';
import QuickButtonGroup from './QuickButtonGroup';
import { useLocalStorage } from "../hooks/useLocalStorage"

const Cats = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  useEffect(() => {
    async function fetchList() {
      setIsLoading(true);
      const nextCats = await getCatBreeds(currentPage);
      // console.log(nextCats)
      setCats(cats.concat(nextCats));
      setIsLoading(false);
    }
    fetchList();
  }, [currentPage]);
  if (!cats) { 
    return null;
  }

  const addFavorite = (id) => {
  setFavorites(favorites.concat(id))
  }

  return (
    <div className="CatWrap">
      <ul className="Cats">
        {cats.map((cat, index) => (
          <li key={index} className="Cat">
            {/* <a href={cat.wikipedia_url} target="_blank"> */}
              <span className="Thumb">
                <img className="Image" src={cat.image ? cat.image.url : 'https://http.cat/404'} />
              </span>
              {/* <span className="Name">{cat.name}</span> */}
            {/* </a> */}
            <QuickButtonGroup addFavorite={addFavorite} id={cat.id}/>
          </li>
        ))}
      </ul>
      <button onClick={() =>{setCurrentPage(currentPage + 1)}}>더보기</button>
    </div>
  );
};

export default Cats;
