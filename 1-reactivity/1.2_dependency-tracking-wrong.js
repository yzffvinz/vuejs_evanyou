window.Dep = class Dep {
    constructor() {
        this.subscribers = []
    }
    depend(update) {
        this.subscribers.push(update);
    }
    notify() {
        this.subscribers.forEach(update => update());
    }
}


let dep = new Dep();

function autorun(update) {
    dep.depend(update);
}

autorun(() => {
    console.log(`A is depended`);
})

dep.notify();