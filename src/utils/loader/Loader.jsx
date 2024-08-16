import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Watch
        radius="35"
        color="#fefae0"
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
