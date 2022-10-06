/***************** 
 * Ralt_Pld Test *
 *****************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'RALT_PLD';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
//Function to randomly choose number from array

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//shuffle function

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

//Function to center text on screen (wrap width 70)
//Only works with monospaced fonts

var parts;
function centerfy(string) {
var parts, max;
parts = string.split('\n'),
max = 30;

parts = parts.map(s => s
    .padStart(s.length + Math.floor((max - s.length) / 2), ' ')
    .padEnd(max, ' ')
);
return parts.join('\n')
}

function weighted_random(items, weights) {
    var i;

    for (i = 0; i < weights.length; i++)
        weights[i] += weights[i - 1] || 0;
    
    var random = Math.random() * weights[weights.length - 1];
    
    for (i = 0; i < weights.length; i++)
        if (weights[i] > random)
            break;
    
    return items[i];
}

var prob_fb_counter = 0;
var BlockCounter = 0;
var CycleCounter = 0;
var TrialCounter = 0;


function randomUniqueNum(min, max, even, outputCount) {

    let arr = []
    if (even == true){
      for (let i = min; i <= max; i+=2) {
        arr.push(i)
      }
    } else {
      for (let i = min + 1; i <= max; i+=2) {
        arr.push(i)
      }
    }

    let result = [];
    for (let i = 1; i <= outputCount; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.push(arr[randomIndex]);
      arr.splice(randomIndex, 1);
    }
  
    return result;
}

//generate random numbers
var fNeven = randomUniqueNum(10,99, true, 4)
var fNodd = randomUniqueNum(10,99, false, 4)

var numbarray = [fNeven, fNodd, fNeven, fNodd]

//Set up list with correct category (4 per cycle * 4 blocks, randomized)
var CorrCat = [];

for (let i = 1; i <= 2; i++) {
    var ABlist = ["A", "A", "B", "B"];
    shuffle(ABlist);
    CorrCat.push(ABlist);
}

var fN = numbarray.slice(0,2).flat()

//Set up dict with correct category for lookup
var CorrDict = {};
fN.forEach((key, i) => CorrDict[key] = CorrCat.flat()[i]);
console.log(CorrDict)
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(instr_train_sRoutineBegin());
flowScheduler.add(instr_train_sRoutineEachFrame());
flowScheduler.add(instr_train_sRoutineEnd());
const training_socialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(training_socialLoopBegin(training_socialLoopScheduler));
flowScheduler.add(training_socialLoopScheduler);
flowScheduler.add(training_socialLoopEnd);
flowScheduler.add(Alles_klarRoutineBegin());
flowScheduler.add(Alles_klarRoutineEachFrame());
flowScheduler.add(Alles_klarRoutineEnd());
flowScheduler.add(instr_train_nsRoutineBegin());
flowScheduler.add(instr_train_nsRoutineEachFrame());
flowScheduler.add(instr_train_nsRoutineEnd());
const training_nonsocialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(training_nonsocialLoopBegin(training_nonsocialLoopScheduler));
flowScheduler.add(training_nonsocialLoopScheduler);
flowScheduler.add(training_nonsocialLoopEnd);
flowScheduler.add(Alles_Klar_2RoutineBegin());
flowScheduler.add(Alles_Klar_2RoutineEachFrame());
flowScheduler.add(Alles_Klar_2RoutineEnd());
const prob_fbLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prob_fbLoopBegin(prob_fbLoopScheduler));
flowScheduler.add(prob_fbLoopScheduler);
flowScheduler.add(prob_fbLoopEnd);
flowScheduler.add(Alles_Klar_3RoutineBegin());
flowScheduler.add(Alles_Klar_3RoutineEachFrame());
flowScheduler.add(Alles_Klar_3RoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(ThanksRoutineBegin());
flowScheduler.add(ThanksRoutineEachFrame());
flowScheduler.add(ThanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'html/resources/Stimuli/social/happy/M02-Happy Man.mp4', 'path': 'html/resources/Stimuli/social/happy/M02-Happy Man.mp4'},
    {'name': 'Stimuli/social/happy/M02-Happy Man.mp4', 'path': 'Stimuli/social/happy/M02-Happy Man.mp4'},
    {'name': 'html/resources/Stimuli/nonsocial/Right Tick.mp4', 'path': 'html/resources/Stimuli/nonsocial/Right Tick.mp4'},
    {'name': 'Stimuli/nonsocial/Right Tick.mp4', 'path': 'Stimuli/nonsocial/Right Tick.mp4'},
    {'name': 'trainingtrials_social_prob.xlsx', 'path': 'trainingtrials_social_prob.xlsx'},
    {'name': 'Stimuli/social/angry/F04-Angry Women.mp4', 'path': 'Stimuli/social/angry/F04-Angry Women.mp4'},
    {'name': 'trainingtrials_nonsocial.xlsx', 'path': 'trainingtrials_nonsocial.xlsx'},
    {'name': 'trainingtrials_social.xlsx', 'path': 'trainingtrials_social.xlsx'},
    {'name': 'Stimuli/nonsocial/Wrong Tick.mp4', 'path': 'Stimuli/nonsocial/Wrong Tick.mp4'},
    {'name': 'html/resources/Stimuli/social/happy/F01-Happy Women.mp4', 'path': 'html/resources/Stimuli/social/happy/F01-Happy Women.mp4'},
    {'name': 'html/resources/Stimuli/social/angry/M06-Angry Man.mp4', 'path': 'html/resources/Stimuli/social/angry/M06-Angry Man.mp4'},
    {'name': 'Stimuli/social/happy/F01-Happy Women.mp4', 'path': 'Stimuli/social/happy/F01-Happy Women.mp4'},
    {'name': 'html/resources/Stimuli/nonsocial/Wrong Tick.mp4', 'path': 'html/resources/Stimuli/nonsocial/Wrong Tick.mp4'},
    {'name': 'html/resources/Stimuli/social/angry/F04-Angry Women.mp4', 'path': 'html/resources/Stimuli/social/angry/F04-Angry Women.mp4'},
    {'name': 'html/resources/trainingtrials_nonsocial.xlsx', 'path': 'html/resources/trainingtrials_nonsocial.xlsx'},
    {'name': 'html/resources/Stimuli/neutral/Still.jpg', 'path': 'html/resources/Stimuli/neutral/Still.jpg'},
    {'name': 'Stimuli/neutral/Still.jpg', 'path': 'Stimuli/neutral/Still.jpg'},
    {'name': 'Stimuli/social/angry/M06-Angry Man.mp4', 'path': 'Stimuli/social/angry/M06-Angry Man.mp4'},
    {'name': 'html/resources/trainingtrials_social_prob.xlsx', 'path': 'html/resources/trainingtrials_social_prob.xlsx'},
    {'name': 'html/resources/trainingtrials_social.xlsx', 'path': 'html/resources/trainingtrials_social.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var thisExp;
var win;
var event;
var right_cat;
var left_cat;
var Welcome_head;
var Welcome_text;
var key_resp_2;
var instr_train_sClock;
var text_3;
var key_resp_3;
var trialClock;
var fix_cross;
var neutral_still;
var response_training;
var Stimulus;
var left_disp;
var right_disp;
var feedback_trainClock;
var feedback_miss;
var left_disp_fb_2;
var right_disp_fb_2;
var Stimulus_fb_2;
var Alles_klarClock;
var text_4;
var key_resp_4;
var instr_train_nsClock;
var text;
var key_resp_5;
var Alles_Klar_2Clock;
var Allesklartext_2;
var Allesklar_resp_2;
var feedback_probClock;
var feedback;
var left_color;
var right_color;
var feedback_miss2_3;
var left_disp_fb_4;
var right_disp_fb_4;
var Stimulus_fb_4;
var Prob_feedback;
var Alles_Klar_3Clock;
var Allesklartext;
var Allesklar_resp;
var BlockCodeClock;
var Blocklist;
var LateralizationByCycleClock;
var CycleText;
var CycleText1;
var CycleText2;
var CycleText3;
var CycleText4;
var key_resp_6;
var trial_2Clock;
var fix_cross_2;
var new_neutral_2_jpg;
var response_training_2;
var Stimulus_2;
var left_disp_2;
var right_disp_2;
var feedbackClock;
var feedback_miss2;
var left_disp_fb;
var right_disp_fb;
var Stimulus_fb;
var Intertrial_IntervalClock;
var text_2;
var LatCounterClock;
var BlockCounterClock;
var ThanksClock;
var Thank;
var end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  win.color = "black"
  // Run 'Begin Experiment' code from code_5
  var font_choice = 'Helvetica';
  var color_choice = 'white';
  
  //Centered Text
  
  if (randomChoice([true, false])) {
      right_cat = "A";
      left_cat = "B";
  } else {
      left_cat = "A";
      right_cat = "B";
  }
  window.Welcome_head = Welcome_head
  window.Welcome_text = Welcome_text
  Welcome_head = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcome_head',
    text: 'Thank you for participating in this experiment!',
    font: font_choice,
    units: undefined, 
    pos: [0, 0.3], height: 0.025,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -2.0 
  });
  
  Welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Welcome_text',
    text: "You will be asked to assign different numbers to either A or B.\n\nYou can do this by pressing the <- or -> arrow keys.\nWhether you have chosen correctly will be indicated by pictures.\n\nWe'll start with some trial runs,\nso you can better understand the experiment.\n\n\nPress any key to continue!",
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -3.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_train_s"
  instr_train_sClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: "You are about to see a number at the bottom of the screen. \nYour task is to assign the number to either A or B using the arrow keys.\n\nThe correct assignment is completely random\nso you just have to guess at first.\n\nAdditionally, you will see a picture above the number.\nWhether you have chosen correctly will be indicated by a change in the picture.\n\n\nLet's try a first round!",
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  fix_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross',
    text: '+',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  neutral_still = new visual.ImageStim({
    win : psychoJS.window,
    name : 'neutral_still', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.225], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  response_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Stimulus = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stimulus',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -4.0 
  });
  
  left_disp = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_disp',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: 1,
    depth: -5.0 
  });
  
  right_disp = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_disp',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0.5, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "feedback_train"
  feedback_trainClock = new util.Clock();
  feedback_miss = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_miss',
    text: 'PLEASE RESPOND FASTER!',
    font: font_choice,
    units: undefined, 
    pos: [0, 0.225], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: 0.0 
  });
  
  left_disp_fb_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_disp_fb_2',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  right_disp_fb_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_disp_fb_2',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0.5, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Stimulus_fb_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stimulus_fb_2',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "Alles_klar"
  Alles_klarClock = new util.Clock();
  // Run 'Begin Experiment' code from Allesklarcode
  
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'As you have seen, the picture changes according to your answer.\nHappy faces indicate a correct answer, \nwhile angry faces indicate a wrong answer.\n\nLater on, you should try to remember the correct assignment of the number. \n\nPress any key to continue!',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr_train_ns"
  instr_train_nsClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "In the next pass, you will see different pictures. \n\nBut the principle remains the same\nThe picture changes according to a correct/wrong answer.\n\nLet's try it out!",
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Alles_Klar_2"
  Alles_Klar_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from Allesklarcode_2
  
  
  Allesklartext_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Allesklartext_2',
    text: "As you have seen, the image changes again according to your answer.\nThis time, tickmarks indicate a correct answer, while a cross indicates a wrong answer. \n\nBut it won't be quite that simple in the real experiment!\nYou will not always be able to rely on the pictures.\n\nInstead, if you answer correctly, you will\nMOSTLY see the happy faces or tickmarks.\n\nThat is, even if you answered correctly,\nsometimes you may still see a frowning face or a cross.\n\nIn the next pass, text will indicate whether you answered correctly or incorrectly.\n\nNote that text and image mostly, but not always, match.",
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  Allesklar_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_prob"
  feedback_probClock = new util.Clock();
  // Run 'Begin Experiment' code from code_12
  feedback = "";
  left_color = "";
  right_color = "";
  feedback_miss2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_miss2_3',
    text: 'PLEASE RESPOND FASTER!',
    font: font_choice,
    units: undefined, 
    pos: [0, 0.225], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  left_disp_fb_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_disp_fb_4',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  right_disp_fb_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_disp_fb_4',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0.5, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Stimulus_fb_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stimulus_fb_4',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -6.0 
  });
  
  Prob_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'Prob_feedback',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "Alles_Klar_3"
  Alles_Klar_3Clock = new util.Clock();
  // Run 'Begin Experiment' code from Allesklarcode_4
  
  
  Allesklartext = new visual.TextStim({
    win: psychoJS.window,
    name: 'Allesklartext',
    text: "Did you notice? In the last pass, the picture and text didn't match!\n\nBut this will rarely happen in the real experiment.\n\nYou won't see the text below in the following.\n\nJust try to give the right answer as best you can!",
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  Allesklar_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "BlockCode"
  BlockCodeClock = new util.Clock();
  // Run 'Begin Experiment' code from BlockCode1
  //Set up order of Blocks (beginning randomized, then alternating)
  console.log("Blocklist: " + Blocklist)
  Blocklist = ["social", "nonsocial"];
  console.log("Blocklist: " + Blocklist)
  Blocklist = shuffle(Blocklist)
  console.log("Blocklist: " + Blocklist)
  Blocklist = Blocklist.concat(Blocklist)
  console.log("Blocklist:" + Blocklist)
  console.log("BlockCounter: " + BlockCounter)
  console.log("Blocklist[BlockCounter]:" + Blocklist[BlockCounter])
  console.log("Blocklist[BlockCounter] == 'social':" + Blocklist[BlockCounter] == "social")
  //Set up 16 2-digit stimuli, no replacement
  //Define function unique random numbers
  
  // Initialize components for Routine "LateralizationByCycle"
  LateralizationByCycleClock = new util.Clock();
  // Run 'Begin Experiment' code from code_8
  CycleText = "";
  
  CycleText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'CycleText1',
    text: 'We are now starting the first block.\n\nIn the first pass you must\nguess the assignment with the arrow keys.\nTry to memorize the correct assignment!\n\nIn total, you will see 4 different numbers.\nAfter that, there will be a short pause.\n\n\nPress any key,\nto start the first block!',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  CycleText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'CycleText2',
    text: 'PAUSE\n\nPress any key,\nto start the next pass.\n\n(A and B might have switched places!)',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -2.0 
  });
  
  CycleText3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'CycleText3',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -3.0 
  });
  
  CycleText4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'CycleText4',
    text: 'You have now completed a full block.\n\nIn the next block you will see different images.\n\nInstead of checkmarks/crosses you will now see faces (or vice versa).\n\nThe principle remains the same.\n\nThere are 4 blocks in total.\n\nWhen you are ready\npress any button,\nto start the next block.',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -4.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial_2"
  trial_2Clock = new util.Clock();
  fix_cross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fix_cross_2',
    text: '+',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  new_neutral_2_jpg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'new_neutral_2_jpg', units : 'height', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.225], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  response_training_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Stimulus_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stimulus_2',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -4.0 
  });
  
  left_disp_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_disp_2',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: 1,
    depth: -5.0 
  });
  
  right_disp_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_disp_2',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0.5, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('grey'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  // Run 'Begin Experiment' code from code_6
  feedback = "";
  left_color = "";
  right_color = "";
  
  feedback_miss2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_miss2',
    text: 'PLEASE RESPOND FASTER!',
    font: font_choice,
    units: undefined, 
    pos: [0, 0.225], height: 0.05,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -1.0 
  });
  
  left_disp_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_disp_fb',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [(- 0.5), 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  right_disp_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_disp_fb',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0.5, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  Stimulus_fb = new visual.TextStim({
    win: psychoJS.window,
    name: 'Stimulus_fb',
    text: '',
    font: font_choice,
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "Intertrial_Interval"
  Intertrial_IntervalClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '+',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "LatCounter"
  LatCounterClock = new util.Clock();
  // Initialize components for Routine "BlockCounter"
  BlockCounterClock = new util.Clock();
  // Initialize components for Routine "Thanks"
  ThanksClock = new util.Clock();
  Thank = new visual.TextStim({
    win: psychoJS.window,
    name: 'Thank',
    text: 'Thank you for your participation!',
    font: font_choice,
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: 70, ori: 0,
    languageStyle: 'LTR',
    color: new util.Color(color_choice),  opacity: 1,
    depth: 0.0 
  });
  
  end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_2_allKeys;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_5
    Welcome_head.bold = true;
    Welcome_head.setAlignHoriz('center')
    Welcome_text.setAlignHoriz('center')
    text_3.setAlignHoriz('center')
    text_4.setAlignHoriz('center')
    text.setAlignHoriz('center')
    Allesklartext_2.setAlignHoriz('center')
    Allesklartext.setAlignHoriz('center')
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(Welcome_head);
    WelcomeComponents.push(Welcome_text);
    WelcomeComponents.push(key_resp_2);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Welcome_head* updates
    if (t >= 0.0 && Welcome_head.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcome_head.tStart = t;  // (not accounting for frame time here)
      Welcome_head.frameNStart = frameN;  // exact frame index
      
      Welcome_head.setAutoDraw(true);
    }

    
    // *Welcome_text* updates
    if (t >= 0.0 && Welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcome_text.tStart = t;  // (not accounting for frame time here)
      Welcome_text.frameNStart = frameN;  // exact frame index
      
      Welcome_text.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: [], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_2.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_3_allKeys;
var instr_train_sComponents;
function instr_train_sRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_train_s' ---
    t = 0;
    instr_train_sClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    instr_train_sComponents = [];
    instr_train_sComponents.push(text_3);
    instr_train_sComponents.push(key_resp_3);
    
    for (const thisComponent of instr_train_sComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_train_sRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_train_s' ---
    // get current time
    t = instr_train_sClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: [], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_train_sComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_train_sRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_train_s' ---
    for (const thisComponent of instr_train_sComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_3.stop();
    // the Routine "instr_train_s" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training_social;
function training_socialLoopBegin(training_socialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training_social = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trainingtrials_social.xlsx', '0:4'),
      seed: undefined, name: 'training_social'
    });
    psychoJS.experiment.addLoop(training_social); // add the loop to the experiment
    currentLoop = training_social;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTraining_social of training_social) {
      snapshot = training_social.getSnapshot();
      training_socialLoopScheduler.add(importConditions(snapshot));
      training_socialLoopScheduler.add(trialRoutineBegin(snapshot));
      training_socialLoopScheduler.add(trialRoutineEachFrame());
      training_socialLoopScheduler.add(trialRoutineEnd(snapshot));
      training_socialLoopScheduler.add(feedback_trainRoutineBegin(snapshot));
      training_socialLoopScheduler.add(feedback_trainRoutineEachFrame());
      training_socialLoopScheduler.add(feedback_trainRoutineEnd(snapshot));
      training_socialLoopScheduler.add(training_socialLoopEndIteration(training_socialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function training_socialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(training_social);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function training_socialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var training_nonsocial;
function training_nonsocialLoopBegin(training_nonsocialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training_nonsocial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trainingtrials_nonsocial.xlsx', '0:4'),
      seed: undefined, name: 'training_nonsocial'
    });
    psychoJS.experiment.addLoop(training_nonsocial); // add the loop to the experiment
    currentLoop = training_nonsocial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTraining_nonsocial of training_nonsocial) {
      snapshot = training_nonsocial.getSnapshot();
      training_nonsocialLoopScheduler.add(importConditions(snapshot));
      training_nonsocialLoopScheduler.add(trialRoutineBegin(snapshot));
      training_nonsocialLoopScheduler.add(trialRoutineEachFrame());
      training_nonsocialLoopScheduler.add(trialRoutineEnd(snapshot));
      training_nonsocialLoopScheduler.add(feedback_trainRoutineBegin(snapshot));
      training_nonsocialLoopScheduler.add(feedback_trainRoutineEachFrame());
      training_nonsocialLoopScheduler.add(feedback_trainRoutineEnd(snapshot));
      training_nonsocialLoopScheduler.add(training_nonsocialLoopEndIteration(training_nonsocialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function training_nonsocialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(training_nonsocial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function training_nonsocialLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var prob_fb;
function prob_fbLoopBegin(prob_fbLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prob_fb = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'trainingtrials_social_prob.xlsx', '0:4'),
      seed: undefined, name: 'prob_fb'
    });
    psychoJS.experiment.addLoop(prob_fb); // add the loop to the experiment
    currentLoop = prob_fb;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisProb_fb of prob_fb) {
      snapshot = prob_fb.getSnapshot();
      prob_fbLoopScheduler.add(importConditions(snapshot));
      prob_fbLoopScheduler.add(trialRoutineBegin(snapshot));
      prob_fbLoopScheduler.add(trialRoutineEachFrame());
      prob_fbLoopScheduler.add(trialRoutineEnd(snapshot));
      prob_fbLoopScheduler.add(feedback_probRoutineBegin(snapshot));
      prob_fbLoopScheduler.add(feedback_probRoutineEachFrame());
      prob_fbLoopScheduler.add(feedback_probRoutineEnd(snapshot));
      prob_fbLoopScheduler.add(prob_fbLoopEndIteration(prob_fbLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prob_fbLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prob_fb);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prob_fbLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(BlockCodeRoutineBegin(snapshot));
      blocksLoopScheduler.add(BlockCodeRoutineEachFrame());
      blocksLoopScheduler.add(BlockCodeRoutineEnd(snapshot));
      const cyclesLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(cyclesLoopBegin(cyclesLoopScheduler, snapshot));
      blocksLoopScheduler.add(cyclesLoopScheduler);
      blocksLoopScheduler.add(cyclesLoopEnd);
      blocksLoopScheduler.add(BlockCounterRoutineBegin(snapshot));
      blocksLoopScheduler.add(BlockCounterRoutineEachFrame());
      blocksLoopScheduler.add(BlockCounterRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var cycles;
function cyclesLoopBegin(cyclesLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    cycles = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'cycles'
    });
    psychoJS.experiment.addLoop(cycles); // add the loop to the experiment
    currentLoop = cycles;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisCycle of cycles) {
      snapshot = cycles.getSnapshot();
      cyclesLoopScheduler.add(importConditions(snapshot));
      cyclesLoopScheduler.add(LateralizationByCycleRoutineBegin(snapshot));
      cyclesLoopScheduler.add(LateralizationByCycleRoutineEachFrame());
      cyclesLoopScheduler.add(LateralizationByCycleRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      cyclesLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      cyclesLoopScheduler.add(trialsLoopScheduler);
      cyclesLoopScheduler.add(trialsLoopEnd);
      cyclesLoopScheduler.add(LatCounterRoutineBegin(snapshot));
      cyclesLoopScheduler.add(LatCounterRoutineEachFrame());
      cyclesLoopScheduler.add(LatCounterRoutineEnd(snapshot));
      cyclesLoopScheduler.add(cyclesLoopEndIteration(cyclesLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trial_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(trial_2RoutineEachFrame());
      trialsLoopScheduler.add(trial_2RoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(Intertrial_IntervalRoutineBegin(snapshot));
      trialsLoopScheduler.add(Intertrial_IntervalRoutineEachFrame());
      trialsLoopScheduler.add(Intertrial_IntervalRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function cyclesLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(cycles);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function cyclesLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _response_training_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial' ---
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    neutral_still.setImage(filename_neutral);
    response_training.keys = undefined;
    response_training.rt = undefined;
    _response_training_allKeys = [];
    Stimulus.setText(Number.parseInt(Stim).toString());
    left_disp.setText(left_cat);
    right_disp.setText(right_cat);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(fix_cross);
    trialComponents.push(neutral_still);
    trialComponents.push(response_training);
    trialComponents.push(Stimulus);
    trialComponents.push(left_disp);
    trialComponents.push(right_disp);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial' ---
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross.setAutoDraw(false);
    }
    
    // *neutral_still* updates
    if (t >= 1.0 && neutral_still.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neutral_still.tStart = t;  // (not accounting for frame time here)
      neutral_still.frameNStart = frameN;  // exact frame index
      
      neutral_still.setAutoDraw(true);
    }

    frameRemains = 1.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (neutral_still.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      neutral_still.setAutoDraw(false);
    }
    
    // *response_training* updates
    if (t >= 1 && response_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_training.tStart = t;  // (not accounting for frame time here)
      response_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_training.clearEvents(); });
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (response_training.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response_training.status = PsychoJS.Status.FINISHED;
  }

    if (response_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_training.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _response_training_allKeys = _response_training_allKeys.concat(theseKeys);
      if (_response_training_allKeys.length > 0) {
        response_training.keys = _response_training_allKeys[_response_training_allKeys.length - 1].name;  // just the last key pressed
        response_training.rt = _response_training_allKeys[_response_training_allKeys.length - 1].rt;
        // was this correct?
        if (response_training.keys == CorrCat) {
            response_training.corr = 1;
        } else {
            response_training.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Stimulus* updates
    if (t >= 1 && Stimulus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimulus.tStart = t;  // (not accounting for frame time here)
      Stimulus.frameNStart = frameN;  // exact frame index
      
      Stimulus.setAutoDraw(true);
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stimulus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stimulus.setAutoDraw(false);
    }
    
    // *left_disp* updates
    if (t >= 1 && left_disp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_disp.tStart = t;  // (not accounting for frame time here)
      left_disp.frameNStart = frameN;  // exact frame index
      
      left_disp.setAutoDraw(true);
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_disp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_disp.setAutoDraw(false);
    }
    
    // *right_disp* updates
    if (t >= 1 && right_disp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_disp.tStart = t;  // (not accounting for frame time here)
      right_disp.frameNStart = frameN;  // exact frame index
      
      right_disp.setAutoDraw(true);
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_disp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_disp.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial' ---
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_4
    
    
    thisExp.addData("left", left_cat);
    thisExp.addData("right", right_cat);
    thisExp.addData("stim", Stim);
    if ((response_training.keys === "left")) {
        thisExp.addData("ParticipantAnswer", left_cat);
    } else {
        if ((response_training.keys === "right")) {
            thisExp.addData("ParticipantAnswer", right_cat);
        } else {
            if ((response_training.keys === null)) {
                thisExp.addData("ParticipantAnswer", null);
            }
        }
    }
    // was no response the correct answer?!
    if (response_training.keys === undefined) {
      if (['None','none',undefined].includes(CorrCat)) {
         response_training.corr = 1;  // correct non-response
      } else {
         response_training.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_training.corr, level);
    }
    psychoJS.experiment.addData('response_training.keys', response_training.keys);
    psychoJS.experiment.addData('response_training.corr', response_training.corr);
    if (typeof response_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_training.rt', response_training.rt);
        routineTimer.reset();
        }
    
    response_training.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var time_h;
var time_a;
var time_miss;
var new_angry_2Clock;
var new_angry_2;
var new_happy_2Clock;
var new_happy_2;
var feedback_trainComponents;
function feedback_trainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_train' ---
    t = 0;
    feedback_trainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_9
    console.log("CorrCatTrain:", CorrCatTrain)
    console.log("left_cat:", left_cat)
    console.log("CorrCatTrain == left_cat:", CorrCatTrain == left_cat)
    if ((CorrCatTrain == left_cat)) {
        time_h = 6.0;
        time_a = 0.0;
    } else {
        time_h = 0.0;
        time_a = 6.0;
    }
    time_miss = 0;
    if ((response_training.keys == "left")) {
        left_color = "white";
        right_color = "grey";
    } else {
        if ((response_training.keys == "right")) {
            left_color = "grey";
            right_color = "white";
        } else {
            if ((response_training.keys == null)) {
                left_color = "grey";
                right_color = "grey";
                time_miss = 6.0;
                time_h = 0.0;
                time_a = 0.0;
            }
        }
    }
    new_angry_2Clock = new util.Clock();
    new_angry_2 = new visual.MovieStim({
      win: psychoJS.window,
      name: 'new_angry_2',
      units: 'height',
      movie: filename_feedback_angry,
      pos: [0, 0.225],
      size: [0.5, 0.5],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: true,
      });
    new_happy_2Clock = new util.Clock();
    new_happy_2 = new visual.MovieStim({
      win: psychoJS.window,
      name: 'new_happy_2',
      units: 'height',
      movie: filename_feedback_happy,
      pos: [0, 0.225],
      size: [0.5, 0.5],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    left_disp_fb_2.setColor(new util.Color(left_color));
    left_disp_fb_2.setText(left_cat);
    right_disp_fb_2.setColor(new util.Color(right_color));
    right_disp_fb_2.setText(right_cat);
    Stimulus_fb_2.setText(Number.parseInt(Stim).toString());
    // keep track of which components have finished
    feedback_trainComponents = [];
    feedback_trainComponents.push(feedback_miss);
    feedback_trainComponents.push(new_angry_2);
    feedback_trainComponents.push(new_happy_2);
    feedback_trainComponents.push(left_disp_fb_2);
    feedback_trainComponents.push(right_disp_fb_2);
    feedback_trainComponents.push(Stimulus_fb_2);
    
    for (const thisComponent of feedback_trainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_trainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_train' ---
    // get current time
    t = feedback_trainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_miss* updates
    if (t >= 0.0 && feedback_miss.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_miss.tStart = t;  // (not accounting for frame time here)
      feedback_miss.frameNStart = frameN;  // exact frame index
      
      feedback_miss.setAutoDraw(true);
    }

    frameRemains = 0.0 + time_miss - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_miss.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_miss.setAutoDraw(false);
    }
    
    // *new_angry_2* updates
    if (t >= 0.0 && new_angry_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_angry_2.tStart = t;  // (not accounting for frame time here)
      new_angry_2.frameNStart = frameN;  // exact frame index
      
      new_angry_2.setAutoDraw(true);
      new_angry_2.play();
    }

    frameRemains = 0.0 + time_a - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (new_angry_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      new_angry_2.setAutoDraw(false);
    }

    
    // *new_happy_2* updates
    if (t >= 0.0 && new_happy_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_happy_2.tStart = t;  // (not accounting for frame time here)
      new_happy_2.frameNStart = frameN;  // exact frame index
      
      new_happy_2.setAutoDraw(true);
      new_happy_2.play();
    }

    frameRemains = 0.0 + time_h - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (new_happy_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      new_happy_2.setAutoDraw(false);
    }

    
    // *left_disp_fb_2* updates
    if (t >= 0 && left_disp_fb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_disp_fb_2.tStart = t;  // (not accounting for frame time here)
      left_disp_fb_2.frameNStart = frameN;  // exact frame index
      
      left_disp_fb_2.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_disp_fb_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_disp_fb_2.setAutoDraw(false);
    }
    
    // *right_disp_fb_2* updates
    if (t >= 0 && right_disp_fb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_disp_fb_2.tStart = t;  // (not accounting for frame time here)
      right_disp_fb_2.frameNStart = frameN;  // exact frame index
      
      right_disp_fb_2.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_disp_fb_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_disp_fb_2.setAutoDraw(false);
    }
    
    // *Stimulus_fb_2* updates
    if (t >= 0 && Stimulus_fb_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimulus_fb_2.tStart = t;  // (not accounting for frame time here)
      Stimulus_fb_2.frameNStart = frameN;  // exact frame index
      
      Stimulus_fb_2.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stimulus_fb_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stimulus_fb_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_trainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_trainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_train' ---
    for (const thisComponent of feedback_trainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    new_angry_2.stop();
    new_happy_2.stop();
    // the Routine "feedback_train" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var Alles_klarComponents;
function Alles_klarRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Alles_klar' ---
    t = 0;
    Alles_klarClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Alles_klarComponents = [];
    Alles_klarComponents.push(text_4);
    Alles_klarComponents.push(key_resp_4);
    
    for (const thisComponent of Alles_klarComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Alles_klarRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Alles_klar' ---
    // get current time
    t = Alles_klarClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: [], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Alles_klarComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Alles_klarRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Alles_klar' ---
    for (const thisComponent of Alles_klarComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_4.stop();
    // the Routine "Alles_klar" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var instr_train_nsComponents;
function instr_train_nsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr_train_ns' ---
    t = 0;
    instr_train_nsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    instr_train_nsComponents = [];
    instr_train_nsComponents.push(text);
    instr_train_nsComponents.push(key_resp_5);
    
    for (const thisComponent of instr_train_nsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instr_train_nsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr_train_ns' ---
    // get current time
    t = instr_train_nsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: [], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instr_train_nsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instr_train_nsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr_train_ns' ---
    for (const thisComponent of instr_train_nsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_5.stop();
    // the Routine "instr_train_ns" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Allesklar_resp_2_allKeys;
var Alles_Klar_2Components;
function Alles_Klar_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Alles_Klar_2' ---
    t = 0;
    Alles_Klar_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Allesklar_resp_2.keys = undefined;
    Allesklar_resp_2.rt = undefined;
    _Allesklar_resp_2_allKeys = [];
    // keep track of which components have finished
    Alles_Klar_2Components = [];
    Alles_Klar_2Components.push(Allesklartext_2);
    Alles_Klar_2Components.push(Allesklar_resp_2);
    
    for (const thisComponent of Alles_Klar_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Alles_Klar_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Alles_Klar_2' ---
    // get current time
    t = Alles_Klar_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Allesklartext_2* updates
    if (t >= 0.0 && Allesklartext_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Allesklartext_2.tStart = t;  // (not accounting for frame time here)
      Allesklartext_2.frameNStart = frameN;  // exact frame index
      
      Allesklartext_2.setAutoDraw(true);
    }

    
    // *Allesklar_resp_2* updates
    if (t >= 0.0 && Allesklar_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Allesklar_resp_2.tStart = t;  // (not accounting for frame time here)
      Allesklar_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Allesklar_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Allesklar_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Allesklar_resp_2.clearEvents(); });
    }

    if (Allesklar_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = Allesklar_resp_2.getKeys({keyList: [], waitRelease: false});
      _Allesklar_resp_2_allKeys = _Allesklar_resp_2_allKeys.concat(theseKeys);
      if (_Allesklar_resp_2_allKeys.length > 0) {
        Allesklar_resp_2.keys = _Allesklar_resp_2_allKeys[_Allesklar_resp_2_allKeys.length - 1].name;  // just the last key pressed
        Allesklar_resp_2.rt = _Allesklar_resp_2_allKeys[_Allesklar_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Alles_Klar_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Alles_Klar_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Alles_Klar_2' ---
    for (const thisComponent of Alles_Klar_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Allesklar_resp_2.stop();
    // the Routine "Alles_Klar_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prob_msg;
var new_angry_4Clock;
var new_angry_4;
var new_happy_4Clock;
var new_happy_4;
var feedback_probComponents;
function feedback_probRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback_prob' ---
    t = 0;
    feedback_probClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_12
    console.log("prob_fb_counter", prob_fb_counter)
    
    console.log("Response:", response_training.keys, "CorrCat(Prob):", CorrCatProb, "left_cat:", left_cat, "right_cat", right_cat)
    
    
    if ([0,1,2].includes(prob_fb_counter) && left_cat == CorrCatProb) {
        prob_msg = "Richtige Antwort!";
    //    if(weighted_random([true, false], [0.8, 0.2])){
            //congruent
            console.log("Congruent image!")
            time_h = 6.0;
            time_a = 0.0;
    //    } else {
            //incongruent
    //        console.log("Incongruent image!")
    //        time_h = 0.0;
    //        time_a = 6.0;
    //    }
    } else {
        if ([0,1,2].includes(prob_fb_counter) && right_cat == CorrCatProb) {
        prob_msg = "Falsche Antwort!";
    //    if(weighted_random([true, false], [0.8, 0.2])){
    //        //congruent
            console.log("Congruent image!")
            time_h = 0.0;
            time_a = 6.0;
    //    } else {
            //incongruent
    //        console.log("Incongruent image!")
    //        time_h = 6.0;
    //        time_a = 0.0;
        }     
    }
    if (prob_fb_counter == 3){
            prob_msg = "Richtige Antwort!";
            console.log("Incongruent image!")
            time_h = 0.0;
            time_a = 6.0;
    }
    
    
    time_miss = 0;
    if ((response_training.keys == "left")) {
        left_color = "white";
        right_color = "grey";
    } else {
        if ((response_training.keys == "right")) {
            left_color = "grey";
            right_color = "white";
        } else {
            if ((response_training.keys == null)) {
                left_color = "grey";
                right_color = "grey";
                time_miss = 6;
                time_a = 0;
                time_h = 0;
            }
        }
    }
    
    new_angry_4Clock = new util.Clock();
    new_angry_4 = new visual.MovieStim({
      win: psychoJS.window,
      name: 'new_angry_4',
      units: 'height',
      movie: filename_feedback_angry,
      pos: [0, 0.225],
      size: [0.5, 0.5],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: true,
      });
    new_happy_4Clock = new util.Clock();
    new_happy_4 = new visual.MovieStim({
      win: psychoJS.window,
      name: 'new_happy_4',
      units: 'height',
      movie: filename_feedback_happy,
      pos: [0, 0.225],
      size: [0.5, 0.5],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    left_disp_fb_4.setColor(new util.Color(left_color));
    left_disp_fb_4.setText(left_cat);
    right_disp_fb_4.setColor(new util.Color(right_color));
    right_disp_fb_4.setText(right_cat);
    Stimulus_fb_4.setText(Number.parseInt(Stim).toString());
    Prob_feedback.setText(prob_msg);
    // keep track of which components have finished
    feedback_probComponents = [];
    feedback_probComponents.push(feedback_miss2_3);
    feedback_probComponents.push(new_angry_4);
    feedback_probComponents.push(new_happy_4);
    feedback_probComponents.push(left_disp_fb_4);
    feedback_probComponents.push(right_disp_fb_4);
    feedback_probComponents.push(Stimulus_fb_4);
    feedback_probComponents.push(Prob_feedback);
    
    for (const thisComponent of feedback_probComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedback_probRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback_prob' ---
    // get current time
    t = feedback_probClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_miss2_3* updates
    if (t >= 0.0 && feedback_miss2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_miss2_3.tStart = t;  // (not accounting for frame time here)
      feedback_miss2_3.frameNStart = frameN;  // exact frame index
      
      feedback_miss2_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + time_miss - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_miss2_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_miss2_3.setAutoDraw(false);
    }
    
    // *new_angry_4* updates
    if (t >= 0.0 && new_angry_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_angry_4.tStart = t;  // (not accounting for frame time here)
      new_angry_4.frameNStart = frameN;  // exact frame index
      
      new_angry_4.setAutoDraw(true);
      new_angry_4.play();
    }

    frameRemains = 0.0 + time_a - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (new_angry_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      new_angry_4.setAutoDraw(false);
    }

    
    // *new_happy_4* updates
    if (t >= 0.0 && new_happy_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_happy_4.tStart = t;  // (not accounting for frame time here)
      new_happy_4.frameNStart = frameN;  // exact frame index
      
      new_happy_4.setAutoDraw(true);
      new_happy_4.play();
    }

    frameRemains = 0.0 + time_h - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (new_happy_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      new_happy_4.setAutoDraw(false);
    }

    
    // *left_disp_fb_4* updates
    if (t >= 0 && left_disp_fb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_disp_fb_4.tStart = t;  // (not accounting for frame time here)
      left_disp_fb_4.frameNStart = frameN;  // exact frame index
      
      left_disp_fb_4.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_disp_fb_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_disp_fb_4.setAutoDraw(false);
    }
    
    // *right_disp_fb_4* updates
    if (t >= 0 && right_disp_fb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_disp_fb_4.tStart = t;  // (not accounting for frame time here)
      right_disp_fb_4.frameNStart = frameN;  // exact frame index
      
      right_disp_fb_4.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_disp_fb_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_disp_fb_4.setAutoDraw(false);
    }
    
    // *Stimulus_fb_4* updates
    if (t >= 0 && Stimulus_fb_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimulus_fb_4.tStart = t;  // (not accounting for frame time here)
      Stimulus_fb_4.frameNStart = frameN;  // exact frame index
      
      Stimulus_fb_4.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stimulus_fb_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stimulus_fb_4.setAutoDraw(false);
    }
    
    // *Prob_feedback* updates
    if (t >= 0.0 && Prob_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Prob_feedback.tStart = t;  // (not accounting for frame time here)
      Prob_feedback.frameNStart = frameN;  // exact frame index
      
      Prob_feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Prob_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Prob_feedback.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_probComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var prob_fb_counter;
function feedback_probRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback_prob' ---
    for (const thisComponent of feedback_probComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_12
    thisExp.addData("CorrCat", CorrCat);
    prob_fb_counter = prob_fb_counter + 1;
    
    if ((((response_training.keys == "left") && (CorrCatProb == left_cat)) || ((response_training.keys == "right") && (CorrCatProb == right_cat)))) {
        thisExp.addData("CorrectAns", "Yes");
        console.log("Correct Answer!");
    } else {
        thisExp.addData("CorrectAns", "No");
        console.log("Wrong Answer!");
    }
    
    new_angry_4.stop();
    new_happy_4.stop();
    // the Routine "feedback_prob" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Allesklar_resp_allKeys;
var Alles_Klar_3Components;
function Alles_Klar_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Alles_Klar_3' ---
    t = 0;
    Alles_Klar_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Allesklar_resp.keys = undefined;
    Allesklar_resp.rt = undefined;
    _Allesklar_resp_allKeys = [];
    // keep track of which components have finished
    Alles_Klar_3Components = [];
    Alles_Klar_3Components.push(Allesklartext);
    Alles_Klar_3Components.push(Allesklar_resp);
    
    for (const thisComponent of Alles_Klar_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Alles_Klar_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Alles_Klar_3' ---
    // get current time
    t = Alles_Klar_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Allesklartext* updates
    if (t >= 0.0 && Allesklartext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Allesklartext.tStart = t;  // (not accounting for frame time here)
      Allesklartext.frameNStart = frameN;  // exact frame index
      
      Allesklartext.setAutoDraw(true);
    }

    
    // *Allesklar_resp* updates
    if (t >= 0.0 && Allesklar_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Allesklar_resp.tStart = t;  // (not accounting for frame time here)
      Allesklar_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Allesklar_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Allesklar_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Allesklar_resp.clearEvents(); });
    }

    if (Allesklar_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = Allesklar_resp.getKeys({keyList: [], waitRelease: false});
      _Allesklar_resp_allKeys = _Allesklar_resp_allKeys.concat(theseKeys);
      if (_Allesklar_resp_allKeys.length > 0) {
        Allesklar_resp.keys = _Allesklar_resp_allKeys[_Allesklar_resp_allKeys.length - 1].name;  // just the last key pressed
        Allesklar_resp.rt = _Allesklar_resp_allKeys[_Allesklar_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Alles_Klar_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Alles_Klar_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Alles_Klar_3' ---
    for (const thisComponent of Alles_Klar_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Allesklar_resp.stop();
    // the Routine "Alles_Klar_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var filenames_noxl;
var BlockCodeComponents;
function BlockCodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlockCode' ---
    t = 0;
    BlockCodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from BlockCode1
    if (Blocklist[BlockCounter] == "social") {
        //trial_file = "trials_social.xlsx";
        filenames_noxl = [  ["Stimuli/neutral/Still.jpg", "Stimuli/social/happy/F01-Happy Women.mp4", "Stimuli/social/angry/F04-Angry Women.mp4"], 
                            ["Stimuli/neutral/Still.jpg", "Stimuli/social/happy/M02-Happy Man.mp4", "Stimuli/social/angry/M06-Angry Man.mp4"], 
                            ["Stimuli/neutral/Still.jpg", "Stimuli/social/happy/F01-Happy Women.mp4", "Stimuli/social/angry/F04-Angry Women.mp4"], 
                            ["Stimuli/neutral/Still.jpg", "Stimuli/social/happy/M02-Happy Man.mp4", "Stimuli/social/angry/M06-Angry Man.mp4"]];
    } else {
        if (Blocklist[BlockCounter] == "nonsocial") {
            //trial_file = "trials_nonsocial.xlsx";
            filenames_noxl = [  ["Stimuli/neutral/Still.jpg", "Stimuli/nonsocial/Right Tick.mp4", "Stimuli/nonsocial/Wrong Tick.mp4"], 
                                ["Stimuli/neutral/Still.jpg", "Stimuli/nonsocial/Right Tick.mp4", "Stimuli/nonsocial/Wrong Tick.mp4"], 
                                ["Stimuli/neutral/Still.jpg", "Stimuli/nonsocial/Right Tick.mp4", "Stimuli/nonsocial/Wrong Tick.mp4"], 
                                ["Stimuli/neutral/Still.jpg", "Stimuli/nonsocial/Right Tick.mp4", "Stimuli/nonsocial/Wrong Tick.mp4"]];
        }
    }
    
    console.log("filenames_noxl:" + filenames_noxl)
    /*path = os.path.join(cwd, trial_file)
    book = openpyxl.load_workbook(filename = path)
    sheet = book.active
    
    listAB = ['A', 'B']*2
    random.shuffle(listAB)
    
    for index, element in enumerate(listAB, start=1):
    sheet.cell(row = index + 1, column = 5).value = element
    
    filenames = []
    for x in range(4):
    filenames.append([])
    
    #here you iterate over the rows in the specific column
    for row in range(2,6):
    for column in "BCD":  #Here you can add or reduce the columns
    cell_name = "{}{}".format(column, row)
    filenames[row-2].append(sheet[cell_name].value) # the value of the specific cell
    
    randnumbers = []
    for x in range(1, 5):
    randnumbers.append(random.randint(9, 99))
    
    for row in range(2,6):
    for column in "A":  #Here you can add or reduce the columns
    cell_name = "{}{}".format(column, row)
    sheet[cell_name].value = randnumbers[row-2]# the value of the specific cell
    
    book.save(filename = trial_file)*/
    
    // keep track of which components have finished
    BlockCodeComponents = [];
    
    for (const thisComponent of BlockCodeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlockCodeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlockCode' ---
    // get current time
    t = BlockCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlockCodeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockCodeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlockCode' ---
    for (const thisComponent of BlockCodeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "BlockCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var CycleText1_dur;
var CycleText2_dur;
var CycleText3_dur;
var CycleText4_dur;
var _key_resp_6_allKeys;
var LateralizationByCycleComponents;
function LateralizationByCycleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'LateralizationByCycle' ---
    t = 0;
    LateralizationByCycleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_8
    /*function randomChoice(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }*/
    
    if (randomChoice([true, false])) {
        right_cat = "A";
        left_cat = "B";
    } else {
        left_cat = "A";
        right_cat = "B";
    }
    
    console.log("BlockCounter:" + BlockCounter)
    shuffle(numbarray[BlockCounter]);
    console.log("numbarray[BlockCounter]:", numbarray[BlockCounter]);
    shuffle(filenames_noxl);
    console.log(filenames_noxl);
    console.log("Cycletext for next block cond: ", + ((BlockCounter in [1, 2, 3]) && (CycleCounter == 0)))
    
    //"blocks:" + BlockCounter.toString()) + 
        //", cycles:") + CycleCounter.toString()) + "\nright_cat: ") + 
        //right_cat.toString()) + " left_cat: ") + 
        //left_cat.toString()) + 
    if (((BlockCounter == 0) && (CycleCounter == 0))) {
        CycleText1_dur = undefined
        CycleText2_dur = 0
        CycleText3_dur = 0
        CycleText4_dur = 0
        CycleText = centerfy(
        "\n\nWe are now starting the first block.\n\n" +
        "Everything works exactly as in the training runs." +
        "\n\nIn the first pass you must \n" +
        "guess the assignment with the arrow keys.\n\n" +
        "But try to memorize the correct assignment!\n" +
        "In total, you will see 4 different numbers.\n" + 
        "After that, there will be a short pause. \n\n" +
        "Press any key, \n " +
        "to start the first block!\n");
    } else {
        if (([0, 1, 2, 3].includes(BlockCounter)) && (CycleCounter == 1)) {
            CycleText1_dur = 0
            CycleText2_dur = undefined
            CycleText3_dur = 0
            CycleText4_dur = 0
            CycleText = centerfy(
           "You have now seen all the numbers in this block \n" +
            "a first time.\n\nPause for a moment!\n\n" +
            "You will be shown all the numbers again in a moment.\n" + 
            "Try to match the numbers correctly.\n\n" +
            "Notice that the pictures and numbers have been recombined.\n" +
            "A and B might also have switched places!\n\n" +
            "Press any key,\n" +
            "to start the next pass.");
        } else {
            if (([0, 1, 2, 3].includes(BlockCounter)) && ([2, 3, 4, 5].includes(CycleCounter))) {
                CycleText1_dur = 0
                CycleText2_dur = 0
                CycleText3_dur = undefined
                CycleText4_dur = 0
                CycleText = centerfy(
                "Very good!\n\n" +
                "You have completed another pass!\n\n" +
                "There are still " + (6 - CycleCounter).toString() +
                " more passes,\n" +
                "in which you will be shown all the numbers again.\n\n" +
                "Press any key,\n "+ 
                "to start the next run.");
            } else {
                if (([1, 2, 3].includes(BlockCounter)) && (CycleCounter == 0)) {
                    CycleText1_dur = 0
                    CycleText2_dur = 0
                    CycleText3_dur = 0
                    CycleText4_dur = undefined
                    CycleText = centerfy(
                    "You have now completed a full block.\n\n" + 
                    "In the next block you will see different images.\n" +
                    "Instead of fractals you will now see faces.\n" +
                    "(or vice versa).\n\n" + 
                    "The principle remains the same.\n\n" +
                    "There are still " + (4- BlockCounter).toString() +
                    " more blocks.\n\n" +
                    "When you are ready \n " +
                    "press any button,\n" +
                    "to start the next block.\n");
                }
            }
        }
    }
    
    CycleText3.setText('PAUSE\n\nPress any key, to start the next cycle.');
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    LateralizationByCycleComponents = [];
    LateralizationByCycleComponents.push(CycleText1);
    LateralizationByCycleComponents.push(CycleText2);
    LateralizationByCycleComponents.push(CycleText3);
    LateralizationByCycleComponents.push(CycleText4);
    LateralizationByCycleComponents.push(key_resp_6);
    
    for (const thisComponent of LateralizationByCycleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function LateralizationByCycleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'LateralizationByCycle' ---
    // get current time
    t = LateralizationByCycleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *CycleText1* updates
    if (t >= 0.0 && CycleText1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CycleText1.tStart = t;  // (not accounting for frame time here)
      CycleText1.frameNStart = frameN;  // exact frame index
      
      CycleText1.setAutoDraw(true);
    }

    frameRemains = 0.0 + CycleText1_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CycleText1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CycleText1.setAutoDraw(false);
    }
    
    // *CycleText2* updates
    if (t >= 0.0 && CycleText2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CycleText2.tStart = t;  // (not accounting for frame time here)
      CycleText2.frameNStart = frameN;  // exact frame index
      
      CycleText2.setAutoDraw(true);
    }

    frameRemains = 0.0 + CycleText2_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CycleText2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CycleText2.setAutoDraw(false);
    }
    
    // *CycleText3* updates
    if (t >= 0.0 && CycleText3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CycleText3.tStart = t;  // (not accounting for frame time here)
      CycleText3.frameNStart = frameN;  // exact frame index
      
      CycleText3.setAutoDraw(true);
    }

    frameRemains = 0.0 + CycleText3_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CycleText3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CycleText3.setAutoDraw(false);
    }
    
    // *CycleText4* updates
    if (t >= 0.0 && CycleText4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CycleText4.tStart = t;  // (not accounting for frame time here)
      CycleText4.frameNStart = frameN;  // exact frame index
      
      CycleText4.setAutoDraw(true);
    }

    frameRemains = 0.0 + CycleText4_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (CycleText4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      CycleText4.setAutoDraw(false);
    }
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: [], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LateralizationByCycleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LateralizationByCycleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'LateralizationByCycle' ---
    for (const thisComponent of LateralizationByCycleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_6.stop();
    // the Routine "LateralizationByCycle" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var filename_thisN_neutral;
var filename_thisN_happy;
var filename_thisN_angry;
var stim_thisN;
var _response_training_2_allKeys;
var trial_2Components;
function trial_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_2' ---
    t = 0;
    trial_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(7.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_7
    filename_thisN_neutral = filenames_noxl[TrialCounter][0];
    filename_thisN_happy = filenames_noxl[TrialCounter][1];
    filename_thisN_angry = filenames_noxl[TrialCounter][2];
    stim_thisN = numbarray[BlockCounter][TrialCounter];
    console.log("stim_thisN:", stim_thisN);
    console.log("CorrDict[stim_thisN]:", CorrDict[stim_thisN]);
    new_neutral_2_jpg.setImage(filename_thisN_neutral);
    response_training_2.keys = undefined;
    response_training_2.rt = undefined;
    _response_training_2_allKeys = [];
    Stimulus_2.setText(Number.parseInt(stim_thisN).toString());
    left_disp_2.setText(left_cat);
    right_disp_2.setText(right_cat);
    // keep track of which components have finished
    trial_2Components = [];
    trial_2Components.push(fix_cross_2);
    trial_2Components.push(new_neutral_2_jpg);
    trial_2Components.push(response_training_2);
    trial_2Components.push(Stimulus_2);
    trial_2Components.push(left_disp_2);
    trial_2Components.push(right_disp_2);
    
    for (const thisComponent of trial_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_2' ---
    // get current time
    t = trial_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross_2* updates
    if (t >= 0 && fix_cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross_2.tStart = t;  // (not accounting for frame time here)
      fix_cross_2.frameNStart = frameN;  // exact frame index
      
      fix_cross_2.setAutoDraw(true);
    }

    frameRemains = 0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross_2.setAutoDraw(false);
    }
    
    // *new_neutral_2_jpg* updates
    if (t >= 1.0 && new_neutral_2_jpg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_neutral_2_jpg.tStart = t;  // (not accounting for frame time here)
      new_neutral_2_jpg.frameNStart = frameN;  // exact frame index
      
      new_neutral_2_jpg.setAutoDraw(true);
    }

    frameRemains = 1.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (new_neutral_2_jpg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      new_neutral_2_jpg.setAutoDraw(false);
    }
    
    // *response_training_2* updates
    if (t >= 1 && response_training_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_training_2.tStart = t;  // (not accounting for frame time here)
      response_training_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response_training_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response_training_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response_training_2.clearEvents(); });
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (response_training_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      response_training_2.status = PsychoJS.Status.FINISHED;
  }

    if (response_training_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = response_training_2.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _response_training_2_allKeys = _response_training_2_allKeys.concat(theseKeys);
      if (_response_training_2_allKeys.length > 0) {
        response_training_2.keys = _response_training_2_allKeys[_response_training_2_allKeys.length - 1].name;  // just the last key pressed
        response_training_2.rt = _response_training_2_allKeys[_response_training_2_allKeys.length - 1].rt;
        // was this correct?
        if (response_training_2.keys == CorrCat) {
            response_training_2.corr = 1;
        } else {
            response_training_2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Stimulus_2* updates
    if (t >= 1 && Stimulus_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimulus_2.tStart = t;  // (not accounting for frame time here)
      Stimulus_2.frameNStart = frameN;  // exact frame index
      
      Stimulus_2.setAutoDraw(true);
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stimulus_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stimulus_2.setAutoDraw(false);
    }
    
    // *left_disp_2* updates
    if (t >= 1 && left_disp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_disp_2.tStart = t;  // (not accounting for frame time here)
      left_disp_2.frameNStart = frameN;  // exact frame index
      
      left_disp_2.setAutoDraw(true);
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_disp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_disp_2.setAutoDraw(false);
    }
    
    // *right_disp_2* updates
    if (t >= 1 && right_disp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_disp_2.tStart = t;  // (not accounting for frame time here)
      right_disp_2.frameNStart = frameN;  // exact frame index
      
      right_disp_2.setAutoDraw(true);
    }

    frameRemains = 1 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_disp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_disp_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_2' ---
    for (const thisComponent of trial_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_7
    thisExp.addData("left", left_cat);
    thisExp.addData("right", right_cat);
    thisExp.addData("stim", stim_thisN);
    if ((response_training_2.keys == "left")) {
        thisExp.addData("ParticipantAnswer", left_cat);
    } else {
        if ((response_training_2.keys == "right")) {
            thisExp.addData("ParticipantAnswer", right_cat);
        } else {
            if ((response_training_2.keys == null)) {
                thisExp.addData("ParticipantAnswer", null);
            }
        }
    }
    // was no response the correct answer?!
    if (response_training_2.keys === undefined) {
      if (['None','none',undefined].includes(CorrCat)) {
         response_training_2.corr = 1;  // correct non-response
      } else {
         response_training_2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(response_training_2.corr, level);
    }
    psychoJS.experiment.addData('response_training_2.keys', response_training_2.keys);
    psychoJS.experiment.addData('response_training_2.corr', response_training_2.corr);
    if (typeof response_training_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response_training_2.rt', response_training_2.rt);
        routineTimer.reset();
        }
    
    response_training_2.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var new_angryClock;
var new_angry;
var new_happyClock;
var new_happy;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_6
    if ((((response_training_2.keys == "left") && (CorrDict[stim_thisN] == left_cat)) || ((response_training_2.keys == "right") && (CorrDict[stim_thisN] == right_cat)))) {
        if(weighted_random([true, false], [0.85, 0.15])){
            //congruent
            thisExp.addData("Congr/Incongr", "Congruent")
            thisExp.addData("Reward", 1)
            console.log("Congruent image!")
            time_h = 6.0;
            time_a = 0.0;
        } else {
            //incongruent
            thisExp.addData("Congr/Incongr", "Incongruent")
            thisExp.addData("Reward", 0)
            console.log("Incongruent image!")
            time_h = 0.0;
            time_a = 6.0;
        }
    } else {
     if(weighted_random([true, false], [0.85, 0.15])){
            //congruent
            console.log("Congruent image!")
            thisExp.addData("Congr/Incongr", "Congruent")
            thisExp.addData("Reward", 0)
            time_h = 0.0;
            time_a = 6.0;
        } else {
            //incongruent
            console.log("Incongruent image!")
            thisExp.addData("Congr/Incongr", "Congruent")
            thisExp.addData("Reward", 1)
            time_h = 6.0;
            time_a = 0.0;
            }     
    }
    time_miss = 0;
    if ((response_training_2.keys == "left")) {
        left_color = "white";
        right_color = "grey";
    } else {
        if ((response_training_2.keys == "right")) {
            left_color = "grey";
            right_color = "white";
        } else {
            if ((response_training_2.keys == null)) {
                left_color = "grey";
                right_color = "grey";
                time_miss = 6;
                time_a = 0;
                time_h = 0;
            }
        }
    }
    
    new_angryClock = new util.Clock();
    new_angry = new visual.MovieStim({
      win: psychoJS.window,
      name: 'new_angry',
      units: 'height',
      movie: filename_thisN_angry,
      pos: [0, 0.225],
      size: [0.5, 0.5],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: true,
      });
    new_happyClock = new util.Clock();
    new_happy = new visual.MovieStim({
      win: psychoJS.window,
      name: 'new_happy',
      units: 'height',
      movie: filename_thisN_happy,
      pos: [0, 0.225],
      size: [0.5, 0.5],
      ori: 0,
      opacity: 1,
      loop: false,
      noAudio: false,
      });
    left_disp_fb.setColor(new util.Color(left_color));
    left_disp_fb.setText(left_cat);
    right_disp_fb.setColor(new util.Color(right_color));
    right_disp_fb.setText(right_cat);
    Stimulus_fb.setText(Number.parseInt(stim_thisN).toString());
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_miss2);
    feedbackComponents.push(new_angry);
    feedbackComponents.push(new_happy);
    feedbackComponents.push(left_disp_fb);
    feedbackComponents.push(right_disp_fb);
    feedbackComponents.push(Stimulus_fb);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_miss2* updates
    if (t >= 0.0 && feedback_miss2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_miss2.tStart = t;  // (not accounting for frame time here)
      feedback_miss2.frameNStart = frameN;  // exact frame index
      
      feedback_miss2.setAutoDraw(true);
    }

    frameRemains = 0.0 + time_miss - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_miss2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_miss2.setAutoDraw(false);
    }
    
    // *new_angry* updates
    if (t >= 0.0 && new_angry.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_angry.tStart = t;  // (not accounting for frame time here)
      new_angry.frameNStart = frameN;  // exact frame index
      
      new_angry.setAutoDraw(true);
      new_angry.play();
    }

    frameRemains = 0.0 + time_a - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (new_angry.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      new_angry.setAutoDraw(false);
    }

    
    // *new_happy* updates
    if (t >= 0.0 && new_happy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      new_happy.tStart = t;  // (not accounting for frame time here)
      new_happy.frameNStart = frameN;  // exact frame index
      
      new_happy.setAutoDraw(true);
      new_happy.play();
    }

    frameRemains = 0.0 + time_h - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (new_happy.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      new_happy.setAutoDraw(false);
    }

    
    // *left_disp_fb* updates
    if (t >= 0 && left_disp_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_disp_fb.tStart = t;  // (not accounting for frame time here)
      left_disp_fb.frameNStart = frameN;  // exact frame index
      
      left_disp_fb.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_disp_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_disp_fb.setAutoDraw(false);
    }
    
    // *right_disp_fb* updates
    if (t >= 0 && right_disp_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_disp_fb.tStart = t;  // (not accounting for frame time here)
      right_disp_fb.frameNStart = frameN;  // exact frame index
      
      right_disp_fb.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_disp_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_disp_fb.setAutoDraw(false);
    }
    
    // *Stimulus_fb* updates
    if (t >= 0 && Stimulus_fb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stimulus_fb.tStart = t;  // (not accounting for frame time here)
      Stimulus_fb.frameNStart = frameN;  // exact frame index
      
      Stimulus_fb.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Stimulus_fb.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Stimulus_fb.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from code_6
    thisExp.addData("CorrCat", CorrDict[stim_thisN])
    thisExp.addData("BlockType", Blocklist[BlockCounter])
    
    if ((((response_training_2.keys == "left") && (CorrDict[stim_thisN] == left_cat)) || ((response_training_2.keys == "right") && (CorrDict[stim_thisN] == right_cat)))) {
        thisExp.addData("CorrectAns", "Yes");
        console.log("Correct Answer!");
    } else {
        thisExp.addData("CorrectAns", "No");
        console.log("Wrong Answer!");
    }
    
    new_angry.stop();
    new_happy.stop();
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Intertrial_IntervalComponents;
function Intertrial_IntervalRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Intertrial_Interval' ---
    t = 0;
    Intertrial_IntervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    console.log(TrialCounter);
    
    // keep track of which components have finished
    Intertrial_IntervalComponents = [];
    Intertrial_IntervalComponents.push(text_2);
    
    for (const thisComponent of Intertrial_IntervalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Intertrial_IntervalRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Intertrial_Interval' ---
    // get current time
    t = Intertrial_IntervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Intertrial_IntervalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var TrialCounter;
function Intertrial_IntervalRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Intertrial_Interval' ---
    for (const thisComponent of Intertrial_IntervalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if(TrialCounter < 3){
    TrialCounter = TrialCounter + 1;
    } else {
        if(TrialCounter == 3) {
            TrialCounter = 0;
            console.log("TrialCounter reset to: " + TrialCounter)
        }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var LatCounterComponents;
function LatCounterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'LatCounter' ---
    t = 0;
    LatCounterClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    LatCounterComponents = [];
    
    for (const thisComponent of LatCounterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function LatCounterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'LatCounter' ---
    // get current time
    t = LatCounterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LatCounterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var CycleCounter;
function LatCounterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'LatCounter' ---
    for (const thisComponent of LatCounterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if(CycleCounter < 5){
    CycleCounter = CycleCounter + 1;
    } else {
        if(CycleCounter == 5) {
            CycleCounter = 0;
            console.log("CycleCounter reset to:" + CycleCounter)
        }
    }
    // the Routine "LatCounter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BlockCounterComponents;
function BlockCounterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BlockCounter' ---
    t = 0;
    BlockCounterClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    BlockCounterComponents = [];
    
    for (const thisComponent of BlockCounterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BlockCounterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BlockCounter' ---
    // get current time
    t = BlockCounterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlockCounterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var BlockCounter;
function BlockCounterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BlockCounter' ---
    for (const thisComponent of BlockCounterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if(BlockCounter < 3){
    BlockCounter = BlockCounter + 1;
    } else {
        if(BlockCounter == 3) {
            BlockCounter = 0;
            console.log("BlockCounter reset to: " + BlockCounter)
        }
    }
    // the Routine "BlockCounter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _end_allKeys;
var ThanksComponents;
function ThanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Thanks' ---
    t = 0;
    ThanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    end.keys = undefined;
    end.rt = undefined;
    _end_allKeys = [];
    // keep track of which components have finished
    ThanksComponents = [];
    ThanksComponents.push(Thank);
    ThanksComponents.push(end);
    
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ThanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Thanks' ---
    // get current time
    t = ThanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Thank* updates
    if (t >= 0.0 && Thank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Thank.tStart = t;  // (not accounting for frame time here)
      Thank.frameNStart = frameN;  // exact frame index
      
      Thank.setAutoDraw(true);
    }

    
    // *end* updates
    if (t >= 0.0 && end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end.tStart = t;  // (not accounting for frame time here)
      end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { end.clearEvents(); });
    }

    if (end.status === PsychoJS.Status.STARTED) {
      let theseKeys = end.getKeys({keyList: [], waitRelease: false});
      _end_allKeys = _end_allKeys.concat(theseKeys);
      if (_end_allKeys.length > 0) {
        end.keys = _end_allKeys[_end_allKeys.length - 1].name;  // just the last key pressed
        end.rt = _end_allKeys[_end_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ThanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ThanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Thanks' ---
    for (const thisComponent of ThanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    end.stop();
    // the Routine "Thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
