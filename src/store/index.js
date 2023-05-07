//   <Badge pill bg="danger">
//     NEW!
//   </Badge>
import { act } from "react-dom/test-utils";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function handleCounterLogic(state, action) {}

const persistentCounterReducer = (state = { persistentCount: 0 }, action) => {
  if (action.type === "increment") {
    return {
      persistentCount: state.persistentCount + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      persistentCount: state.persistentCount - 1,
    };
  }
  return state;
};

const newBadgeReducer = (
  state = {
    badge: true,
  },
  action
) => {
  if (action.type === "clearNewBadge") {
    return {
      badge: false,
    };
  }
  if (action.type === "makeNewBadge") {
    return {
      badge: true,
    };
  }

  return state;
};

// const nonPersistentCounterReducer = (
//   state = { nonPersistentCounter: 0 },
//   action
// ) => {
//   if (action.type === "increment") {
//     return {
//       nonPersistentCounter: state.nonPersistentCounter + 1,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       nonPersistentCounter: state.nonPersistentCounter - 1,
//     };
//   } else {
//     return state;
//   }
// };

const persistConfig = {
  key: "root",
  storage,
};

const persistedCounterReducer = persistReducer(
  persistConfig,
  persistentCounterReducer
);

const persistedNewBadgeReducer = persistReducer(persistConfig, newBadgeReducer);

const rootReducer = combineReducers({
  persistentCounter: persistedCounterReducer,
  newBadge: persistedNewBadgeReducer,
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export default store;
