//Admin Components
import AdminNavbar from "../../components/admin/adminNavbar/AdminNavbar";
import Sidebar from "../../components/admin/sidebar/Sidebar";

const AdminRouteLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      <Sidebar />
      {children}
    </>
  );
};

export default AdminRouteLayout;
