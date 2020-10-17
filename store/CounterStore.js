import { observable, action, makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";
import { create, persist } from "mobx-persist";

class CounterStore {
  @persist @observable count = 1;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  increment() {
    this.count += 1;
  }

  @action
  decrement() {
    this.count -= 1;
  }
}

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

const counterStore = new CounterStore();

export default counterStore;

hydrate("counterStore", counterStore).then(() =>
  console.log("counter has been hydrated")
);
