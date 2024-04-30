export const carouselStyles = {
  main: {
    maxWidth: "100%",
    flexGrow: 1,
    position: "relative",
    fontStyle: "Inter",
    mt: "40px",
  },

  imgDiv: {
    borderRadius: "5px",
    height: { md: "490px", sm: "380px", xs: "300px", lg: "450px" },
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  carouselImg: { width: "100%", height: "100%", objectFit: "cover" },

  buttonDiv: {
    position: "absolute",
    top: "42%",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },

  buttons: { color: "white", fontWeight: "600" },

  icons: { fontSize: "38px" },

  stepper: {
    position: "absolute",
    bottom: "2%",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    bgcolor: "transparent",
    ".MuiMobileStepper-dot": {
      width: "7px",
      height: "7px",
      backgroundColor: "white",
      border: "2px solid transparent",
    },
    ".MuiMobileStepper-dotActive": {
      backgroundColor: "orange",
      outlineOffset: "2px",
      //   outline: "2px solid orange",
    },
    "& .MuiMobileStepper-dot": {
      margin: "0 5px",
    },
  },

  sliderNav: {
    display: "flex",
    columnGap: "0.5rem",
    position: "absolute",
    bottom: "1.5rem",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
    listStyle: "none",
    padding: 0,
  },

  dotContainer: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    backgroundColor: "transparent",
    opacity: 0.75,
    border: "1px solid #fff",
    transition: "all ease 0.5s",
    cursor: "pointer",
  },

  activeDotStyle: {
    border: "none",
    background: "green",
    transition: "all ease 1.5s",
    width: "1.9rem",
    height: "0.5rem",
    borderRadius: "10px",
  },
};
