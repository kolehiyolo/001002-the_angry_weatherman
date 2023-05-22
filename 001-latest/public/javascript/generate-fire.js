console.log(`READ generate-fire.js`);

function generateFire(count) {
    console.log(`RUN generateFire()`);

    // const cloudProps = decideProperties();
    // const inlineStyle = `
    //     width: ${cloudProps.size}px;
    //     height: ${cloudProps.size}px;
    //     opacity: ${cloudProps.opacity};
    //     transform: rotate(${cloudProps.rotation}deg);
    //     animation: cloudDrift-${count} ${cloudProps.speed}s linear 0s infinite alternate;
    // `;

    // const cloud = `<div class="cloud" style="${inlineStyle}"></div>`;

    // var createdStyleTag = document.createElement("style");
    // createdStyleTag.textContent = 
    // `@keyframes cloudDrift-${count}{
    //     from {
    //         left: ${cloudProps.origin.positionX}px;
    //         top: ${cloudProps.origin.positionY}px;
    //     }
    //     to {
    //         left: ${cloudProps.destination.positionX}px;
    //         top: ${cloudProps.destination.positionY}px;
    //     }
    // };`;

    // document.body.appendChild(createdStyleTag);

    // $(`.decoratives`).append(cloud);
}

function decideProperties() {
    const size = {
        min: 50,
        max: 750,
    }

    function findPosition(axis) {
        // * First, we find the current screen width
        // * Next, we find a value to add
        // * Then, we decide whether to generate from the left or right side of the screen
        // * Then, we calculate based on that decision
        let position;
        let screenValue = (axis === `x`) ? window.screen.width : window.screen.height;
        // let addedValue = Math.floor(Math.random() * screenValue);
        let addedValue = Math.floor(Math.random() * 1000);
        let originPositive = (Math.random() * 1 < 0.5) ? false : true;

        position = (originPositive) ? screenValue + addedValue : 0 - addedValue;

        // position = (originPositive) ? screenValue - addedValue : 0 + addedValue;

        return position;

        // * Compressed
        // return (((Math.random() * 1 < 0.5) ? `left` : `right`) === `left`) ? 0 - Math.floor(Math.random() * 1000) : screen.width + Math.floor(Math.random() * 1000);
    }

    let cloudProps = {
        origin: {
            positionX: findPosition('x'),
            positionY: findPosition('y'),
        },
        destination: {
            positionX: findPosition('x'),
            positionY: findPosition('y'),
        },
        size: size.min + Math.floor(Math.random() * (size.max - size.min)),
        rotation: Math.floor(Math.random() * 360),
        // direction: Math.floor(Math.random() * 360),
        speed: 50 + Math.random() * 50,
        opacity: 0.2 + Math.random() * 0.6,
    }

    return cloudProps;
}

// generateFire();

let cloudLimit = 50;
let cloudCount = 0;

// setInterval(() => {
//     if (cloudCount < cloudLimit) {
//         generateFire(cloudCount);
//         cloudCount++;
//     }
// }, 0);