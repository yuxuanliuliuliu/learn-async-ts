const aliceTumbling: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1: HTMLElement | null = document.querySelector("#alice1");
const alice2: HTMLElement | null = document.querySelector("#alice2");
const alice3: HTMLElement | null = document.querySelector("#alice3");

async function animate(): Promise<void> {
  try {
    if (alice1) {
      await alice1.animate(aliceTumbling, aliceTiming).finished;
    } else {
      console.warn("#alice1 not found");
    }

    if (alice2) {
      await alice2.animate(aliceTumbling, aliceTiming).finished;
    } else {
      console.warn("#alice2 not found");
    }

    if (alice3) {
      await alice3.animate(aliceTumbling, aliceTiming).finished;
    } else {
      console.warn("#alice3 not found");
    }
  } catch (err) {
    if (err instanceof Error) {
      console.log(`Error when animating: ${err.message}`);
    } else {
      console.log(`Error when animating: An unknown error occurred`);
    }
  }
}

animate();
