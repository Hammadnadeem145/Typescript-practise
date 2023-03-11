let mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
const search = mySearch("-1", "-4");
console.log(search);
export {};
