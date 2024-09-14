import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <TailSpin
        radius="1"
        color="#fefae0"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={true}
      />
    </div>
  );
};

export default Loader;
