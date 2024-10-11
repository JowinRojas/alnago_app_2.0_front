// import InventoryHome from "./inventory";
import Login from "./login";

export default function Index() {
  // return <InventoryHome />;
  return <Login />;
}

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { checkLogin } from "../redux/slices/login/loginController";
// import InventoryHome from "./inventory";
// import Login from "./login";

// export default function Index() {
//   const [page, setPage] = useState(false);

//   const status = useSelector((state) => state.loginStatus.status);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkLogin());
//     if (status == "login") {
//       setPage(true);
//     } else {
//       setPage(false);
//     }
//   }, [status]);

//   return (
//     page ? <InventoryHome /> : <Login />
//   )
// }
