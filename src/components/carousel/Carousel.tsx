// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useState } from "react";
import { carouselStyles } from "./Carousel.Styles";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const imagesData = [
    { imageId: 1, imageUrl: "https://www.srijanrealty.com/wp-content/uploads/2022/07/3-bhk-flat-in-kolkata.png", },
    { imageId: 2, imageUrl: "https://newprojects.99acres.com/projects/skyline_realty/skyline_emmanuel/images/fijku4vj_optOrig.png", },
    { imageId: 3, imageUrl: "https://i0.wp.com/prabhadeviproperties.com/wp-content/uploads/2021/05/5.jpg?resize=1000%2C712&ssl=1", },
    { imageId: 4, imageUrl: "https://i0.wp.com/prabhadeviproperties.com/wp-content/uploads/2021/05/11.jpg?resize=1086%2C720&ssl=1", },
]


const Carousel = () => {
    // const theme = useTheme();
    const [activeStep, setActiveStep] = useState<number>(0);
    const maxSteps = imagesData.length;

    const handleNext = () => {
        if (activeStep !== maxSteps - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep !== 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const listDotEventHandler = (carouselId: number) => {
        setActiveStep(carouselId - 1)
    }

    return (
        <Box sx={carouselStyles.main}>
            <AutoPlaySwipeableViews
                // axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {imagesData.length > 0 &&
                    imagesData.map((eachImgObj, index) => (
                        <Box key={eachImgObj.imageId} sx={carouselStyles.imgDiv}>
                            {/* {Math.abs(activeStep - index) <= 2 ? ( */}
                            <Box
                                component="img"
                                sx={carouselStyles.carouselImg}
                                src={eachImgObj.imageUrl}
                                alt="carousel_img"
                            />
                            {/* ) : null} */}
                        </Box>
                    ))}
            </AutoPlaySwipeableViews>
            <Box sx={carouselStyles.buttonDiv}>
                <Button onClick={handleBack} sx={carouselStyles.buttons} disabled={activeStep === 0}>
                    <KeyboardArrowLeft sx={{ ...carouselStyles.icons, color: activeStep === 0 ? "#b3b0aa" : "#fff" }} />
                </Button>
                <Button onClick={handleNext} sx={carouselStyles.buttons} disabled={activeStep === maxSteps - 1}>
                    <KeyboardArrowRight sx={{ ...carouselStyles.icons, color: activeStep === maxSteps - 1 ? "#b3b0aa" : "#fff" }} />
                </Button>
            </Box>
            {/* <MobileStepper
                sx={carouselStyles.stepper}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                backButton={undefined}
                nextButton={undefined}
            ></MobileStepper> */}
            <Box component="ul" sx={carouselStyles.sliderNav}>
                {imagesData.map(eachCarousel => (
                    <Box component="li" onClick={() => listDotEventHandler(eachCarousel.imageId)} key={eachCarousel.imageId} sx={{ ...carouselStyles.dotContainer, ...(eachCarousel.imageId - 1 === activeStep && carouselStyles.activeDotStyle) }}></Box>))}
            </Box>
        </Box>
    );
};

export default Carousel;