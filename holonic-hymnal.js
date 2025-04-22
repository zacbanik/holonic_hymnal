// holonic-hymnal.js - A mystical vibration harmonizer
const readline = require('readline');
const { stdout: output, stdin: input } = require('process');

/**
 * Vibration class - Represents a fundamental energetic pattern
 * Frequencies and amplitudes combine to create harmonic resonance
 */
class Vibration {
  constructor(frequency, amplitude) {
    this.frequency = parseFloat(frequency);
    this.amplitude = parseFloat(amplitude);
  }

  static silence() {
    return new Vibration(0, 0);
  }

  blend(other) {
    return new Vibration(
      this.frequency * other.frequency,
      this.amplitude + other.amplitude
    );
  }

  toString() {
    return `~ ${this.frequency.toFixed(2)}Hz | ${this.amplitude.toFixed(2)}A ~`;
  }
}

/**
 * HolonicHymnal - The sacred container for vibration patterns
 * Creates a harmonized field where vibrations can interact and transform
 */
const HolonicHymnal = {
  void: {
    attuneTo: function(vibration) {
      this.intention = vibration;
      this.openTo(vibration);
    },
    openTo: function(inflow) {
      this.inflow = inflow;
      this.beMoved();
    },
    beMoved: function() {
      // The void itself can be moved by intention
      console.log('The void attunes to new vibrations...');
    }
  },
  
  nodes: [],
  
  addNode: function(vibration) {
    const newNode = this.node(vibration);
    this.nodes.push(newNode);
    return newNode;
  },
  
  node: function(vibration) {
    const newNode = {
      vibration: vibration,
      beMoved: function() {
        const inspiration = HolonicHymnal.void.inflow;
        const newVibration = inspiration(this.vibration);
        this.receiveInfluence(newVibration);
        this.offerResonance();
      },
      receiveInfluence: function(newVibration) {
        if (newVibration instanceof Vibration) {
          this.vibration = newVibration;
        }
      },
      offerResonance: function() {
        HolonicHymnal.hymnStream.feelResonance(this.vibration);
      }
    };
    
    newNode.beMoved();
    return newNode;
  },
  
  hymnStream: {
    voices: [],
    feelResonance: function(vibration) {
      this.voices.push(vibration);
    },
    shareSong: function() {
      const hymn = this.voices.reduce(
        (song, voice) => song.blend(voice),
        Vibration.silence()
      );
      
      console.log('\n🌀 The Holonic Hymnal has harmonized your vibrations:');
      console.log('✨', hymn.toString(), '✨');
      console.log('\nThe golden ratio has transformed each vibration,');
      console.log('creating something beyond the sum of its parts.\n');
    }
  }
};

/**
 * Main function to run the Holonic Hymnal
 */
function runHolonicHymnal() {
  const rl = readline.createInterface({ input, output });
  
  // Initialize hymnal with sacred geometry (Golden Ratio)
  HolonicHymnal.void.attuneTo(v => {
    const newVibration = new Vibration(
      v.frequency * 1.618,
      v.amplitude * 1.618
    );
    console.log(`Vibration transformed: ${v.toString()} → ${newVibration.toString()}`);
    return newVibration;
  });
  
  console.log('✨ Welcome to the Holonic Hymnal Generator ✨');
  console.log('Please enter the frequency and amplitude for each node of the hymn.');
  console.log('The void is attuned to the Golden Ratio (1.618)...\n');
  
  function getVibrationFromUser() {
    rl.question('Enter a frequency (0 to complete hymn): ', frequency => {
      if (frequency == 0) {
        rl.close();
        HolonicHymnal.hymnStream.shareSong();
        return;
      }
      
      rl.question('Enter an amplitude: ', amplitude => {
        const vibration = new Vibration(frequency, amplitude);
        console.log(`Adding vibration: ${vibration.toString()}`);
        HolonicHymnal.addNode(vibration);
        getVibrationFromUser();
      });
    });
  }
  
  getVibrationFromUser();
}

// Run when this file is executed directly
if (require.main === module) {
  runHolonicHymnal();
}

// Export for use as a module
module.exports = {
  HolonicHymnal,
  Vibration,
  runHolonicHymnal
};
