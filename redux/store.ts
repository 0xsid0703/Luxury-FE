// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./slices/artist.slice";
import cardReducer from "./slices/card.slice";
import languageReducer from "./slices/language.slice";
import cardstackReducer from "./slices/cardstack.slice";
import userReducer from "./slices/user.slice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    artist: artistReducer,
    card: cardReducer,
    language: languageReducer,
    cardstack: cardstackReducer,
    user: userReducer,
  },
});

export default store;
