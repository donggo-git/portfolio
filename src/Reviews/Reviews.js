import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import './avatar.jpeg';

function Reviews() {
    const reviewList = [
        {
            name: 'Kelvin Sung',
            occupation: 'CSS professor at UWB',
            email: 'kelvinsung@uw.edu',
            review: 'Dong is a nice person'
        }
    ]
    return (
        <ReviewsContainer className='page' name="SKILLS">
            <ReviewTitle>What people think about me</ReviewTitle>
            <ReviewList>
                {reviewList.map(review => (
                    <Card>
                        <CardImage src="https://github.com/donggo-git/portfolio/blob/main/src/Reviews/avatar.jpeg"></CardImage>
                        <h1>{review.name}</h1>
                        <p>{review.occupation}</p>
                        <p>{review.email}</p>
                        <br></br>
                        <p>{review.review}</p>
                    </Card>
                ))}
            </ReviewList>
        </ReviewsContainer>
    )
}

const ReviewsContainer = styled.div`
    background: linear-gradient(0deg, rgba(72, 39, 182, 0.63), rgba(72, 39, 182, 0.63)),
    linear-gradient(0deg, #5929F8, #5929F8);
    position: relative;
    padding-bottom: 30px;
`
const ReviewTitle = styled.h3`
    padding: 30px 0;
    padding-top: 80px;
    margin: 0 auto;
    width: fit-content;
    font-size: 32px;
    font-weight: 400px;
    @media screen and (max-width:1000px){
        padding-top: 30px;
        font-size: 25px;
    }
`
const ReviewList = styled.div`
    display: flex;
    justify-content: space-evenly;
    justify-item: center;
`
const Card = styled.div`
    background-color: #fff;
    height: auto;
    width: 200px;
    color: black;
    padding: 20px;
    border-radius: 10%;
`
const CardImage = styled.img`
    height: 100px;
    border-radius: 50%;
    border: 1px solid #333;
`

export default Reviews