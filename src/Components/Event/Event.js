import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';

import { baseUrl } from '../../Constants/baseUrl';
import { getEvent, delEvent } from '../../Actions/event';
import Loader from '../Loader/Loader';

const Event = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { eventId } = useParams();

    const events = useSelector(state => state.events);
    const clubs = useSelector(state => state.clubs);

    const event = events[eventId];

    const handleDelete = () => {
        var clubId = null;
        Object.entries(clubs).forEach(([key, value]) => {
            clubs[key].eventids?.forEach((item) => {
                if(item._id == eventId)
                clubId = key;
            });
        });

        dispatch(delEvent(clubId, eventId));
        history.goBack();
    };

    useEffect(() => {
        if (!event)
            dispatch(getEvent(eventId));
    }, [dispatch]);

    return (
        (event !== undefined) ?
            <div className='profile'>
                <h1 style={{ "text-align": "center" }}>Event Details</h1>
                <div class="container">
                    <div class="row">
                        <div class="col mt-5 text-center">
                            <div class="mt-4 h4">
                                <img src={`${baseUrl}/image/${event.image}`} alt="" width="400px" height="300px" />
                            </div>
                        </div>

                        <div class="col mt-5 text-center">

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Name : </span>
                                {event.name}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Date : </span>
                                { 
                                    `${event.date.substring(8,10)}/${event.date.substring(5,7)}/${event.date.substring(0,4)}`
                                }
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Time : </span>
                                {`${event.date.substring(11,13)} : ${event.date.substring(14,16)} (IST)` }
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Description : </span>
                                {event.description}
                            </div>

                            <div class="mt-4 h4">
                                <span class="font-weight-bold">Event Meetlink : </span>
                                <a target="_blank" href={`${event.meetlink}`}>
                                    Link
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row mt-5">
                        <Link to={`${event._id}/edit`} class="offset-md-3 col-md-2 btn btn-primary btn-lg">
                            Edit Event
                        </Link>
                        <button class="col-md-2 offset-md-2 btn btn-danger btn-lg" onClick={handleDelete}>
                            Delete Event
                        </button>
                    </div>
                </div>
            </div>
            : <Loader margin />
    )
};

export default Event;
