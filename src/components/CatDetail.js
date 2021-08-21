import '../css/CatDetail.scss'
// import ReactStars from "react-rating-stars-component"
import StarRatings from "react-star-ratings"
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
          <div className="Info">
            <div>name : {cat.breeds[0].name}</div>
            <div>origin : {cat.breeds[0].origin}</div>
            <div className="ability"><span>energy level : </span><StarRatings className="star" rating={cat.breeds[0].energy_level} starDimension="20px" starSpacing="2px" /></div>
            <div className="ability"><span>child friendly : </span><StarRatings className="star" rating={cat.breeds[0].child_friendly} starDimension="20px" starSpacing="2px" /></div>
            <div className="ability"><span>dog friendly : </span><StarRatings className="star" rating={cat.breeds[0].dog_friendly} starDimension="20px" starSpacing="2px" /></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CatDetail;