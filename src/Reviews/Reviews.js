import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import Modal from '../UI/Modal';
import { TextField, Button } from '@mui/material';
import './avatar.jpeg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { putData, getData } from '../ultility/handleAWSData';

import AWS from 'aws-sdk';
AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(72, 39, 182)'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
function Reviews() {
    const [isAddingReview, setIsAddingReview] = useState(false);
    const [reviewerName, setReviewerName] = useState('');
    const [reviewerTitle, setReviewerTitle] = useState('');
    const [reviewerContent, setReviewerContent] = useState('');
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        const retrieveData = async () => {
            setReviewList(await getData('personal_review',));
        }
        retrieveData();
    }, [])

    const handleInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        switch (field) {
            case 'name':
                setReviewerName(value);
                break;
            case 'title':
                setReviewerTitle(value);
                break;
            case 'content':
                setReviewerContent(value);
                break;
            default:
                console.log('error');
        }
    }

    const handleShowReviewForm = () => {
        setIsAddingReview(!isAddingReview);
    }

    const handleAddReview = async () => {
        const newReview = {
            review_id: String(reviewList.length),
            name: reviewerName,
            occupation: reviewerTitle,
            review: reviewerContent,
        }
        await putData('personal_review', newReview);
        const newReviewList = await getData('personal_review',)
        setReviewList(newReviewList);

        setIsAddingReview(false)
        setReviewerName('');
        setReviewerTitle('');
        setReviewerContent('');
    }

    return (
        <ReviewsContainer className='page' name="REVIEWS">
            <Modal isExist={isAddingReview} onclickModal={handleShowReviewForm} />
            <ReviewTitle>What people think about me</ReviewTitle><ThemeProvider theme={theme}>
                <ReviewForm isAddingReview={isAddingReview}>
                    <h2 style={{ 'color': 'rgb(72, 39, 182)' }}>Add Review</h2>
                    <TextField id="standard-basic" label="Name" variant="standard" onChange={handleInput} name="name" value={reviewerName} />
                    <TextField id="standard-basic" label="Occupation or title" variant="standard" onChange={handleInput} name="title" value={reviewerTitle} />
                    <TextField
                        id="filled-multiline-static"
                        label="Your thought"
                        multiline
                        rows={4}
                        variant="filled"
                        onChange={handleInput}
                        name="content"
                        value={reviewerContent}
                    />
                    <Button variant="contained" onClick={handleAddReview}> Add Review</Button>
                </ReviewForm>
            </ThemeProvider>
            <ReviewListContainer>

                <ReviewList>
                    <AddReviewButton onClick={handleShowReviewForm}>
                        +
                    </AddReviewButton>
                    {reviewList && reviewList.map(review => (
                        <Card>
                            <CardImage src="https://github.com/donggo-git/portfolio/blob/main/src/Reviews/avatar.jpeg?raw=true"></CardImage>
                            <h1>{review.name}</h1>
                            <p>{review.occupation}</p>
                            <p>{review.email}</p>
                            <br></br>
                            <p>{review.review}</p>
                        </Card>
                    ))}
                </ReviewList>
            </ReviewListContainer>
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
const AddReviewButton = styled.button`
    align-self: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    font-size: 20px;
    background-color: #fff;
    margin: 10px;
    :hover{
        opacity: 0.8;
    }
`

const ReviewListContainer = styled.div`
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none;
`

const ReviewList = styled.div`
    display: flex;
    align-items: start;
    width: fit-content;
`
const Card = styled.div`
    background-color: #fff;
    height: auto;
    width: 300px;
    color: black;
    padding: 20px;
    border-radius: 10%;
    margin: 0 10px;
`
const CardImage = styled.img`
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
`

const ReviewForm = styled.div`
    position: fixed;
    width: fit-content;
    height: 70%;
    padding: 0 50px;
    background-color: #fff;
    z-index: 2;
    top: 50%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-50%,-50%) scale(${props => props.isAddingReview ? '1' : '0'});
    opacity: ${props => props.isAddingReview ? '1' : '0'};
    transition: all 0.4s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export default Reviews