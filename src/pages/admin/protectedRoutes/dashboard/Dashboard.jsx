import "./dashboard.scss";

//Assets
import dashboard from "@/assets/dashboard.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <AdminNavbar title="Dashboard" image={dashboard} />
    </section>
  );
};

export default Dashboard;
