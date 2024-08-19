import "./profile.scss";
import profileImg from "@/assets/profile.png";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import {
  useUserGetProfileQuery,
  useUserProfilePicUploadMutation,
} from "@/redux/slice/user/api/userApiSlice";

const Profile = () => {
  const { data: profileDetails, isLoading: isProfileLoading } =
    useUserGetProfileQuery();

  const [imageUpload, { isLoading: isImageLoading }] =
    useUserProfilePicUploadMutation();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    convertToBase64(file);
  };

  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      await imageUpload(reader.result);
    };
  };

  return (
    <div className="profile">
      <div className="content">
        <h2>Profile</h2>
      </div>

      <div className="form-container">
        {isProfileLoading ? (
          <CircularProgressBar />
        ) : (
          <>
            <div className="form-container-left">
              <input
                type="file"
                className="changeImage"
                onChange={handleImageUpload}
              />
              {isImageLoading ? (
                <CircularProgressBar />
              ) : (
                <img
                  src={profileDetails?.data?.profilePic ?? profileImg}
                  alt=""
                />
              )}
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
                <input
                  type="text"
                  value={profileDetails?.data?.email}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="">Phone : </label>
                <input
                  type="text"
                  value={profileDetails?.data?.phone}
                  readOnly
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
