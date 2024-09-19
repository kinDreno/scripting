import { useEffect, useState } from "react";
import Footer from "./Footer.tsx";
import { PiCursor} from "react-icons/pi";

document.title = `Practice Game`;

const Game: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [triggered, isTriggered] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

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
    }
  }, [triggered, time]);

  return (
    <>
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-600">
        <article className="flex max-w-full text-3xl">
          <h1 className="font-bold siz">Click Per Minute Game!</h1>
          <PiCursor className="animate-bounce" size={40}/>
        </article>
        <main className="border-l-4 border-r-4 mb-20 rounded-lg h-[20em] w-[50em] flex flex-col items-center justify-center">
          <section>
            {times.map((number, index) => (
              <button
                onClick={() => tappedTriggered(index)}
                className="mx-3 pt-4 px-10 pb-4 border-2 rounded-md border-red-400 bg-gradient-to-r from-blue-500 to-purple-500"
                key={index}
                disabled={triggered} // Disable buttons when timer is running
              >
                {number}
              </button>
            ))}
          </section>
          <button
            className="cursor-pointer"
            onClick={increment}
            disabled={!triggered} // Disable increment button when triggered is false
          >
            Click!
          </button>
          <button onClick={reset}>Stop</button>
          <p>You tapped: {count} times!</p>
          <p>Time: {time}</p>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Game;
