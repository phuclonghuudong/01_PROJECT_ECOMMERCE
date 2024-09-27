import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([...PrivateRoutes, ...PublicRoutes]);
export default routes;
