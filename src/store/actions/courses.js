import {
  FETCH_COURSES,
  MESSAGE_COURSE,
  STATUS_COURSES,
  WATCH_COURSE,
} from "constants/types/courses";

export const statusCourses = (status) => ({
  type: STATUS_COURSES,
  payload: status,
});

export const fetchCourses = (status) => ({
  type: FETCH_COURSES,
  payload: status,
});
export const watchCourse = (status) => ({
  type: WATCH_COURSE,
  payload: status,
});
export const messageCourse = (status) => ({
  type: MESSAGE_COURSE,
  payload: status,
});
