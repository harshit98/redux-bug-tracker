import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';
 
const unsubscribe = store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch(bugAdded("New frontend bug description"));

store.dispatch(bugAdded("Added new bug related to excercise"));

store.dispatch(bugResolved(2));

unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store.getState());
