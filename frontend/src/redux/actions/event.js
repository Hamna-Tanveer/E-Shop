import axios from "axios";
import { server } from "../../server";

//create-event
export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config,
    );
    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

//get all events
export const getAllEvents = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllEventsRequest",
    });
    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);

    dispatch({
      type: "getAllEventsSuccess",
      payload: data.events,
    });

    dispatch({
      type: "clearSuccess",
    });
  } catch (error) {
    dispatch({
      type: "getAllEventsFail",
      payload: error.response.data.message,
    });
  }
};

//delete event

export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      { withCredentials: true },
    );
    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFail",
      payload: error.response.data.message,
    });
  }
};
