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
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [carouselModal, setCarouselModal] = React.useState<boolean>(false);
    const ref = React.useRef<HTMLDivElement>(null);
    const [inputFieldUrl, setInputFieldUrl] = React.useState<string>("");

    const handleOpen = () => {
        setOpen(true);
        setInputFieldUrl(window.location.href);
    };

    const handleClose = () => setOpen(false);

    const handleCarouselModalOpen = () => setCarouselModal(true);
    const handleCarouselModalClose = () => setCarouselModal(false);

    const handleChangeTextFeild = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputFieldUrl(event.target.value);
    }

    const copyLinkHandler = () => {
        navigator.clipboard.writeText(inputFieldUrl);
    }

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
                    <Box sx={homeStyles.carouselImage} component={"img"} src={carouselBigImg} alt="carousel-img" ref={ref} />
                    <Stack sx={homeStyles.smallImgsContainer}>
                        <Box sx={homeStyles.carouselSmallImg} component={"img"} src={carouselSmallImg} alt="carousel-small-img" />
                        <Box sx={homeStyles.carouselSmallImg} component={"img"} src={carouselSecondSmallImg} alt="carousel-small-img" />
                        <Box sx={{ ...homeStyles.btnContainer, ...homeStyles.btnContainerOne }} onClick={handleCarouselModalOpen}>
                            <Box component={"img"} alt="view-all-photos" sx={homeStyles.photoImg} src={viewAllPhotos} />
                            <Typography sx={homeStyles.viewAllPhotos}>View all photos</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
            <Modal open={open} onClose={handleClose}>
                <Box sx={homeStyles.modalStyle}>
                    <Box sx={homeStyles.headingCloseIconContainer}>
                        <Typography sx={homeStyles.modalTitle}>
                            Share this Property
                        </Typography>
                        <CloseIcon sx={homeStyles.closeIcon} onClick={handleClose} />
                    </Box>
                    <Box sx={homeStyles.modalContentContainer}>
                        <Box sx={homeStyles.copyLinkContainer} onClick={copyLinkHandler}>
                            <Typography sx={homeStyles.copyLinkText}>Copy Link</Typography>
                            <LinkIcon sx={homeStyles.linkIcon} />
                        </Box>
                        <TextField onChange={handleChangeTextFeild} sx={homeStyles.textfieldStyle} placeholder="https://www.ddreality.com/bricks..." value={inputFieldUrl} />
                        <Stack direction={"row"} gap={"10px"} >
                            <TwitterIcon sx={homeStyles.socialMediaIcon} />
                            <Box component={"img"} alt="facebook-img" marginTop={"5px"} src={FacebookIcon} sx={homeStyles.socialMediaIcon} />
                            <InstagramIcon sx={homeStyles.socialMediaIcon} />
                            <WhatsAppIcon sx={homeStyles.socialMediaIcon} />
                        </Stack>
                    </Box>
                </Box>
            </Modal>
            <Modal open={carouselModal}>
                <Box sx={homeStyles.modelBox}>
                    <Box sx={homeStyles.closeIconContainer}>
                        <CloseIcon onClick={handleCarouselModalClose} sx={homeStyles.closeIconOne} />
                    </Box>
                    <Box sx={homeStyles.modalContentContainerOne}>
                        <Box>
                            <Typography sx={homeStyles.modalTitleOne}>1 bedrooms1 baths in 9FV4+JP7, Syed Azam Colony, Vijaya Nagar Colony, Hyderabad,
                                Telangana 5000057, India
                            </Typography>
                            <Box sx={homeStyles.shareBtnContainer} onClick={handleOpen}>
                                <ShareIcon sx={homeStyles.icon} />
                                <Typography sx={homeStyles.viewAllPhotos}>Share</Typography>
                            </Box>
                        </Box>
                        <Carousel />
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default Home;