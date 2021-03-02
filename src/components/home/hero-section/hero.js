import React, {useState} from 'react';
import './hero.scss';
import HeroSlider, {
    Slide,
    Nav,
    SideNav,
    MenuNav,
    ButtonsNav,
    AutoplayButton,
    OverlayContent,
    OverlayContainer
} from 'hero-slider';

import GradientOverlay from '../gradient-overlay/overlay';
import MovieDataContainer from "../movie-data-container/MovieDataContainer";

const Hero = (props) => {
    return (
        <HeroSlider
            slidingAnimation="fade"
            orientation="horizontal"
            initialSlide={1}
            // onBeforeChange={(previousSlide, nextSlide) =>
            //     console.log("onBeforeChange", previousSlide, nextSlide)}
            // onChange={(nextSlide) => console.log("onChange: ", nextSlide)}
            // onAfterChange={(nextSlide) => console.log("onAfterChange: ", nextSlide)}
            style={{
                backgroundColor: '#000'
            }}
            settings={{
                slidingDuration: 500,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
                height: "100vh",
                shouldSlideOnArrowKeypress: true,
            }}
        >
            {props.value.map((val) => {
                return <div className="slider-wrapper" key={val.id}>
                    <Slide
                        background={{
                            backgroundColor: '',
                            backgroundBlendMode: "luminosity",
                            backgroundImage: val.poster_image_link,
                            // backgroundImage: "http://static.bunnycdn.ru/i/cache/images/8/86/86a0c794d7bb48e8706a69c45d2cc389.jpg",
                            backgroundAnimation: "zoom"
                        }}
                    >
                        <OverlayContainer>
                            <MovieDataContainer
                                data={val}
                            />
                        </OverlayContainer>
                    </Slide>
                </div>
            })}

        </HeroSlider>
    );
};

export default Hero;