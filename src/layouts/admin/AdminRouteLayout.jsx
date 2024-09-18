//Admin Components
import Sidebar from "../../components/admin/sidebar/Sidebar";

const AdminRouteLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default AdminRouteLayout;
