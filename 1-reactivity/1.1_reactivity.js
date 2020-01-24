function convert(obj) {
    Object.keys(obj).forEach(key => {
        let value = obj[key];
        Object.defineProperty(obj, key, {
            get() {
                console.log(`getting key "${key}": "${value}"`);
                return value;
            },
            set(v) {
                console.log(`setting key "${key}" to "${v}"`);
                value = v;
            }
        })
    })
}