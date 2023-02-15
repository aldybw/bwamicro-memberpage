/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_COURSES,
  MESSAGE_COURSE,
  STATUS_COURSES,
  WATCH_COURSE,
} from "constants/types/courses";

const initialState = {
  data: {},
  total: 0,
  status: "idle",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_COURSES:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_COURSES:
      return {
        ...state,
        data: action.payload?.reduce?.((acc, item) => {
          acc[item.course_id] = item;
          return acc;
        }, {}),
        total: action.payload.length,
        status: "ok",
      };

    case MESSAGE_COURSE:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };

    case WATCH_COURSE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            ...action.payload,
          },
        },
        status: "ok",
      };
    default:
      return state;
  }
}
