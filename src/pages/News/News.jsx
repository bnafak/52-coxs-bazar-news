import { useParams } from "react-router-dom";
import Header from "../Home/shared/Header/Header";
import RightSideNav from "../Home/shared/Navbar/RightSideNav/RightSideNav";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-4xl">News Detail</h2>
          <p>{id}</p>
        </div>

        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
