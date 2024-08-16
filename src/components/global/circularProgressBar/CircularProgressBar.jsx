// Mui Components
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const CircularProgressBar = ({
  color = "white",
  barSize = 20,
  thickness = 5,
  width = "20px",
  height = "20px",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width,
        height,
      }}
    >
      <CircularProgress
        size={barSize}
        thickness={thickness}
        sx={{
          color,
        }}
      />
    </Box>
  );
};

export default CircularProgressBar;
