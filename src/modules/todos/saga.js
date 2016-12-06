import { takeEvery, takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import { getTodos } from '../../services/resource';

function* watchers(a) {
  yield [
    takeLatest("todos/get", fetchTodos)
  ]
}

function* fetchTodos(action) {
  try {
    const payload = yield call(getTodos, action.payload);
    yield put({
      type: "todos/get/success",
      payload: payload
    });
  } catch (e) {
    yield put({
      type: "todos/get/fail",
      payload: {msg: e}
    });
  }
}

export default function*(){
  yield fork(watchers);
  yield put({
    type:'todos/get',
    payload:{
      test:"get some todos initially"
    }
  });
}
