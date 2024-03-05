import Footer from "../Components/Footer";
import NavBar2 from "../Components/NavBar2";
import "./Piano.css";
import { useState, useEffect } from "react";

function Piano() {
  let whiteKeys;
  let blackKeys;
  var arr = new Array();

  const WHITE_KEYS_LIST = new Map([
    ["a", "1"],
    ["s", "2"],
    ["d", "3"],
    ["f", "4"],
    ["g", "5"],
    ["h", "6"],
    ["j", "7"],
    ["k", "8"],
    ["l", "9"],
    [";", "10"],
    ["'", "11"],
    ["z", "12"],
    ["x", "13"],
    ["c", "14"],
    ["v", "15"],
    ["b", "16"],
    ["n", "17"],
    ["m", "18"],
    [",", "19"],
    [".", "20"],
    ["/", "21"],
  ]);

  const BLACK_KEYS_LIST = new Map([
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["6", "6"],
    ["7", "7"],
    ["8", "8"],
    ["9", "9"],
    ["0", "10"],
    ["q", "11"],
    ["w", "12"],
    ["e", "13"],
    ["r", "14"],
    ["t", "15"],
  ]);

  const WHITE_KEYS_NOTES = new Map([
    ["C3", "a"],
    ["D3", "s"],
    ["E3", "d"],
    ["F3", "f"],
    ["G3", "g"],
    ["A3", "h"],
    ["B3", "j"],
    ["C4", "k"],
    ["D4", "l"],
    ["E4", ";"],
    ["F4", "'"],
    ["G4", "z"],
    ["A4", "x"],
    ["B4", "c"],
    ["C5", "v"],
    ["D5", "b"],
    ["E5", "n"],
    ["F5", "m"],
    ["G5", ","],
    ["A5", "."],
    ["B5", "/"],
  ]);

  useEffect(() => {
    whiteKeys = document.querySelectorAll(".white-key");
    blackKeys = document.querySelectorAll(".black-key");

    blackKeys.forEach((black, index) => {
      black.addEventListener("click", () => {
        const audio = new Audio();
        console.log(index);
        audio.src = `/sounds/black-keys/${index + 1}.mp3`;
        playSound(audio);
      });
    });

    whiteKeys.forEach((white, index) => {
      white.addEventListener("click", () => {
        const audio = new Audio();
        console.log(index);
        console.log("ok");
        audio.src = `/sounds/white-keys/${index + 1}.mp3`;
        playSound(audio);
      });
    });

    window.addEventListener("keyup", (e) => {
      var namewhite = WHITE_KEYS_LIST.get(e.key);

      var nameblack = BLACK_KEYS_LIST.get(e.key);

      var elementwhite = document.getElementById(namewhite);

      nameblack = parseInt(nameblack) + 21;

      var elementblack = document.getElementById(nameblack);

      if (elementwhite) {
        elementwhite.classList.remove("white-active");
        arr = arr.filter(function (item) {
          return item !== e.key;
        });
      }

      if (elementblack) {
        elementblack.classList.remove("black-active");
        arr = arr.filter(function (item) {
          return item !== e.key;
        });
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      if (arr.includes(e.key)) return;

      var namewhite = WHITE_KEYS_LIST.get(e.key);

      var nameblack = BLACK_KEYS_LIST.get(e.key);

      var elementwhite = document.getElementById(namewhite);

      nameblack = parseInt(nameblack) + 21;

      var elementblack = document.getElementById(nameblack);

      if (elementwhite) {
        elementwhite.classList.add("white-active");
        const audio = new Audio();
        audio.pause();
        audio.currentTime = 0;
        audio.src = `/sounds/white-keys/${namewhite}.mp3`;
        playSound(audio);
        arr.push(e.key);
      }

      if (elementblack) {
        elementblack.classList.add("black-active");
        nameblack = nameblack - 21;
        const audio = new Audio();
        audio.pause();
        audio.currentTime = 0;
        console.log(nameblack);
        audio.src = `/sounds/black-keys/${nameblack}.mp3`;
        playSound(audio);
        arr.push(e.key);
      }
    });
  });

  function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.volume = document.getElementById("slider").value;
    sound.play();
  }
  function autoplay() {
    let keys = [
      "G4",
      "G4",
      "A4",
      "",
      "G4",
      "",
      "C4",
      "",
      "B4",
      "",
      "",
      "G4",
      "G4",
      "A4",
      "",
      "G4",
      "",
      "D5",
      "",
      "C5",
      "",
      "",
      "G4",
      "G4",
      "G5",
      "",
      "E5",
      "",
      "C5",
      "",
      "B4",
      "",
      "A4",
      "",
      "F5",
      "F5",
      "E5",
      "",
      "C5",
      "",
      "D5",
      "",
      "C5",
      "",
    ];

    keys.forEach((currentElement, i) => {
      setTimeout(() => {
        var keyboardkey = WHITE_KEYS_NOTES.get(currentElement);
        console.log(keyboardkey);

        let keyEvent = new KeyboardEvent("keydown", { key: keyboardkey });
        window.dispatchEvent(keyEvent);
        console.log(keyEvent);

        function delay(time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }

        delay(300).then(() => {
          let keyEvent2 = new KeyboardEvent("keyup", { key: keyboardkey });
          window.dispatchEvent(keyEvent2);
          console.log(keyEvent2);
        });
      }, i * 350);
    });
  }

  return (
    <div>
      <NavBar2></NavBar2>

      <div className="headerpiano">
        <span style={{ color: "white", fontSize: "1.5rem" }}>Volume </span>

        <input
          type="range"
          min={0}
          max={1}
          step="any"
          id="slider"
          style={{ accentColor: "white" }}
        ></input>

        <button className="demo" onClick={autoplay}>
          Play Demo Song
        </button>
      </div>

      <div className="piano-container">
        <div className="white-key key" id="1">
          A
        </div>
        <div className="black-key key black-1" id="22">
          1
        </div>
        <div className="white-key key" id="2">
          S
        </div>
        <div className="black-key key black-2" id="23">
          2
        </div>
        <div className="white-key key" id="3">
          D
        </div>
        <div className="white-key key" id="4">
          F
        </div>
        <div className="black-key key black-3" id="24">
          3
        </div>
        <div className="white-key key" id="5">
          G
        </div>
        <div className="black-key key black-4" id="25">
          4
        </div>
        <div className="white-key key" id="6">
          H
        </div>
        <div className="black-key key black-5" id="26">
          5
        </div>
        <div className="white-key key" id="7">
          J
        </div>
        <div className="white-key key" id="8">
          K
        </div>
        <div className="black-key key black-6" id="27">
          6
        </div>
        <div className="white-key key" id="9">
          L
        </div>
        <div className="black-key key black-7" id="28">
          7
        </div>
        <div className="white-key key" id="10">
          ;
        </div>
        <div className="white-key key" id="11">
          '
        </div>
        <div className="black-key key black-8" id="29">
          8
        </div>
        <div className="white-key key" id="12">
          Z
        </div>
        <div className="black-key key black-9" id="30">
          9
        </div>
        <div className="white-key key" id="13">
          X
        </div>
        <div className="black-key key black-10" id="31">
          0
        </div>
        <div className="white-key key" id="14">
          C
        </div>
        <div className="white-key key" id="15">
          V
        </div>
        <div className="black-key key black-11" id="32">
          Q
        </div>
        <div className="white-key key" id="16">
          B
        </div>
        <div className="black-key key black-12" id="33">
          W
        </div>
        <div className="white-key key" id="17">
          N
        </div>
        <div className="white-key key" id="18">
          M
        </div>
        <div className="black-key key black-13" id="34">
          E
        </div>
        <div className="white-key key" id="19">
          ,
        </div>
        <div className="black-key key black-14" id="35">
          R
        </div>
        <div className="white-key key" id="20">
          .
        </div>
        <div className="black-key key black-15" id="36">
          T
        </div>
        <div className="white-key key" id="21">
          /
        </div>
      </div>
      <center>
        <div className="instructionstoplay">
          <br />

          <p className="instructionstoplay-head">
            Instructions to Play Piano Master
          </p>
          <p className="instructionstoplay-content">
            &#x2022; <b>Please make sure to turn off caps lock</b>
          </p>
          <p className="instructionstoplay-content">
            &#x2022; The keys are mentioned in the Piano and you can click them
            by using keyboard or mouse
          </p>

          <p className="instructionstoplay-content">
            &#x2022; You can try to listen our demo song by clicking Play Demo
            Song button
          </p>
          <p className="instructionstoplay-content">
            &#x2022; You can adjust the volume by using volume slider
          </p>
        </div>
      </center>
      <Footer></Footer>
    </div>
  );
}

export default Piano;
