function generateLogo(data) {
    return `
<svg version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">

 
    <${data.shape} ${data.shapeColor}>

 <text x="150" y="175" font-size="60" text-anchor="middle" ${data.color}</text>

</svg>`
}

function shape(data) {
    if (data.shape == 'Circle') {
        return `circle cx="150" cy="150" r="80"`;
    }
    else if (data.shape == 'Square') {
        return `rect x="150" y="150" rx="10" ry="10" width="200" height="200"`;
    }
    else {
        return `polygon points="150 45, 260 245, 40 245"`;
    }
};

function shapeColor(data) {
    if (data.shape == 'White') {
        return `fill="#F2F2F2"`;
    }
    else if (data.shape == 'Gray') {
        return `fill="#C9CEDE"`;
    }
    else {
        return `fill="#9BF2D2"`;
    }
};

function text(data) {
    
}

function color(data) {
    if (data.shape == 'Black') {
        return `fill="#464746"`;
    }
    else if (data.shape == 'Blue') {
        return `fill="#364FD9"`;
    }
    else {
        return `fill="#D93A2B"`;
    }
};