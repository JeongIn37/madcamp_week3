import React, { useState, useEffect, Component } from "react";
import { Header } from '../header/index.js';
import { Link } from 'react-router-dom';

const ReviewList = () => {

    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        setReviewList([
            {
                id: 1,
                title: "용산아이맥스 1번 글",
                content: "내용 넣기 1번"
            },
    
            {
                id: 2,
                title: "용산아이맥스 2번 글",
                content: "내용 넣기 2번"
            },
    
            {
                id: 3,
                title: "용산아이맥스 3번 글",
                content: "내용 넣기 3번"
            }
        ])
    }, [ ])

    return(
        <div id='seatPage'>
                <p>용산 아이맥스</p>
                <table>
                    <thead>
                        <tr>
                            <td>글 번호</td>
                            <td>글 제목</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewList.map(item => {
                                return(
                                    <tr key={item.id}>
                                        <td>{ item.id }</td>
                                        <td>
                                            <Link to = {`/ReadReview/${item.id}`}>{item.title}</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }        
                    </tbody>
                </table>
            </div>
    )
}

export default ReviewList;