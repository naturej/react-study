import '../css/CatDetail.scss'
import { useEffect, useState } from 'react';
import { getCatDetail } from '../utils/api';

const CatDetail = (props) => {
  const [cats, setCat] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const cats = await getCatDetail(props.id);
      setCat(cats);
      console.log(cats);
    }
    fetchData();
  },[]);

  return (
    <div className="CatDetail">
      {cats.map((cat, index) => (
        <div key={index}>
          <span className="Thumb">
              <img className="Image" src={cat.url ? cat.url : 'https://http.cat/404'} />
            </span>
          <p>name : {cat.breeds[0].name}</p>
          <p>origin : {cat.breeds[0].origin}</p>
          <p>child friendly : {cat.breeds[0].child_friendly}</p>
          <p>dog friendly : {cat.breeds[0].dog_friendly}</p>
          <p>energy level : {cat.breeds[0].energy_level}</p>
        </div>
      ))}
    </div>
  );
}

export default CatDetail;