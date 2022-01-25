// import React from 'react';
import styled from 'styled-components'

export const ScrollStyle = styled.div`

width: 100vw;
overflow: hidden;
align-self: center;


.track {
    display: flex;
    width: calc(200px * 50);
    animation: scroll 100s linear infinite;
    
    .track:hover {
        animation-play-state: paused;
    }
    
    .slide {
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;

        perspective: 100px;
        overflow: hidden;

        .img {
            width: 198px;
            height: 198px;
            transition: transform 1s;
            border-radius: 50%;

            .img:hover {
                cursor: $surferCursor;
                animation: rotateSurfer 1s;
                animation-iteration-count: infinite;
                animation-timing-function: linear;
                transition: 1s linear all;
            }
        }
    }
}      



@keyframes scroll {
    0% {
        transform: translateX(0);

    }
    100% {
        transform: translateX(calc(-200px * 25));
    }
}

@keyframes rotateSurfer{
    0%{ transform: rotate(0deg); }
    25%{ transform: rotate(-4deg); }
    50%{ transform: rotate(0deg); }
    75%{ transform: rotate(4deg)}
    100%{ transform: rotate(0deg);}
}


`