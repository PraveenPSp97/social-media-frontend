import { combineReducers } from "redux";
import posts from "./posts";
import signIn from "./signIn";
import user from "./user";

export const reducers = combineReducers({ posts, signIn, user });
