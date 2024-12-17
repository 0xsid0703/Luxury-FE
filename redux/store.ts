// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./slices/artist.slice";
import cardReducer from "./slices/card.slice";
import languageReducer from "./slices/language.slice";
import cardstackReducer from "./slices/cardstack.slice";
import userReducer from "./slices/user.slice";
import imagesReducer from "./slices/images.slice";
import groupReducer from "./slices/group.slice";
import subGroupReducer from "./slices/subGroup.slice";
import typeReducer from "./slices/type.slice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    artists: artistReducer,
    cards: cardReducer,
    languages: languageReducer,
    cardstacks: cardstackReducer,
    users: userReducer,
    images: imagesReducer,
    groups: groupReducer,
    subGroups: subGroupReducer,
    types: typeReducer,
  },
});

export default store;
