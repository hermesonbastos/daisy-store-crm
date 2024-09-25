import * as FaIcons from "react-icons/fa";

export const NavBarData = [
  {
    title: "Produtos",
    path: "/products",
    icon: <FaIcons.FaTshirt style={{ color: "#C4344C" }} />,
    cName: "nav-text",
    onClick: () => {},
  },
  {
    title: "Pedidos",
    path: "/orders",
    icon: <FaIcons.FaShoppingCart style={{ color: "#C4344C" }} />,
    cName: "nav-text",
  },
  {
    title: "Categorias",
    path: "/categories",
    icon: <FaIcons.FaTag style={{ color: "#C4344C" }} />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <FaIcons.FaSignOutAlt style={{ color: "#C4344C" }} />,
    cName: "nav-text",
  },
];
