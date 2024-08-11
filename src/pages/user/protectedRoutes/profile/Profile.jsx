import "./profile.scss";

import profileImg from "@/assets/profile.webp";

const Profile = () => {
  return (
    <div className="profile">
      <div className="content">
        <h2>Profile</h2>
      </div>
      <div className="form-container">
        <div className="form-container-left">
          <img src={profileImg} alt="" />
        </div>
        <div className="form-container-right">
          <div>
            <label htmlFor="">Name : </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Email : </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Phone : </label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
