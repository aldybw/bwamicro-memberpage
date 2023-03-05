/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_ORDERS,
  MESSAGE_ORDER,
  STATUS_ORDERS,
} from "constants/types/orders";

const initialState = {
  data: {},
  total: 0,
  status: "idle",
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case STATUS_ORDERS:
      return {
        ...state,
        status: action.payload,
      };

    case FETCH_ORDERS:
      return {
        ...state,
        data: action.payload?.reduce?.((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {}),
        total: action.payload.length,
        status: "ok",
      };

    case MESSAGE_ORDER:
      return {
        ...state,
        message: action.payload,
        status: "error",
      };

    default:
      return state;
  }
}
