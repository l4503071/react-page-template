import { useState, useEffect } from "react";
class Trigger {
  constructor() {
    this.subscribers = [];
    this.list = [];
  }

  subscribe(f) {
    this.subscribers.push(f);
  }

  unsubscribe(f) {
    const index = this.subscribers.findIndex((_) => _ === f);
    if (index >= 0) {
      this.subscribers.splice(index, 1);
    }
  }

  trigger() {
    this.subscribers.forEach((_) => _(this.list));
  }

  push(data) {
    this.list = [...this.list, data];
    this.trigger();
  }
}

const instance = new Trigger();

export function useTrackData() {
  const [list, setList] = useState([]);
  useEffect(() => {
    instance.subscribe(setList);
  }, []);
  return {
    list,
  };
}

export function onAppear(data) {
  instance.push({
    time: Date.now(),
    msg: `索引(${data.index}) 出现了`,
  });
}

export function onDisappear() {
  // do nothing
}
