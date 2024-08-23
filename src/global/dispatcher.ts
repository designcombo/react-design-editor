import { Subject } from "rxjs";
import {
  Dispatcher,
  EventBusData,
  DispatcherReturnType,
} from "../interfaces/rxjs";

function createDispatcher(): DispatcherReturnType {
  const bus = new Subject<EventBusData>();
  const dispatch: Dispatcher = (key, val) => bus.next({ key, val });
  return { bus, dispatch };
}

export const dispatcher = createDispatcher();

export { filter } from "rxjs";
