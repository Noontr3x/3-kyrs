function simulateColorsSimulation(numSimulations) {
    const colors = ["красный", "черный", "белый"];
    let shortestSequence = null;
  
    for (let i = 0; i < numSimulations; i++) {
      const sequence = Array.from({ length: 10 }, () => colors[Math.floor(Math.random() * 3)]);
  
      if (!shortestSequence || sequence.length < shortestSequence.length) {
        shortestSequence = sequence;
      }
    }
  
    return shortestSequence;
  }
  
  const simulationResult = simulateColorsSimulation(1000000);
  console.log(simulationResult);
  