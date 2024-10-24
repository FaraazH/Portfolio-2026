
/////////////////////////////////////////////////////////////QUERIES 

//RESIZE
let reSize = () => document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
reSize();
window.addEventListener("resize", reSize);

//NAVIGATION

    //HOME
    const homeNavButton = document.querySelectorAll('.homeNavButton');
    const chromaticHomeButton = document.querySelector('.chromaticHomeButton');
    const intervalHomeButton = document.querySelector('.intervalHomeButton');
    const noteHomeButton = document.querySelector('.noteHomeButton');

    //CHROMATIC
    const chromaticNavButton = document.querySelectorAll('.chromaticNavButton');
    const chromaticButton = document.querySelector('.chromaticButton');
    const chromaticSharpButton = document.querySelector('.chromaticSharpButton');
    const chromaticOctaveButton = document.querySelector('.chromaticOctaveButton');
    const chromaticBackButton = document.querySelector('.chromaticBackButton');
    const chromaticNaturalButton = document.querySelector('.chromaticNaturalButton');
    const chromaticFlatButton = document.querySelector('.chromaticFlatButton');

    //INTERVAL
    const intervalNavButton = document.querySelectorAll('.intervalNavButton');
    const intervalBackButton = document.querySelector('.intervalBackButton');
    const intervalSemiToneButton = document.querySelector('.intervalSemiToneButton');
    const intervalButton = document.querySelector('.intervalButton');
    const intervalFullToneButton = document.querySelector('.intervalFullToneButton');

    //NOTE 
    const noteNavButton = document.querySelectorAll('.noteNavButton');
    const noteBackButton = document.querySelector('.noteBackButton');
    const noteFreqButton = document.querySelector('.noteFreqButton');
    const noteButton = document.querySelector('.noteButton');
    const notePitchButton = document.querySelector('.notePitchButton');

//DESCRIPTIONS
const description = document.querySelectorAll('.description')
const chromaticLayerDescription = document.querySelectorAll('.chromaticLayerDescription');
const intervalLayerDescription = document.querySelectorAll('.intervalLayerDescription');
const noteLayerDescription = document.querySelectorAll('.noteLayerDescription');

const chromaticDescription = document.querySelector('.chromaticDescription');
const naturalDescription = document.querySelector('.naturalDescription');
const sharpDescription = document.querySelector('.sharpDescription');
const flatDescription = document.querySelector('.flatDescription');
const octaveDescription = document.querySelector('.octaveDescription');

const intervalDescription = document.querySelector('.intervalDescription');
const semiToneDescription = document.querySelector('.semiToneDescription');
const fullToneDescription = document.querySelector('.fullToneDescription');

const frequencyDescription = document.querySelector('.frequencyDescription');
const noteDescription = document.querySelector('.noteDescription');
const pitchDescription = document.querySelector('.pitchDescription');

//CONTAINERS 
const homeContainer = document.querySelector('.homeContainer');
const chromaticContainer = document.querySelector('.chromaticContainer');
const noteButtonContainer = document.querySelector('.noteButtonContainer');
const noteContainer = document.querySelector('.noteContainer');
const intervalContainer = document.querySelector('.intervalContainer');
const baseContainer = document.querySelector('.baseContainer');
const pitchButtonContainer = document.querySelector('.pitchButtonContainer');
const grayButtonContainer = document.querySelector('.grayButtonContainer');
const semiToneContainer = document.querySelector('.semiToneContainer');
const fullToneContainer = document.querySelector('.fullToneContainer');
const intervalButtonContainer = document.querySelector('.intervalButtonContainer');
const introContainer = document.querySelector('.introContainer');
const hzButtonContainer = document.querySelector('.hzButtonContainer');

//BUTTONS
const sharpButton = document.querySelectorAll('.sharpButton');
const flatButton = document.querySelectorAll('.flatButton');
const naturalButton = document.querySelectorAll('.naturalButton');
const chromaticNoteButtons = document.querySelector('.chromaticNoteButtons');
const chromaticNoteButton = document.querySelector('.chromaticNoteButton');

const aButton = document.querySelector('.aButton');
const bButton = document.querySelector('.bButton');
const cButton = document.querySelector('.cButton');
const dButton = document.querySelector('.dButton');
const eButton = document.querySelector('.eButton');
const fButton = document.querySelector('.fButton');
const gButton = document.querySelector('.gButton');

const aSharpComboButton = document.querySelectorAll('.aSharpComboButton');
const cSharpComboButton = document.querySelectorAll('.cSharpComboButton');
const dSharpComboButton = document.querySelectorAll('.dSharpComboButton');
const fSharpComboButton = document.querySelectorAll('.fSharpComboButton');
const gSharpComboButton = document.querySelectorAll('.gSharpComboButton');

const aTransButton = document.querySelector('.aTransButton');
const bTransButton = document.querySelector('.bTransButton');
const cTransButton = document.querySelector('.cTransButton');
const dTransButton = document.querySelector('.dTransButton');
const eTransButton = document.querySelector('.eTransButton');
const fTransButton = document.querySelector('.fTransButton');
const gTransButton = document.querySelector('.gTransButton');

const aSharpTransComboButton = document.querySelectorAll('.aSharpTransComboButton');
const cSharpTransComboButton = document.querySelectorAll('.cSharpTransComboButton');
const dSharpTransComboButton = document.querySelectorAll('.dSharpTransComboButton');
const fSharpTransComboButton = document.querySelectorAll('.fSharpTransComboButton');
const gSharpTransComboButton = document.querySelectorAll('.gSharpTransComboButton');

const aInterButton = document.querySelector('.aInterButton');
const bInterButton = document.querySelector('.bInterButton');
const cInterButton = document.querySelector('.cInterButton');
const dInterButton = document.querySelector('.dInterButton');
const eInterButton = document.querySelector('.eInterButton');
const fInterButton = document.querySelector('.fInterButton');
const gInterButton = document.querySelector('.gInterButton');

const aSharpInterComboButton = document.querySelectorAll('.aSharpInterComboButton');
const cSharpInterComboButton = document.querySelectorAll('.cSharpInterComboButton');
const dSharpInterComboButton = document.querySelectorAll('.dSharpInterComboButton');
const fSharpInterComboButton = document.querySelectorAll('.fSharpInterComboButton');
const gSharpInterComboButton = document.querySelectorAll('.gSharpInterComboButton');

const aChromaButton = document.querySelector('.aChromaButton');
const bChromaButton = document.querySelector('.bChromaButton');
const cChromaButton = document.querySelector('.cChromaButton');
const dChromaButton = document.querySelector('.dChromaButton');
const eChromaButton = document.querySelector('.eChromaButton');
const fChromaButton = document.querySelector('.fChromaButton');
const gChromaButton = document.querySelector('.gChromaButton');

const aSharpChromaComboButton = document.querySelectorAll('.aSharpChromaComboButton');
const cSharpChromaComboButton = document.querySelectorAll('.cSharpChromaComboButton');
const dSharpChromaComboButton = document.querySelectorAll('.dSharpChromaComboButton');
const fSharpChromaComboButton = document.querySelectorAll('.fSharpChromaComboButton');
const gSharpChromaComboButton = document.querySelectorAll('.gSharpChromaComboButton');


//CIRCLES
const chromaticHomeCircle = document.querySelector('.chromaticHomeCircle');
const chromaticButtonCircle = document.querySelector('.chromaticButtonCircle');
const chromaticSharpCircle = document.querySelector('.chromaticSharpCircle');
const chromaticFlatCircle = document.querySelector('.chromaticFlatCircle');
const chromaticOctaveCircle = document.querySelector('.chromaticOctaveCircle');
const chromaticBackCircle = document.querySelector('.chromaticBackCircle');
const chromaticNaturalCircle = document.querySelector('.chromaticNaturalCircle');

const noteHomeCircle = document.querySelector('.noteHomeCircle');
const noteButtonCircle = document.querySelector('.noteButtonCircle');
const noteFreqCircle = document.querySelector('.noteFreqCircle');
const notePitchCircle = document.querySelector('.notePitchCircle');
const noteBackCircle = document.querySelector('.noteBackCircle'); 

const intervalHomeCircle = document.querySelector('.intervalHomeCircle');
const intervalBackCircle = document.querySelector('.intervalBackCircle');
const intervalSemiToneCircle = document.querySelector('.intervalSemiToneCircle');
const intervalButtonCircle = document.querySelector('.intervalButtonCircle');
const intervalFullToneCircle = document.querySelector('.intervalFullToneCircle');

const innerRing = document.querySelector('.innerRing');

//TEXT 
const naturalText = document.querySelectorAll('.naturalText');
const sharpText = document.querySelectorAll('.sharpText');
const noteText = document.querySelectorAll('.noteText');
const flatText = document.querySelectorAll('.flatText');

/////////////////////////////////////////////////////////////API

//GSAP
let tl = gsap.timeline();

//WEB AUDIO API
function sound(value) {
    const audioContext = new AudioContext();
    const osc = audioContext.createOscillator();
    const volume = audioContext.createGain();

    //OSCILLATOR
    osc.frequency.value = value;
    osc.type = 'triangle';
    osc.start();
    osc.stop(audioContext.currentTime + 1);

    //GAIN
    volume.gain.value = 0.5;
    volume.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.9);

    //DESTINATION
    osc.connect(volume);
    volume.connect(audioContext.destination);
};

/////////////////////////////////////////////////////////////EVENTS

//WINDOW
window.addEventListener('load', () => { 

    chromaticNavButton.forEach(clear => clear.classList.add('clear'));
    intervalNavButton.forEach(clear => clear.classList.add('clear'));
    noteNavButton.forEach(clear => clear.classList.add('clear'));
    description.forEach(clear => clear.classList.add('clear'));
    intervalButtonContainer.classList.add('clear');
    flatText.forEach(clear => clear.classList.add('clear'));
    homeContainer.classList.add('clear');
    noteText.forEach(clear => clear.classList.add('clear'));
    hzButtonContainer.classList.add('clear');

    tl.fromTo('.introNoteBack', .9, {scale: 1, opacity: '90%', transformOrigin: 'center', }, {scale: 1.8, repeat: -1, repeatDelay: 1, opacity: '0%', transformOrigin: 'center'});

    // tl.fromTo('.fullCircleAnime', 1, {opacity: '100%'}, {opacity: '0%', yoyoEase: true, repeat: -1, ease: Power2.easeInOut});



});

introContainer.addEventListener('click', () => {

    introContainer.classList.add('intro');
    noteText.forEach(clear => clear.classList.remove('clear'));
    homeContainer.classList.remove('clear');
    flatText.forEach(clear => clear.classList.add('clear'));

});




//CHROMATIC
chromaticHomeButton.addEventListener('click', () => {

    chromaticNavButton.forEach(clear => clear.classList.remove('clear'));
    homeNavButton.forEach(clear => clear.classList.add('clear'));
    intervalNavButton.forEach(clear => clear.classList.add('clear'));
    noteNavButton.forEach(clear => clear.classList.add('clear'));

    chromaticContainer.classList.add('index');
    chromaticDescription.classList.remove('clear');

    chromaticButtonCircle.classList.add('fill');
    chromaticFlatCircle.classList.remove('fill');
    chromaticSharpCircle.classList.remove('fill');
    chromaticNaturalCircle.classList.remove('fill');
    chromaticOctaveCircle.classList.remove('fill');
    flatText.forEach(clear => {clear.classList.add('clear')});
    
});

chromaticButton.addEventListener('click', () => {

    chromaticDescription.classList.remove('clear');
    flatDescription.classList.add('clear');
    sharpDescription.classList.add('clear');
    naturalDescription.classList.add('clear');
    octaveDescription.classList.add('clear');

    sharpButton.forEach(clear => {clear.classList.remove('clear');})
    naturalButton.forEach(clear => {clear.classList.remove('clear');})
    flatButton.forEach(clear => {clear.classList.remove('clear')});
    
    chromaticButtonCircle.classList.add('fill');
    chromaticFlatCircle.classList.remove('fill');
    chromaticSharpCircle.classList.remove('fill');
    chromaticNaturalCircle.classList.remove('fill');
    chromaticOctaveCircle.classList.remove('fill');

    sharpText.forEach(clear => { clear.classList.remove('clear'); });
    naturalText.forEach(clear => { clear.classList.remove('clear'); });
    flatText.forEach(clear => {clear.classList.add('clear')});

});

chromaticFlatButton.addEventListener('click', () => {

    flatDescription.classList.remove('clear');
    chromaticDescription.classList.add('clear');
    sharpDescription.classList.add('clear');
    naturalDescription.classList.add('clear');
    octaveDescription.classList.add('clear');

    sharpButton.forEach(clear => {clear.classList.add('clear');})
    naturalButton.forEach(clear => {clear.classList.add('clear');})
    flatButton.forEach(clear => {clear.classList.remove('clear')});

    chromaticFlatCircle.classList.add('fill');
    chromaticButtonCircle.classList.remove('fill');
    chromaticSharpCircle.classList.remove('fill');
    chromaticNaturalCircle.classList.remove('fill');
    chromaticOctaveCircle.classList.remove('fill');

    sharpText.forEach(clear => { clear.classList.add('clear'); });
    naturalText.forEach(clear => { clear.classList.add('clear'); });
    flatText.forEach(clear => {clear.classList.remove('clear')});

});

chromaticSharpButton.addEventListener('click', () => {

    sharpDescription.classList.remove('clear');
    chromaticDescription.classList.add('clear');
    flatDescription.classList.add('clear');
    naturalDescription.classList.add('clear');
    octaveDescription.classList.add('clear');

    sharpButton.forEach(clear => {clear.classList.remove('clear');})
    naturalButton.forEach(clear => {clear.classList.add('clear');})
    flatButton.forEach(clear => {clear.classList.add('clear')});

    chromaticSharpCircle.classList.add('fill');
    chromaticFlatCircle.classList.remove('fill');
    chromaticButtonCircle.classList.remove('fill');
    chromaticNaturalCircle.classList.remove('fill');
    chromaticOctaveCircle.classList.remove('fill');

    sharpText.forEach(clear => { clear.classList.remove('clear'); });
    naturalText.forEach(clear => { clear.classList.add('clear'); });
    flatText.forEach(clear => {clear.classList.add('clear')});

});

chromaticNaturalButton.addEventListener('click', () => {

    naturalDescription.classList.remove('clear');
    sharpDescription.classList.add('clear');
    chromaticDescription.classList.add('clear');
    flatDescription.classList.add('clear');
    octaveDescription.classList.add('clear');

    sharpButton.forEach(clear => {clear.classList.add('clear');})
    naturalButton.forEach(clear => {clear.classList.remove('clear');})
    flatButton.forEach(clear => {clear.classList.add('clear')});

    chromaticNaturalCircle.classList.add('fill');
    chromaticSharpCircle.classList.remove('fill');
    chromaticFlatCircle.classList.remove('fill');
    chromaticButtonCircle.classList.remove('fill');
    chromaticOctaveCircle.classList.remove('fill');

    sharpText.forEach(clear => { clear.classList.add('clear'); });
    naturalText.forEach(clear => { clear.classList.remove('clear'); });
    flatText.forEach(clear => {clear.classList.add('clear')});

});

chromaticOctaveButton.addEventListener('click', () => {

    octaveDescription.classList.remove('clear');
    naturalDescription.classList.add('clear');
    sharpDescription.classList.add('clear');
    chromaticDescription.classList.add('clear');
    flatDescription.classList.add('clear');

    sharpButton.forEach(clear => {clear.classList.add('clear');})
    naturalButton.forEach(clear => {clear.classList.remove('clear');})
    flatButton.forEach(clear => {clear.classList.add('clear')});

    chromaticOctaveCircle.classList.add('fill');
    chromaticNaturalCircle.classList.remove('fill');
    chromaticSharpCircle.classList.remove('fill');
    chromaticFlatCircle.classList.remove('fill');
    chromaticButtonCircle.classList.remove('fill');

    sharpText.forEach(clear => { clear.classList.add('clear'); });
    naturalText.forEach(clear => { clear.classList.remove('clear'); });
    flatText.forEach(clear => {clear.classList.add('clear')});

});

chromaticBackButton.addEventListener('click', () => {

    homeNavButton.forEach(clear => clear.classList.remove('clear'));
    chromaticNavButton.forEach(clear => clear.classList.add('clear'));
    intervalNavButton.forEach(clear => clear.classList.add('clear'));
    noteNavButton.forEach(clear => clear.classList.add('clear'));

    chromaticContainer.classList.remove('index');
    description.forEach(clear => clear.classList.add('clear'));

    sharpButton.forEach(clear => {clear.classList.remove('clear');})
    naturalButton.forEach(clear => {clear.classList.remove('clear');})
    flatButton.forEach(clear => {clear.classList.remove('clear')});

    chromaticOctaveCircle.classList.remove('fill');
    chromaticNaturalCircle.classList.remove('fill');
    chromaticSharpCircle.classList.remove('fill');
    chromaticFlatCircle.classList.remove('fill');
    chromaticButtonCircle.classList.remove('fill');

    sharpText.forEach(clear => { clear.classList.remove('clear'); });
    naturalText.forEach(clear => { clear.classList.remove('clear'); });
    flatText.forEach(clear => {clear.classList.add('clear')});

});

// NOTE
noteHomeButton.addEventListener('click', () => {

    noteNavButton.forEach(clear => clear.classList.remove('clear'));
    homeNavButton.forEach(clear => clear.classList.add('clear'));
    intervalNavButton.forEach(clear => clear.classList.add('clear'));

    noteContainer.classList.add('index');
    noteDescription.classList.remove('clear');

    noteButtonCircle.classList.add('fill');

    flatText.forEach(clear => clear.classList.add('clear'));
    hzButtonContainer.classList.add('clear');


});

noteButton.addEventListener('click', () => {

    frequencyDescription.classList.add('clear');
    noteDescription.classList.remove('clear');
    pitchDescription.classList.add('clear');
    
    noteButtonCircle.classList.add('fill');
    noteHomeCircle.classList.add('fill');
    noteFreqCircle.classList.remove('fill');
    notePitchCircle.classList.remove('fill');


    noteText.forEach(clear => (clear.classList.remove('clear')));

    grayButtonContainer.classList.remove('grayIndex');
    grayButtonContainer.classList.remove('clear');
    pitchButtonContainer.classList.remove('clear');
    flatText.forEach(clear => clear.classList.add('clear'));
    hzButtonContainer.classList.add('clear');


});

noteFreqButton.addEventListener('click', () => {

    frequencyDescription.classList.remove('clear');
    noteDescription.classList.add('clear');
    pitchDescription.classList.add('clear');

    notePitchCircle.classList.remove('fill');
    noteHomeCircle.classList.remove('fill');
    noteButtonCircle.classList.remove('fill');
    noteFreqCircle.classList.add('fill');


    grayButtonContainer.classList.remove('clear');
    pitchButtonContainer.classList.add('clear');
    noteText.forEach(clear => (clear.classList.remove('clear')));

    grayButtonContainer.classList.remove('grayIndex');
    semiToneContainer.classList.add('clear');
    fullToneContainer.classList.add('clear');
    flatText.forEach(clear => clear.classList.add('clear'));
    hzButtonContainer.classList.add('clear');


tl.clear();



});

notePitchButton.addEventListener('click', () => {

    pitchDescription.classList.remove('clear');
    frequencyDescription.classList.add('clear');
    noteDescription.classList.add('clear');

    notePitchCircle.classList.add('fill');
    noteHomeCircle.classList.remove('fill');
    noteButtonCircle.classList.remove('fill');
    noteFreqCircle.classList.remove('fill');

    noteText.forEach(clear => (clear.classList.add('clear')));

    grayButtonContainer.classList.add('grayIndex');
    grayButtonContainer.classList.remove('clear');
    pitchButtonContainer.classList.remove('clear');

    semiToneContainer.classList.add('clear');
    fullToneContainer.classList.add('clear')
    hzButtonContainer.classList.remove('clear');

});

noteBackButton.addEventListener('click', () => {

    homeNavButton.forEach(clear => clear.classList.remove('clear'));
    chromaticNavButton.forEach(clear => clear.classList.add('clear'));
    intervalNavButton.forEach(clear => clear.classList.add('clear'));
    noteNavButton.forEach(clear => clear.classList.add('clear'));

    noteContainer.classList.remove('index');
    description.forEach(clear => clear.classList.add('clear'));

    notePitchCircle.classList.remove('fill');
    noteHomeCircle.classList.remove('fill');
    noteButtonCircle.classList.remove('fill');
    noteFreqCircle.classList.remove('fill');

    noteText.forEach(clear => (clear.classList.remove('clear')));
    grayButtonContainer.classList.remove('grayIndex');
    grayButtonContainer.classList.remove('clear');
    pitchButtonContainer.classList.remove('clear');
    flatText.forEach(clear => clear.classList.add('clear'));
    hzButtonContainer.classList.add('clear');


});

//INTERVAL
intervalHomeButton.addEventListener('click', () => {

    intervalNavButton.forEach(clear => clear.classList.remove('clear'));
    noteNavButton.forEach(clear => clear.classList.add('clear'));
    homeNavButton.forEach(clear => clear.classList.add('clear'));

    intervalContainer.classList.add('index');
    intervalDescription.classList.remove('clear');

    intervalButtonCircle.classList.add('fill');
    chromaticNoteButtons.classList.add('clear');
    intervalButtonContainer.classList.remove('clear');


});

intervalButton.addEventListener('click', () => {

    intervalDescription.classList.remove('clear');
    semiToneDescription.classList.add('clear');
    fullToneDescription.classList.add('clear');

    intervalButtonCircle.classList.add('fill');
    intervalFullToneCircle.classList.remove('fill');
    intervalSemiToneCircle.classList.remove('fill');

    tl.clear();
    chromaticNoteButtons.classList.add('clear');
    grayButtonContainer.classList.remove('clear');
    grayButtonContainer.classList.remove('grayIndex');
    intervalButtonContainer.classList.remove('clear');


});

intervalSemiToneButton.addEventListener('click', () => {

    semiToneDescription.classList.remove('clear');
    intervalDescription.classList.add('clear');
    fullToneDescription.classList.add('clear');

    intervalSemiToneCircle.classList.add('fill');
    intervalButtonCircle.classList.remove('fill');
    intervalFullToneCircle.classList.remove('fill');

    fullToneContainer.classList.add('clear');
    chromaticNoteButtons.classList.add('clear');
    grayButtonContainer.classList.add('grayIndex');
    semiToneContainer.classList.remove('clear');
    intervalButtonContainer.classList.add('clear');


    tl.clear();
    tl.fromTo('.semi1', 1, {opacity: '0%'}, {repeat: -1, opacity: '100%', repeatDelay: 0.6, stagger: 0.6});

});

intervalFullToneButton.addEventListener('click', () => {

    fullToneDescription.classList.remove('clear');
    intervalDescription.classList.add('clear');
    semiToneDescription.classList.add('clear');

    intervalFullToneCircle.classList.add('fill');
    intervalSemiToneCircle.classList.remove('fill');
    intervalButtonCircle.classList.remove('fill');

    tl.clear();
    fullToneContainer.classList.remove('clear');
    semiToneContainer.classList.add('clear');
    chromaticNoteButtons.classList.add('clear');
    grayButtonContainer.classList.remove('clear');
    grayButtonContainer.classList.add('grayIndex');
    intervalButtonContainer.classList.add('clear');

    tl.clear();
    tl.fromTo('.full1', 1, {opacity: '0%'}, {repeat: -1, opacity: '100%', repeatDelay: 0.6, stagger: 0.6});

});

intervalBackButton.addEventListener('click', () => {

    homeNavButton.forEach(clear => clear.classList.remove('clear'));
    chromaticNavButton.forEach(clear => clear.classList.add('clear'));
    intervalNavButton.forEach(clear => clear.classList.add('clear'));
    noteNavButton.forEach(clear => clear.classList.add('clear'));

    intervalContainer.classList.remove('index');
    description.forEach(clear => clear.classList.add('clear'));

    intervalSemiToneCircle.classList.remove('fill');
    intervalButtonCircle.classList.remove('fill');
    intervalFullToneCircle.classList.remove('fill');

    tl.clear();
    fullToneContainer.classList.add('clear');
    semiToneContainer.classList.add('clear');
    chromaticNoteButtons.classList.remove('clear');
    grayButtonContainer.classList.remove('clear');
    grayButtonContainer.classList.remove('grayIndex');
    intervalButtonContainer.classList.add('clear');

});


//NOTE EVENTS
aButton.addEventListener('click', () => {
    sound(220);
});

aSharpComboButton.forEach(colour => colour.addEventListener('click', (value) => {
sound(233.08);
}));

bButton.addEventListener('click', () => { 
    sound(246.94);
 });

cButton.addEventListener('click', () => { 
    sound(261.63);
});

cSharpComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(277.18);
    }));

dButton.addEventListener('click', () => { 
    sound(293.66);
});

dSharpComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(311.13);
    }));

eButton.addEventListener('click', () => { 
    sound(329.63);
});

fButton.addEventListener('click', () => { 
    sound(349.23);
});

fSharpComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(369.99);
    }));

gButton.addEventListener('click', () => { 
    sound(392.0);
});

gSharpComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(415.3);
    }));




//NOTE TRANS EVENTS
aTransButton.addEventListener('click', () => {
    sound(220);
});

aSharpTransComboButton.forEach(colour => colour.addEventListener('click', (value) => {
sound(233.08);
}));

bTransButton.addEventListener('click', () => { 
    sound(246.94);
 });

cTransButton.addEventListener('click', () => { 
    sound(261.63);
});

cSharpTransComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(277.18);
    }));

dTransButton.addEventListener('click', () => { 
    sound(293.66);
});

dSharpTransComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(311.13);
    }));

eTransButton.addEventListener('click', () => { 
    sound(329.63);
});

fTransButton.addEventListener('click', () => { 
    sound(349.23);
});

fSharpTransComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(369.99);
    }));

gTransButton.addEventListener('click', () => { 
    sound(392.0);
});

gSharpTransComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(415.3);
    }));






    //NOTE Inter EVENTS
aInterButton.addEventListener('click', () => {
    sound(220);
});

aSharpInterComboButton.forEach(colour => colour.addEventListener('click', (value) => {
sound(233.08);
}));

bInterButton.addEventListener('click', () => { 
    sound(246.94);
 });

cInterButton.addEventListener('click', () => { 
    sound(261.63);
});

cSharpInterComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(277.18);
    }));

dInterButton.addEventListener('click', () => { 
    sound(293.66);
});

dSharpInterComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(311.13);
    }));

eInterButton.addEventListener('click', () => { 
    sound(329.63);
});

fInterButton.addEventListener('click', () => { 
    sound(349.23);
});

fSharpInterComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(369.99);
    }));

gInterButton.addEventListener('click', () => { 
    sound(392.0);
});

gSharpInterComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(415.3);
    }));



//NOTE Chroma EVENTS
aChromaButton.addEventListener('click', () => {
    sound(220);
});

aSharpChromaComboButton.forEach(colour => colour.addEventListener('click', (value) => {
sound(233.08);
}));

bChromaButton.addEventListener('click', () => { 
    sound(246.94);
 });

cChromaButton.addEventListener('click', () => { 
    sound(261.63);
});

cSharpChromaComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(277.18);
    }));

dChromaButton.addEventListener('click', () => { 
    sound(293.66);
});

dSharpChromaComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(311.13);
    }));

eChromaButton.addEventListener('click', () => { 
    sound(329.63);
});

fChromaButton.addEventListener('click', () => { 
    sound(349.23);
});

fSharpChromaComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(369.99);
    }));

gChromaButton.addEventListener('click', () => { 
    sound(392.0);
});

gSharpChromaComboButton.forEach(colour => colour.addEventListener('click', (value) => {
    sound(415.3);
    }));