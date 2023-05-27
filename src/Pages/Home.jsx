import "./Home.scss";
import v1 from "../Videos/1.mp4";
import v2 from "../Videos/2.mp4";
import v3 from "../Videos/3.mp4";
import v4 from "../Videos/4.mp4";
import v5 from "../Videos/5.mp4";

import backgroundimg from "../Images/background.jpg";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home() {
  let no = 0;

  useEffect(() => {
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slider");
    const contents = document.querySelectorAll(".content");

    var slideNav = function (manual) {
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    };

    async function changeVideo() {
      no = (no + 1) % 5;
      slideNav(no);
      console.log(no);
    }

    var myTimer = setInterval(changeVideo, 4000);

    btns.forEach((btn, i) => {
      btn.addEventListener("click", async () => {
        slideNav(i);
        no = i;
        clearInterval(myTimer);
        myTimer = setInterval(changeVideo, 4000);
      });
    });

    return () => clearInterval(myTimer);
  });
  const navigate = useNavigate();

  function play() {
    navigate("LogInPage", {
      state: {
        playPiano: 1,
      },
    });
  }

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundimg})` }}
    >
      <NavBar></NavBar>
      <center>
        <section className="home">
          <video
            className="video-slider active"
            src={v1}
            autoPlay
            muted
            loop
          ></video>
          <video className="video-slider" src={v2} autoPlay muted loop></video>
          <video className="video-slider" src={v3} autoPlay muted loop></video>
          <video className="video-slider" src={v4} autoPlay muted loop></video>
          <video className="video-slider" src={v5} autoPlay muted loop></video>
          <div className="content active">
            <h1><stroke>Chamber Music Grand Piano</stroke></h1>
            <p>
              Chamber Music Grand Piano is Online piano is a wonderful tool for
              learning music. With this, you can learn to play your favorite
              songs at your own pace, without the pressure of a traditional
              piano lesson. Online piano also offers the flexibility to practice
              whenever and wherever you want, without the need for a physical
              piano. Whether you're a beginner looking to learn the basics, or
              an experienced pianist looking to expand your repertoire, Chamber
              Music Grand Piano is a great way to enhance your skills and enjoy
              the beauty of music.
            </p>
          </div>
          <div className="content">
            <h1>Enjoy Wonderful Music</h1>
            <p>
              Chamber Music Grand Piano is an excellent way to enjoy
              high-quality music that rivals that of traditional pianos.You can
              adjust everything from the tone and volume of the instrument. Good
              music quality of Chamber Music Grand Piano is characterized by a
              number of factors, including clarity, depth, and balance.When
              music quality is high, it becomes a truly enjoyable and rewarding
              listening experience that can lift your spirits and brighten your
              day.
            </p>
          </div>
          <div className="content">
            <h1>Wide Range of Notes and Sounds</h1>
            <p>
              Chamber Music Grand Piano is a compact and portable keyboard that
              is ideal for those who want to learn how to play the piano but
              have limited space or budget. With 36 keys, this type of keyboard
              is capable of producing a wide range of notes and sounds, making
              it suitable for learners of all skill levels. So you can easily
              improve your playing techniques. Whether you're a beginner or an
              experienced player, Chamber Music Grand Piano is a great option
              for anyone looking to learn piano in a convenient and affordable
              way.
            </p>
          </div>
          <div className="content">
            <h1>Enjoy the Simplicity</h1>
            <p>
              Chamber Music Grand Piano is incredibly easy to play, even for
              beginners. With intuitive digital interfaces, you can easily
              navigate the keys and produce beautiful music. This also offers a
              variety of tools to help you learn, such as visual aids. Whether
              you're a novice or an experienced musician, online piano makes it
              easy to enjoy the beauty of music and improve your playing skills
              from the comfort of your own home.
            </p>
          </div>
          <div className="content">
            <h1>The Goal</h1>
            <p>
            Chamber Music Grand Piano is an increasingly popular way for aspiring
              musicians to practice and improve their skills. With the
              convenience of being able to access a virtual keyboard from
              anywhere with an internet connection, users can learn at their own
              pace and on their own schedule. With dedication and practice, using
              Chamber Music Grand Piano can lead to significant improvement in a user's
              playing ability, potentially leading to recognition such as a
              trophy of music.
            </p>
          </div>

          <div className="slider-navigation">
            <div className="nav-btn active"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
          </div>
        </section>
        <p className="welcome">
          <strong>
            Welcome to Chamber Music!
            <br />
            Online Piano Master...
          </strong>
        </p>
        <div className="instructions">
          <br />
          <p className="instructions-head">Instructions to Play Piano Master</p>
          <p className="instructions-content">
            &#x2022; You have to create an account using SignUp button
          </p>
          <p className="instructions-content">
            &#x2022; If you have already have an account in Chamber Music, You
            can click Play Now button
          </p>
          <p className="instructions-content">
            &#x2022; If you have already logged in you can also click Play Now
            Button{" "}
          </p>
          <p className="instructions-content">
            &#x2022; The keys are mentioned in the Piano and you can click them
            by using keyboard or mouse
          </p>
          <p className="instructions-content">
            &#x2022; You can try to listen our demo song and adjust the volume
            there
          </p>
          <br />
          <button className="playnow" onClick={play}>
            Play Now
          </button>
        </div>
      </center>
      <Footer></Footer>
    </div>
  );
}

export default Home;
