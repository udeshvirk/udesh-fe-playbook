function debounce(fn, timeout) {
    let timeoutHandle = null;
    return function (...params) {
        if (timeoutHandle) {
            clearTimeout(timeoutHandle);
        }
        timeoutHandle = setTimeout(function () {
            fn.apply(this, params)
            timeoutHandle = null;
        }, timeout);
    }
}