// code your solution here
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}

const mondayWork = function(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(param="*") {
    const part1 = "You are"
    return function innerFunction(param2="special") {
return `${part1} ${param}${param2}${param}!`
    };
}