import {
  AnyAction,
  CombinedState,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import common, { CommonState } from '../slices/common';
import loader, { LoaderState } from '../slices/loader';
import weather, {WeatherInterface} from './weatherReducer'

export interface IRootReducer {
  common: CommonState;
  loader: LoaderState;
  weather: WeatherInterface;
}

const rootReducer: Reducer<
  CombinedState<IRootReducer>,
  AnyAction
> = combineReducers({
  common,
  loader,
  weather,
});

export default rootReducer;