import { Link } from "react-router-dom";
import MyCats from "../components/MyCats";
import "../css/MyPage.scss"

const Mypage = () => {
  const usercat = localStorage.getItem('usercat');
  return (
    <main>
      <h1>My Page</h1>
      {/* <MyCats /> */}
      내가 등록한 고양이 목록 : {usercat}
      <Link className="regBtn" to={`/catreg`}>+</Link>
    </main>
  );
};
export default Mypage;
