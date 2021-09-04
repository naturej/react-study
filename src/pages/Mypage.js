import { Link } from "react-router-dom";
import MyCats from "../components/MyCats";
import "../css/MyPage.scss"

const Mypage = () => {
  return (
    <main>
      <h1>My Page</h1>
      <MyCats />
      <Link className="regBtn" to={`/catreg`}>+</Link>
    </main>
  );
};
export default Mypage;
