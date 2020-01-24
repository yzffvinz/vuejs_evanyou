window.Dep = class Dep {
    constructor() {
        this.subscribers = new Set();
    }

    depend() {
        if (activeUpdate) {
            this.subscribers.add(activeUpdate)
        }
    }

    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

let activeUpdate;

function autorun(update) {
    function wrappedUpdate() {
        activeUpdate = wrappedUpdate;
        update();
        activeUpdate = null;
    }

    wrappedUpdate();
}


let dep = new Dep();

autorun(() => {
    dep.depend();
    console.log('updated');
})