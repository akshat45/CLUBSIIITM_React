import  * as api from '../Api/index';
import * as actionTypes  from '../Constants/actionTypes';

const getClubs = () => async (dispatch) => {

    try {
        const { data } = await api.getClubs();
        const action = {
            type: actionTypes.CLUBS,
            payload: data.clubs
        }
    
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

};

const getClub = (clubId) => async (dispatch) =>{
    
    try {
        const { data } = await api.getClub(clubId);
        const action = {
            type: actionTypes.CLUB,
            payload: data.club
        }
    
        dispatch(action);
    }
    catch (error) {
        console.log(error);
    }
};

const patchClub = (clubId, updateInfo) => async (dispatch) => {

    try {
        const { data } = await api.patchClub(clubId, updateInfo);
        const action = {
            type: actionTypes.PATCH,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

const postEvent = (clubId, newEvent) => async (dispatch) => {

    try {
        const { data } = await api.postEvent(clubId, newEvent);
        const action = {
            type: actionTypes.EVENT,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

const postApproval = (clubId, approval) => async (dispatch) => {

    try {
        const { data } = await api.postApproval(clubId, approval);
        const action = {
            type: actionTypes.APPROVAL,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};

const removeMember = (clubId, studentId) => async (dispatch) => {

    try {
        const { data } = await api.removeMember(clubId, studentId);
        const action = {
            type: actionTypes.REMOVE,
            payload: data
        }

        dispatch(action);
    } catch (error) {
        console.log(error);
    }

};