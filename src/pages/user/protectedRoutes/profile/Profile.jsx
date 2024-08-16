import "./profile.scss";
import profileImg from "@/assets/profile.webp";

//Redux
import {
  useUserGetProfileQuery,
  useUserProfilePicUploadMutation,
} from "@/redux/slice/user/api/authUserApiSlice";

const Profile = () => {
  const { data: profileDetails, isLoading: profileLoading } =
    useUserGetProfileQuery();

  const [imageUpload] = useUserProfilePicUploadMutation();
  const handleFileChange = async (event) => {
    const formsData = new FormData();
    formsData.append("image", event.target.files[0]);
    console.log(event.target.files.buffer);
    const res = await imageUpload({ formsData });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    convertToBase64(file);
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const res = await imageUpload(reader.result);
    };
  };
  return (
    <div className="profile">
      <div className="content">
        <h2>Profile</h2>
      </div>
      <div className="form-container">
        <div className="form-container-left">
          <input
            type="file"
            className="changeImage"
            onChange={handleImageUpload}
          />
          <img src={profileDetails?.data?.profilePic ?? profileImg} alt="" />
        </div>
        <div className="form-container-right">
          <div>
            <label htmlFor="">Name : </label>
            <input
              type="text"
              value={profileDetails?.data?.fullName}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="">Email : </label>
            <input type="text" value={profileDetails?.data?.email} readOnly />
          </div>
          <div>
            <label htmlFor="">Phone : </label>
            <input type="text" value={profileDetails?.data?.phone} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
