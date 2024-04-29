import { Box, Modal, Stack, TextField, Typography } from "@mui/material";
import homeStyles from "./Home.Styles";
import ShareIcon from '@mui/icons-material/Share';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '../../assets/fbImg.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import carouselBigImg from "../../assets/carouselImg.png";
import carouselSmallImg from "../../assets/carouselSmallImg.png";
import carouselSecondSmallImg from "../../assets/carouselSecondSmallImg.png";
import viewAllPhotos from "../../assets/viewAllPhotosImg.png";
import React from "react";


const Home = () => {
    const [open, setOpen] = React.useState(false);
    const [carouselModal, setCarouselModal] = React.useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCarouselModalOpen = () => setCarouselModal(true);
    const handleCarouselModalClose = () => setCarouselModal(false);

    return (
        <Box sx={homeStyles.homeContainer}>
            <Box sx={homeStyles.childContainer}>
                <Box sx={homeStyles.topContainer}>
                    <Typography sx={homeStyles.heading}>2Bedrooms 2Baths</Typography>
                    <Stack sx={homeStyles.topBottomContainer}>
                        <Typography sx={homeStyles.address}>in Southend Park Apartment, LB Nagar, Hyderabad, India</Typography>
                        <Box sx={homeStyles.btnsContainer}>
                            <Box onClick={handleOpen} sx={homeStyles.btnContainer}>
                                <ShareIcon sx={homeStyles.icon} />
                                <Typography>Share</Typography>
                            </Box>
                            <Box sx={homeStyles.btnContainer}>
                                <FavoriteBorderIcon sx={homeStyles.icon} />
                                <Typography>Favorite</Typography>
                            </Box>
                            <Box sx={homeStyles.btnContainer}>
                                <SearchIcon sx={homeStyles.icon} />
                                <Typography>Browse nearby listings</Typography>
                            </Box>
                        </Box>
                    </Stack>

                </Box>
                <Box sx={homeStyles.bottomContainer}>
                    <Box sx={homeStyles.carouselImage} component={"img"} src={carouselBigImg} alt="carousel-img" />
                    <Stack direction={{ xs: "row", lg: "column" }} gap={{ xs: "0px", sm: "25px" }} alignItems={"center"} position={"relative"} justifyContent={{ xs: "space-between", sm: "flex-start" }}>
                        <Box sx={homeStyles.carouselSmallImg} component={"img"} src={carouselSmallImg} alt="carousel-small-img" />
                        <Box sx={homeStyles.carouselSmallImg} component={"img"} src={carouselSecondSmallImg} alt="carousel-small-img" />
                        <Box sx={{ ...homeStyles.btnContainer, ...homeStyles.btnContainerOne }}>
                            <Box component={"img"} alt="view-all-photos" sx={homeStyles.photoImg} src={viewAllPhotos} />
                            <Typography sx={homeStyles.viewAllPhotos}>View all photos</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={homeStyles.modalStyle}>
                    <Box sx={homeStyles.headingCloseIconContainer}>
                        <Typography sx={homeStyles.modalTitle}>
                            Share this Property
                        </Typography>
                        <CloseIcon sx={homeStyles.closeIcon} onClick={handleClose} />
                    </Box>
                    <Box sx={homeStyles.modalContentContainer}>
                        <Box sx={homeStyles.copyLinkContainer}>
                            <Typography sx={homeStyles.copyLinkText}>Copy Link</Typography>
                            <LinkIcon sx={homeStyles.linkIcon} />
                        </Box>
                        <TextField sx={homeStyles.textfieldStyle} placeholder="https://www.ddreality.com/bricks..." />
                        <Stack direction={"row"} gap={"10px"} >
                            <TwitterIcon sx={homeStyles.socialMediaIcon} />
                            <Box component={"img"} alt="facebook-img" marginTop={"5px"} src={FacebookIcon} sx={homeStyles.socialMediaIcon} />
                            <InstagramIcon sx={homeStyles.socialMediaIcon} />
                            <WhatsAppIcon sx={homeStyles.socialMediaIcon} />
                        </Stack>
                    </Box>
                </Box>
            </Modal>
            <Modal
                open={carouselModal}
            >
                <Box sx={homeStyles.ModelBox2}>
                    <Box sx={homeStyles.ClearingBox}>
                        <CloseIcon onClick={handleCarouselModalClose} sx={homeStyles.closeIcon} />
                    </Box>
                    <Box>
                        <Box
                            component={"img"}
                            src={AddressImg}
                            sx={homeStyles.AddressImage}
                        />
                    </Box>
                    <Box sx={{ m: "1%" }}>
                        <Box component={Button} sx={homeStyles.shareButtonMOdel}>
                            <Box component={"img"} src={ShareImage} />
                        </Box>
                    </Box>
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        style={{
                            overflowY: "scroll",
                            height: "40vh",
                            marginTop: "2%",
                        }}
                    >
                        {ImagesData.map((Image) => {
                            return (
                                <SwiperSlide key={Image}>
                                    <Box
                                        component={"img"}
                                        src={Image}
                                        sx={{ height: "45vh", width: "100%" }}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Box>
            </Modal>
        </Box>
    )
}


export default Home;