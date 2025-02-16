import { error } from "console";

const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

// if(alice10 && alice20 && alice30) {
//   // Promise chain  
//   alice10.animate(aliceTumbling1, aliceTiming1).finished  
//     .then(() => {
//         return alice20
//                 .animate(aliceTumbling1, aliceTiming1)
//                 .finished;     
//     })
//     .then(() => {
//       return alice30
//               .animate(aliceTumbling1, aliceTiming1)
//               .finished;
//     })
//     .catch((err) => alert(`Error when promising ... ${err.message}`));
// }
// else{
//   console.warn("#alice not found");
// }

async function animateAlice(element: HTMLElement | null): Promise<void> {
  if (!element) throw new Error("alice not found");
  await element.animate(aliceTumbling1, aliceTiming1).finished;
}

async function animateAll() {
  try {
    if (!alice10 || !alice20 || !alice30) {
      console.warn("One or more elements not found");
      return;
    }

    console.log("Starting Alice animations...");
    await animateAlice(alice10);
    await animateAlice(alice20);
    await animateAlice(alice30);
    console.log("All animations completed!");
  } catch (error) {
    console.error("Animation Error:", error);
  }
}

animateAll()

// alice10
//     .animate(aliceTumbling1, aliceTiming1)
//     .finished
//     .then((res) => {
//         console.log(res);
//         alice20
//             .animate(aliceTumbling1, aliceTiming1)
//             .finished
//             .then((res) => {
//                 console.log(res);
//                 alice30.animate(aliceTumbling1, aliceTiming1);
//             })
//     });
  