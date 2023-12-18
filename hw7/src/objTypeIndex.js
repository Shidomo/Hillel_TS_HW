var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var areAllValuesNumbers = function (obj) {
    for (var key in obj) {
        if (key !== "name" && typeof obj[key] !== "number") {
            return false;
        }
    }
    return true;
};
var myObject = { key1: 42, key2: 13 };
var result = areAllValuesNumbers(__assign({ name: "пример" }, myObject));
console.log(result);
