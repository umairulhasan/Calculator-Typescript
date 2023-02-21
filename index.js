//Give environment path
// #
import chalkAnimate from "chalk-animation";
// we use it for wait and execute we call it in welcome function
const ForWaiting = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
// now need to return any thing in async functin 
// I use chalkAnimate.rainbow() import from chock animation use to color change
async function welcome() {
    let rainbowTitle = chalkAnimate.rainbow('Start Calculator');
    await ForWaiting();
    rainbowTitle.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
    console.log(`${rainbowTitle} is good`);
}
welcome();
