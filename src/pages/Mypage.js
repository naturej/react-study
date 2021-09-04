import { Link } from "react-router-dom";
import MyCats from "../components/MyCats";
import "../css/MyPage.scss"

const Mypage = () => {
  const usercat = localStorage.getItem('usercat')

  const cats = JSON.parse(usercat);
  console.log(cats);

  return (
    <main>
      <h1>My Page</h1>
      {/* <MyCats /> */}
      <p> 내가 등록한 고양이 목록 </p>
      {cats ? cats.map((cat, index) => (
          <li key={index} className="Cat">
            {cat.catName}
          </li>
        )): '등록된 고양이가 없습니다.' }
      <Link className="regBtn" to={`/catreg`}>+</Link>
    </main>
  );
};
export default Mypage;
