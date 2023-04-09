
/*
This function is not implemented in any component but was left 
as a practical case for when you want to change the css variables globally.
*/

const colors = {
    "default":{
        "--button-color": "#3F3F3F",
        "--button-background": "#E0E0E0",
        "--button-background-hover-dark": "#AEAEAE",
        "--button-background-hover-light": "#AEAEAE",
        "--button-shadow": "0px 2px 3px #AEAEAE40",
    },
    "primary":{
        "--button-color": "#ffffff",
        "--button-background": "#2962FF",
        "--button-background-hover-dark": "#0039CB",
        "--button-background-hover-light": "#2962FF30",
        "--button-shadow": "0px 2px 3px #2962FF40",
    },
    "secondary":{
        "--button-color": "#ffffff",
        "--button-background": "#455A64",
        "--button-background-hover-dark": "#1C313A",
        "--button-background-hover-light": "#455A6430",
        "--button-shadow": "0px 2px 3px #455A6440",
    },
    "danger":{
        "--button-color": "#ffffff",
        "--button-background": "#D32F2F",
        "--button-background-hover-dark": "#9A0007",
        "--button-background-hover-light": "#D32F2F30",
        "--button-shadow": "0px 2px 3px #D32F2F40",
    },
};

/**
 * The function sets the color of various properties on the HTML document.
 * @param color - The parameter "color" is a string that represents the name of the color that we want
 * to set. It is used as a key to access the corresponding color values from the "colors" object.
 */
export function setColor(color){
    for (let property in colors[color]) {
        document.documentElement.style.setProperty(property, colors[color][property]);
        console.log(`${property}: ${colors[color][property]}`)
    }
};