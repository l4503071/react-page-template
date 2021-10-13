import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";

export default function Header() {
  console.log("render header");
  const menuList = useSelector((state) => state.common.menuList);
  return (
    <div className="menu">
      {menuList.map((menu) => {
        return (
          <Link key={menu.path} to={menu.path} className="menu__item">
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
}
