import React, { useState } from "react";
import "./LoginScreen.css";
type Props = {};

const LoginScreen = (props: Props) => {
  const [signIn, setSignIn] = useState(false);
  return (
    <nav>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
          className="netflix__logo"
        ></img>
        <button className="button__color" onClick={() => setSignIn(true)}>
          Sigin
        </button>
        <div>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form>
            <input type="email" placeholder="Email Address"/>
            <button onClick={() => setSignIn(true)}>Get Started</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default LoginScreen;
