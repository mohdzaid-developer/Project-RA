import "./popUp.scss";

//React hooks
import { useEffect, useState } from "react";

//Components
import ConfirmationPopUp from "./component/Confirmation/ConfirmationPopUp";

const PopUp = () => {
  const [isActive, setIsActive] = useState(false);
  const [data,setData]=useState(null)
  useEffect(() => {
    window.customPopUp = {
      Close: () => {
        setIsActive(false);
      },
      Open: () => {
        setIsActive(true);
      },
      Confirm: (items) => {
        setData(items)
        setIsActive(true);
      },
    };
  }, []);

  return (
    <div
      className="pop-up"
      style={{ display: `${isActive == false ? "none" : "flex"}` }}
    >
      <div className="content-show">
      <ConfirmationPopUp
        message={data?.message}
        handleAction={data?.handleAction}
        handleCancel={data?.handleCancel}
        isLoading={data?.isLoading}
      />
      </div>
    </div>
  );
};

export default PopUp;
