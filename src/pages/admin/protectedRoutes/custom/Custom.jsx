import "./custom.scss";

//Assets
import dashboard from "@/assets/dashboard.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

const Custom = () => {
  return (
    <section className="custom-container">
      <AdminNavbar title="Custom Trips" image={dashboard} />
    </section>
  );
};

export default Custom;
