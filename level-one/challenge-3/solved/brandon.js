let bool = true;

const fn = () => {
    if (bool) {
        return "It's good";
    } else {
        return "It's bad";
    }
};

console.log(fn());

const foo = () => {
    if (bool) {
        return "There's a snake in my boot!";
    } else {
        return "There's no snake in anyone's boot";
    }
};

console.log(foo());

// Expected result output to console:
// 'It's good'
// 'There's a snake in my boot!'