import "./newsLetter.scss";

//Assets
import dashboard from "@/assets/dashboard.png";

//Components
import AdminNavbar from "@/components/admin/adminNavbar/AdminNavbar";

const NewsLetter = () => {
  return (
    <section className="admin-news-letter">
      <AdminNavbar title="News Letter" image={dashboard} />
    </section>
  );
};

export default NewsLetter;
