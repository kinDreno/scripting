import React, { useEffect, useState } from "react";
import Footer from "./Footer.tsx";
import { PiCursor } from "react-icons/pi";
import Modal from "./Modal.tsx";
import Sides from "./Sides.tsx";

document.title = `Practice Game`;

const Game: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [triggered, isTriggered] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [history, setHistory] = useState<number[]>([]);

  const modal = () => {
    setIsModalOpen(false);
    setCount(0);
  };

function destruct() {
  const lists = setHistory([...history])
  return lists
}
destruct();
  function increment() {
    setCount((c) => c + 1);
  }

  function reset() {
    isTriggered(false);
    setTime(0);
    setCount(0);
  }

  const times: number[] = [60, 25, 10];

  function tappedTriggered(index: number) {
    isTriggered(true);
    setTime(times[index]);
  }

  useEffect(() => {
    if (triggered && time > 0) {
      const timer = setTimeout(() => {
        setTime((c) => c - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (time === 0 && triggered) {
      // Show the modal when time reaches 0
      setIsModalOpen(true);
      isTriggered(false); // Optional: stop the timer
    }
  }, [triggered, time]);

  return (
    <>
<div className="h-screen w-full flex flex-wrap justify-center bg-slate-600  overflow-hidden">
<Sides /> {/* Left side of the page */}
<main className="border-x-8 border-hidden rounded-lg h-screen w-[40em] flex flex-col flex-grow items-center justify-center mb-20 p-5 space-y-5">
          {/* Timer Buttons Section */}

          <article>
            <article className="flex max-w-full text-3xl">
              <h1 className="font-bold siz">Click Per Minute Game!</h1>

              <div className="animate-bounce">
                <PiCursor size={40} />
              </div>
            </article>
            <section className="flex space-x-5">
              {times.map((number, index) => (
                <button
                  onClick={() => tappedTriggered(index)}
                  className="px-8 py-4 border-2 rounded-md border-red-400 bg-gradient-to-r from-blue-500 to-purple-500"
                  key={index}
                  disabled={triggered} // Disable buttons when timer is running
                >
                  {number} sec
                </button>
              ))}
            </section>

            {/* Buttons and Counter Display */}
            <div className="flex flex-col items-center space-y-4">
              <article className="flex space-x-4">
                <button
                  className="cursor-pointer px-6 py-2 bg-blue-500 text-white rounded-md"
                  onClick={increment}
                  disabled={!triggered} // Disable increment button when triggered is false
                >
                  Click!
                </button>
                <button
                  className="px-6 py-2 bg-red-500 text-white rounded-md"
                  onClick={reset}
                >
                  Stop
                </button>
              </article>

              <article className="flex space-x-4">
                <p className="text-lg font-medium">
                  You tapped: {count} times!
                </p>
                <p className="text-lg font-medium">Time: {time} seconds</p>
              </article>
            </div>
          </article>
        </main>
        <Sides /> {/* Right side of the page */}
        <Footer />
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={modal}
        title="Game Over"
        content={
          <div>
            <p>You tapped: {count} times!</p>
            <p>Time Chosen: {times.find((t) => t === time)} seconds</p>
          </div>
        }
      />
    </>
  );
};

export default Game;
