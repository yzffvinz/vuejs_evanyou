// Dep class
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

let activeUpdate
let dep = new Dep()

// observe function
function observe(obj) {
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            get() {
                dep.depend();
                return value
            },
            set(v) {
                value = v
                dep.notify();
            }
        })

    })
}

function autorun(update) {
    function wrappedUpdate() {
        activeUpdate = wrappedUpdate
        update()
        activeUpdate = null
    }
    wrappedUpdate();
}


const state = {
    count: 0
}

observe(state)

autorun(() => {
    console.log(`state.update is changed: ${state.count}`)
})


