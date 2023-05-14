console.log(`RUN speech.js`);

switch (page) {
    case "home":
        homeSpeech();
        break;
    case "weather":
        weatherSpeech();
        break;
}

function homeSpeech() {
    console.log(`RUN homeSpeech()`);

    runSpeech(home[0]);
}

function weatherSpeech() {
    console.log(`RUN weatherSpeech()`);

    if (!showingResults) {
        let speechIndex = Math.floor(Math.random() * 3);
        runSpeech(weather.requesting[speechIndex]);
    } else {
        let speechIndex = Math.floor(Math.random() * 1);
        runSpeech(weather.requesting[speechIndex]);
    }
}

function runSpeech(speechData) {
    console.log(`RUN runSpeech()`);
    console.log(speechData);

    // let html = "";

    // speechData.forEach(speechItem => {
    //     html += `<span class="size-${speechItem.type}">${speechItem.string}</span>`;
    // });

    // $(`.main .speech-container .speech`).html(html);

    let speechDataIndex = 1;
    let speechDataStringIndex = -1;
    let pauseIndex = 0;
    let pauseLimit = 25;
    // let pauseLimit = 5;


    function applyText() {
        console.log(`${speechDataIndex} < ${speechData.length}`);
        if (speechDataIndex < speechData.length) {
            let stringLength = speechData[speechDataIndex].string.length;
            console.log(`stringLength = ${stringLength}`);
            if (speechDataStringIndex === -1) {
                $(`.main .speech-container .speech`).append(`<span class="size-${speechData[speechDataIndex].type} speech-${speechDataIndex}"></span>`);
                console.log(`NEW SPAN`);
                speechDataStringIndex++;
            } else if (speechDataStringIndex < stringLength) {
                $(`.main .speech-container .speech .speech-${speechDataIndex}`).append(speechData[speechDataIndex].string[speechDataStringIndex]);
                speechDataStringIndex++;
            } else if (pauseIndex < pauseLimit) {
                pauseIndex++;
            } else {
                pauseIndex = 0;
                speechDataStringIndex = -1;
                speechDataIndex++;
            }
        } else {
            clearInterval(typingInterval);
        }
    }

    const typingInterval = setInterval(applyText, speechData[0]);
}