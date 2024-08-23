import { Subject } from 'rxjs';

export type EventBusData = {
  key: string;
  val?: {
    payload: any;
    options?: any;
  };
};

export type Dispatcher = (
  key: string,
  val?: {
    payload: any;
    options?: any;
  },
) => void;

export interface DispatcherReturnType {
  bus: Subject<EventBusData>;
  dispatch: Dispatcher;
}
