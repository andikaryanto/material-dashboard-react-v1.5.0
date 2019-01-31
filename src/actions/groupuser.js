import { ADD_DATA, DELETE_DATA, FETCH_DATA } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:4100/m_groupuser';

export const createData = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, {title, body})
      .then(response => {
        dispatch(createDataSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createDataSuccess =  (data) => {
  return {
    type: ADD_DATA,
    payload: {
      _id: data._id,
      Name: data.Name,
      Description : data.Description
    }
  }
};

export const deleteDataSuccess = id => {
  return {
    type: DELETE_DATA,
    payload: {
      id
    }
  }
}

export const deleteData = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/delete/${id}`)
      .then(response => {
        dispatch(deleteDataSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchDatas = (posts) => {
  return {
    type: FETCH_DATA,
    posts
  }
};

export const fetchAllDatas = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchDatas(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};