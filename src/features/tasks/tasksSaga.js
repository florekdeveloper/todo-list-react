import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { call, takeLatest, put, delay, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
        const tasks = yield select(selectTasks);
        console.log(tasks);
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}