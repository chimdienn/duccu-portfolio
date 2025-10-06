import { useState } from "react";

const Contact = () => {
  const [gameState, setGameState] = useState("hidden"); // hidden, instructions, playing, results
  const [round, setRound] = useState(1);
  const [pumps, setPumps] = useState(0);
  const [roundMoney, setRoundMoney] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [popThreshold, setPopThreshold] = useState(0);
  const [popped, setPopped] = useState(false);
  const [bankedRounds, setBankedRounds] = useState([]);

  const MAX_ROUNDS = 15;
  const MONEY_PER_PUMP = 0.05;

  const startGame = () => {
    setGameState("playing");
    resetRound();
  };

  const resetRound = () => {
    setPumps(0);
    setRoundMoney(0);
    setPopped(false);
    // Random pop threshold between 5 and 20 pumps
    setPopThreshold(Math.floor(Math.random() * 16) + 5);
  };

  const pumpBalloon = () => {
    if (popped) return;

    const newPumps = pumps + 1;
    const newMoney = roundMoney + MONEY_PER_PUMP;

    if (newPumps >= popThreshold) {
      // Balloon pops!
      setPopped(true);
      setTimeout(() => {
        nextRound(0);
      }, 1500);
    } else {
      setPumps(newPumps);
      setRoundMoney(newMoney);
    }
  };

  const bankMoney = () => {
    if (popped) return;
    const newTotal = totalMoney + roundMoney;
    setTotalMoney(newTotal);
    setBankedRounds([...bankedRounds, roundMoney]);
    nextRound(roundMoney);
  };

  const nextRound = () => {
    if (round >= MAX_ROUNDS) {
      setGameState("results");
    } else {
      setRound(round + 1);
      resetRound();
    }
  };

  const restartGame = () => {
    setRound(1);
    setTotalMoney(0);
    setBankedRounds([]);
    setGameState("playing");
    resetRound();
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:trongducnbk43@gmail.com";
  };

  const getBalloonSize = () => {
    const baseSize = 100;
    const growthRate = 15;
    return baseSize + pumps * growthRate;
  };

  const calculateStats = () => {
    const poppedCount = MAX_ROUNDS - bankedRounds.length;
    const avgRoundMoney =
      bankedRounds.length > 0
        ? (
            bankedRounds.reduce((a, b) => a + b, 0) / bankedRounds.length
          ).toFixed(2)
        : 0;
    const maxRoundMoney =
      bankedRounds.length > 0 ? Math.max(...bankedRounds).toFixed(2) : 0;
    return { poppedCount, avgRoundMoney, maxRoundMoney };
  };

  return (
    <div className="pt-32 fade-in pb-16">
      <div className="container mx-auto px-6">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold gradient-text mb-12 pb-4 text-center">
            Wanna get in touch?
          </h1>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-12 border border-gray-800 max-w-lg mb-8 flex flex-col items-center justify-center">
            <i className="fas fa-envelope text-6xl gradient-text mb-6"></i>
            <p className="text-2xl mb-8 text-center">trongducnbk43@gmail.com</p>

            <button
              onClick={handleEmailClick}
              className="gradient-bg text-white px-12 py-4 rounded-full hover:opacity-90 transition-opacity font-medium text-lg w-full"
            >
              Say hi!
            </button>
          </div>

          {/* Game Section */}
          {gameState === "hidden" && (
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-4">
                Besides that, wanna play a fun game? 🎈
              </p>
              <button
                onClick={() => setGameState("instructions")}
                className="border border-purple-600 text-purple-400 px-8 py-3 rounded-full hover:bg-purple-600/20 transition-all font-medium"
              >
                Let's Play!
              </button>
            </div>
          )}

          {gameState === "instructions" && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 max-w-2xl text-center">
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                🎈 Balloon Pump Challenge
              </h2>
              <div className="text-left text-gray-300 space-y-3 mb-8">
                <p>• You'll get 15 balloons to pump</p>
                <p>• Each pump earns you $0.05</p>
                <p>• Bank your money anytime to keep it safe</p>
                <p>• But beware: pump too much and the balloon POPS! 💥</p>
                <p>• If it pops, you lose that round's money</p>
                <p className="text-purple-400 font-semibold pt-2">
                  How greedy will you be? 😈
                </p>
              </div>
              <button
                onClick={startGame}
                className="gradient-bg text-white px-12 py-4 rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
              >
                Start Game
              </button>
            </div>
          )}

          {gameState === "playing" && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 max-w-2xl w-full">
              <div className="flex justify-between mb-6 text-sm">
                <span className="text-gray-400">
                  Round:{" "}
                  <span className="text-white font-bold">
                    {round}/{MAX_ROUNDS}
                  </span>
                </span>
                <span className="text-gray-400">
                  Total Banked:{" "}
                  <span className="text-green-400 font-bold">
                    ${totalMoney.toFixed(2)}
                  </span>
                </span>
              </div>

              <div className="flex flex-col items-center justify-center py-12">
                {!popped ? (
                  <>
                    {/* Balloon */}
                    <div
                      className="relative transition-all duration-300 ease-out"
                      style={{
                        width: `${getBalloonSize()}px`,
                        height: `${getBalloonSize() * 1.2}px`,
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 via-pink-500 to-purple-600 shadow-2xl"
                        style={{
                          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                          transform: `scale(${1 + pumps * 0.02})`,
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        {/* Balloon shine effect */}
                        <div
                          className="absolute top-4 left-4 w-8 h-8 bg-white/40 rounded-full blur-sm"
                          style={{
                            transform: `scale(${1 + pumps * 0.05})`,
                          }}
                        ></div>
                      </div>
                      {/* Balloon string */}
                      <div
                        className="absolute bottom-0 left-1/2 w-0.5 bg-gray-400"
                        style={{
                          height: "60px",
                          transform: "translateX(-50%)",
                        }}
                      ></div>
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-3xl font-bold text-green-400 mb-2">
                        ${roundMoney.toFixed(2)}
                      </p>
                      <p className="text-gray-400 text-sm mb-6">
                        {pumps} pumps
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-8xl mb-4 animate-bounce">💥</div>
                    <p className="text-3xl font-bold text-red-400 mb-2">
                      POPPED!
                    </p>
                    <p className="text-gray-400">
                      Lost ${roundMoney.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>

              {!popped && (
                <div className="flex gap-4">
                  <button
                    onClick={pumpBalloon}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold text-lg"
                  >
                    💨 Pump (+$0.05)
                  </button>
                  <button
                    onClick={bankMoney}
                    disabled={roundMoney === 0}
                    className={`flex-1 border-2 border-green-600 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                      roundMoney === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-green-600/20"
                    }`}
                  >
                    💰 Bank It!
                  </button>
                </div>
              )}
            </div>
          )}

          {gameState === "results" && (
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 border border-gray-800 max-w-2xl text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Game Complete!
              </h2>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <p className="text-5xl font-bold text-green-400 mb-2">
                  ${totalMoney.toFixed(2)}
                </p>
                <p className="text-gray-400">Total Banked</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-400">
                    {bankedRounds.length}
                  </p>
                  <p className="text-gray-400 text-sm">Balloons Banked</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-red-400">
                    {calculateStats().poppedCount}
                  </p>
                  <p className="text-gray-400 text-sm">Balloons Popped</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-2xl font-bold text-purple-400">
                    ${calculateStats().avgRoundMoney}
                  </p>
                  <p className="text-gray-400 text-sm">Avg Per Round</p>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 mb-6">
                <p className="text-blue-300 text-sm">
                  <strong>Your best round:</strong> $
                  {calculateStats().maxRoundMoney}
                  <br />
                  <span className="text-gray-400 mt-2 block">
                    {totalMoney > 5
                      ? "Bold player! You took some big risks! 🎲"
                      : "Cautious strategy! Playing it safe! 🛡️"}
                  </span>
                </p>
              </div>

              <button
                onClick={restartGame}
                className="gradient-bg text-white px-12 py-4 rounded-full hover:opacity-90 transition-opacity font-medium text-lg"
              >
                Play Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
