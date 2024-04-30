const homeStyles = {
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    py: { xs: "25px", lg: "40px" },
    position: "relative",
  },

  childContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    width: { xs: "98%", sm: "95%", md: "90%", lg: "95%", xl: "75%" },
  },

  topContainer: {
    display: "flex",
    flexDirection: "column",
    gap: { xs: "10px", lg: "30px" },
  },

  heading: {
    fontSize: { xs: "1.8rem", sm: "2rem", md: "2rem", lg: "3rem" },
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#000929",
  },

  address: {
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
      md: "1.2rem",
      lg: "1.3rem",
      xl: "1.5rem",
    },
    fontWeight: "400",
    fontFamily: "Poppins",
    color: "#9094A2",
  },

  btnsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: { xs: "15px", sm: "20px" },
    flexWrap: "wrap",
  },

  btnContainer: {
    textTransform: "capitalize",
    fontSize: "1.5rem",
    fontWeight: "400",
    fontFamily: "Poppins",
    color: "#3F6B94",
    background: "#9FC5E9",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    height: "44px",
    px: { xs: "17px", sm: "20px" },
    cursor: "pointer",
  },

  icon: {
    width: "25px",
    height: "25px",
    color: "#3F6B94",
  },

  topBottomContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    alignItems: { xs: "flex-start", lg: "center" },
    justifyContent: "space-between",
    gap: { xs: "18px", lg: "0px" },
  },

  bottomContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    gap: { xs: "20px", lg: "0px" },
    justifyContent: "space-between",
  },

  carouselImage: {
    width: { xs: "100%", sm: "100%", lg: "65%", xl: "70%" },
    height: { xs: "300px", md: "500px", lg: "605px" },
  },

  smallImgsContainer: {
    display: "flex",
    flexDirection: { xs: "row", lg: "column" },
    gap: { xs: "0px", sm: "25px" },
    alignItems: "center",
    position: "relative",
    justifyContent: { xs: "space-between", sm: "flex-start" },
  },

  carouselSmallImg: {
    width: { xs: "48%", sm: "180px", lg: "380px" },
    height: { xs: "100px", lg: "290px" },
  },

  btnContainerOne: {
    background: "#ffffff",
    border: "1px solid #9FC5E9",
    color: "#000929",
    fontSize: "0.4rem",
    position: "absolute",
    bottom: { xs: "138px", lg: "20px" },
    right: "20px",
    fontWeight: "800",
  },

  photoImg: {
    width: "22px",
    height: "28px",
  },

  viewAllPhotos: {
    fontWeight: "800",
    fontSize: "0.9rem",
  },

  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "98%", sm: "350px", md: "350px" },
    bgcolor: "background.paper",
    border: "0px",
    boxShadow: "none",
    borderRadius: "10px",
  },

  headingCloseIconContainer: {
    py: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    px: "14px",
    borderBottom: "1px solid #BCBCC2",
  },

  modalTitle: {
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#000000",
  },

  closeIcon: {
    width: "22px",
    height: "22px",
    color: "#BCBCC2",
    cursor: "pointer",
  },

  modalContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    px: "18px",
    gap: "10px",
    pb: "40px",
    pt: "20px",
  },

  copyLinkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    alignSelf: "flex-end",
    cursor: "pointer",
  },

  copyLinkText: {
    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "Poppins",
    color: "#7AB5DA",
  },

  linkIcon: {
    width: "20px",
    height: "20px",
    color: "#7AB5DA",
  },

  textfieldStyle: {
    width: "100%",
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "18px",
      height: "44px",
    },
    input: {
      "&::placeholder": {
        color: "black",
        fontSize: "13px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #D5E6F5",
        borderRadius: "3px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #D5E6F5",
      },
      "&:hover fieldset": {
        borderColor: "#D5E6F5",
      },
    },
  },

  socialMediaIcon: {
    width: "20px",
    height: "20px",
    color: "#787885",
    cursor: "pointer",
  },

  modelBox: {
    position: { lg: "absolute" },
    top: { lg: "50%" },
    left: { lg: "50%" },
    transform: { lg: "translate(-50%, -50%)" },
    width: { xs: "100%", lg: "60%", xl: "45%" },
    backgroundColor: "rgba(0,0,0,0.7)",
    border: "0px",
    boxShadow: "none",
    borderRadius: "8px",
    pt: "12px",
    pb: "90px",
    height: { xs: "100vh", lg: "auto" },
  },

  closeIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    pr: 1.4,
  },

  closeIconOne: {
    width: "25px",
    height: "25px",
    color: "#fff",
    cursor: "pointer",
  },

  modalContentContainerOne: {
    px: { xs: "10px", sm: "20px", md: "30px" },
    pt: "15px",
  },

  modalTitleOne: {
    fontSize: { xs: "15px", sm: "18px" },
    fontWeight: "400",
    fontFamily: "Poppins",
    color: "#fff",
    mt: 2,
  },

  shareBtnContainer: {
    textTransform: "capitalize",
    fontSize: "1.5rem",
    fontWeight: "400",
    fontFamily: "Poppins",
    color: "#3F6B94",
    background: "#fff",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    height: "44px",
    px: "10px",
    cursor: "pointer",
    width: "95px",
    marginTop: "1.6%",
  },

  swiperImg: {
    height: "45vh",
    width: "100%",
  },
};

export default homeStyles;
