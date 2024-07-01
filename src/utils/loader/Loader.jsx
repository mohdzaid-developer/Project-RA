import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Watch
        radius="35"
        color="#0557A2"
        ariaLabel="watch-loading"
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
