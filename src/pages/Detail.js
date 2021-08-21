import CatDetail from "../components/CatDetail"
import { useHistory } from "react-router";
import { BiArrowBack } from "react-icons/bi"

const Detail = ({match}) => {
  // console.log(match.params.catid);
  const catid = match.params.catid;
  const history = useHistory();

  return (
    <main>
      <button className="backBtn" onClick={() => history.goBack()}>
        <BiArrowBack />
      </button>
      <CatDetail id={catid} />
    </main>
  );
};
export default Detail;
