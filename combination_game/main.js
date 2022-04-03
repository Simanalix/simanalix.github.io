/*NOTICE:
  All code fully written authored by Simon Willover
  Have a nice day, please!
*/

const actual_allowed_word_variety = 100000;

let file_input = document.querySelector("input");

let logger = document.querySelector("#logger");

let log = function(txt){
  logger.innerHTML += "<br>" + txt;
};


window.total_words = 0;
window.words = {};
window.word_frequencies = [];

let read_word_file = function(arr){
  let t1 = Date.now(), t2;
  arr = arr.split(/\s/);
  arr.shift();
  arr.pop();
  arr.pop();
  let parr;
  let m = Math.min(actual_allowed_word_variety, arr.length);
  for(let i = 0; i < m; i++){
    parr = arr[i].split(",");
    parr[1] = Number(parr[1]);
    total_words += parr[1];
    words[parr[0]] = parr[1];
    word_frequencies[i] = parr;
  }
  t2 = Date.now();
  log(m +" words\nTook "+ ((t2-t1)/1000).toFixed(3) +" seconds to load "+ total_words +" words.");
};
file_input.onchange = function(e){
  let f = file_input.files[0];
  if(f){
    let reader = new FileReader();
    reader.onload = function(e){
      read_word_file(e.target.result);
    }
    reader.readAsText(f);
  }
};

let do_fetch = function(){
  let word_file_url = "https://simanalix.github.io/combination_game/data_sets/unigram_freq.csv";
  if(location.hostname === "simanalix.github.io"){
    fetch(word_file_url).then(resp => resp.blob()).then(blob => blob.text()).then(text => read_word_file(text));
  }
};

// Game Settigs class
let GameSettings = function(word_length, words, word_frequencies, total_words){
  this.word_length = word_length || this.word_length;
  this.words = words || {};
  this.word_frequencies = word_frequencies || [];
  this.total_words = total_words || 0;
  if((word_length || !words) && window.word_frequencies){
    let w;
    for(let i = 0; i < window.word_frequencies.length; i++){
      w = window.word_frequencies[i];
      if(w[0].length === this.word_length){
        this.word_frequencies.push(w);
        this.words[w[0]] = w[1];
      }
    }
  }
  if(!total_words){
    for(let i = 0; i < this.word_frequencies.length; i++){
      this.total_words += this.word_frequencies[i][1];
    }
  }
};
GameSettings.prototype.word_length = 5;
GameSettings.prototype.max_guesses = Infinity;
GameSettings.words = {};
GameSettings.word_frequencies = [];

// Game class
let Game = function(settings){
  this.settings = settings || new GameSettings();
  this.guesses = [];
  this.hints = [];
  let wf = this.settings.word_frequencies;
  let r = Math.random()*this.settings.total_words;
  for(let i = 0; i < wf.length; i++){
    if(wf[i][0].length !== this.settings.word_length) continue;
    r -= wf[i][1];
    if(r<0){
      this.answer = wf[i][0];
      break;
    }
  }
};
Game.prototype.settings = new GameSettings();
Game.prototype.answer = "";
Game.prototype.guesses = [];
Game.prototype.hints = [];
Game.prototype.completed = false;
Game.prototype.guess = function(guess){
  if(!this.settings.words[guess]){
    log(guess +" is not a word, you silly human.");
    return;
  }
  let a = this.answer;
  let ii = this.hints.length;
  this.hints[ii] = "";
  this.guesses.push(guess);
  let guess_row = "<div>"+ this.guesses.length +" ";
  
  for(let i = 0; i < this.settings.word_length; i++){
    if(guess[i] === a[i]) this.hints[ii] += "G";
    if(guess[i] !== a[i] && a.indexOf(guess[i]) >-1) this.hints[ii] += "Y";
    if(a.indexOf(guess[i]) ===-1) this.hints[ii] += "X";
    guess_row += "<span class = '"+ this.hints[ii][i] +"'>"+ guess[i] + "</span>"
  }
  
  guess_row += "</div>";
  if(guess === a){
    this.completed = true;
    log("congrats! you win!");
  }
  
  let previous_rows = document.querySelector(".previous_rows");
  previous_rows.innerHTML += guess_row;
};

let previous_game, current_game, input, start_new_game, new_game;
input = document.querySelector(".current_row input");
start_new_game = function(){
  if(current_game){
    previous_game = current_game;
    current_game = new Game(previous_game.settings);
    let previous_rows = document.querySelector(".previous_rows");
    previous_rows.innerHTML += "";
  }
  if(!current_game) current_game = new Game();
};
input.onkeyup = function(e){
  let ready_for_new_game = false;
  let do_incorrect_length_log = true;
  if(e.key === "Enter"){
    if(word_frequencies.length === 0){
      log("word data hasn't loaded yet!");
      return;
    }
    if(!current_game) ready_for_new_game = true;
    if(!ready_for_new_game) ready_for_new_game = current_game.completed;
    
    if(ready_for_new_game){
      log("new game...")
      start_new_game();
      ready_for_new_game = false;
      do_incorrect_length_log = false
    }
    if(input.value.match(/simon\s+is\s+(cool|the\s+best|amazing|yes|my\s+friend|a\s+genius)/i) !== null){
      alert("Hello, my firend");
    }

    let l = current_game.settings.word_length;
    if(input.value.length === l){
      current_game.guess(input.value);
    }
    if(do_incorrect_length_log &&input.value.length < l){
      log("word is too short (needs to be "+ l +" characters)");
    }
    if(do_incorrect_length_log &&input.value.length > l){
      log("word is too LOOOOONG (needs to be "+ l +" characters)");
    }
    if(input.value.length === l){
      input.value = "";
    }
  }
};
new_game = document.querySelector(".new");
new_game.click = start_new_game;

do_fetch();


