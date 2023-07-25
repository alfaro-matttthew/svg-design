function generateLogo(data) {
    return `
<svg version="1.1"
width="300" height="300"
xmlns="http://www.w3.org/2000/svg">

 

 <circle cx="150" cy="100" r="80" fill="green" />

 <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>`
}

function shape(data) {
    if (data.shape == 'Circle') {
        return `circle`;
    }
    else if (data.shape == 'Square') {
        return `rect`;
    }
    else {
        return `polygon points=""`
    }
}