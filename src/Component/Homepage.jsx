import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

function Homepage(props) {
  const { Producdata } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          gap: "20px",
          width: "100%",
          height: "100%",
        }}
      >
        {Producdata.map((item) => (
          <ProductCard product={item} />
        ))}
      </Box>
    </>
  );
}

export default Homepage;
