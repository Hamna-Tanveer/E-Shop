import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("eventCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("eventCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase("eventCreateFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    //Get All events
    .addCase("getAllEventsRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllEventsSuccess", (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
      state.success = true;
    })
    .addCase("getAllEventsFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // delete event

    .addCase("deleteEventRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteEventSuccess", (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.message = action.payload;
    })
    .addCase("deleteEventFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    .addCase("clearSuccess", (state) => {
      state.success = false;
    })
    // to null errors
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
