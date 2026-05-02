"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure Buntyy??",
      "What if I asked really nicely?",
      "Please maaa",
      "DBC icecream konistaa",
      "What about DIOR LIPSTICK?",
      "PLEASE BUNTYYYYY",
      "Sare maa Thata ni emmanna anuko",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to vamsi's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://i.pinimg.com/originals/06/d6/3f/06d63fd2ab4b47135971b0b11f6bccf8.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you to the moon and back buntyy!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://i.pinimg.com/originals/43/dd/6d/43dd6da864b13b5e68da57fa8e151eb8.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
