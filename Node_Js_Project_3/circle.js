const pi = 3.14;

function circleArea(radius) {

    return pi * radius * radius;
}

function circleCircumference(radius) {
    return 2 * radius * pi;
}

module.exports={
    circleArea,
    circleCircumference
}