import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styled from 'styled-components';

Carousel.propTypes = {
    children: PropTypes.array,
    isOnboarding: PropTypes.bool,
};

function Carousel(props) {
    const SliderContainer = styled.div`
      height: 100%;
      background-color: #454545;
      padding: 3rem;
    `;

    const settings = {
        dots: true,
        infinite: false,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Force carousel to show single slide on onboarding modal
    if (props.isOnboarding) {
        settings.slidesToShow = 1;
        settings.slidesToScroll = 1;
        settings.responsive = [];
    }

    return (
        <SliderContainer>
            <Slider {...settings}>{props.children}</Slider>
        </SliderContainer>
    );
}

export default Carousel;
