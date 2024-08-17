import "./confirmationPopUp.scss";
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

const ConfirmationPopUp = ({ message, handleAction,isLoading,handleCancel }) => {
  return (
    <div className="dialog">
      <div className="dialog-content">
        <div className="dialog-text">
          <span id="dialogMessage">{message}</span>
        </div>
      </div>
      <div className="dialog-actions">
        <button
          className="dialog-button dialog-button-yes"
          onClick={handleAction}
          disabled={isLoading}
        >
          {
            isLoading?<CircularProgressBar/>:"Yes"
          }
          
        </button>
        <button
          className="dialog-button dialog-button-no"
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            if(handleCancel){
              handleCancel()
            }
            window?.customPopUp?.Close()
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
