import { TimelineMax } from "gsap";
import WORD1 from "./word1";
import WORD2 from "./word2";

export default function Canvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var padWORD1 = padArray(WORD1, 209, 300);
    var padWORD2 = padArray(WORD2, 209, 300);

    let currentState = Array.prototype.slice.call(padWORD1);
    let toState = Array.prototype.slice.call(padWORD2);

    let from = 'stanislav';

    document.body.addEventListener('click', () => {
        let tl = new TimelineMax({
            onComplete: () => {
                if (from === 'stanislav') {
                    from = 'zhukovskiy';
                    currentState = Array.prototype.slice.call(padWORD2);
                    toState = Array.prototype.slice.call(padWORD1);
                } else if (from === 'zhukovskiy') {
                    from = 'stanislav';
                    currentState = Array.prototype.slice.call(padWORD1);
                    toState = Array.prototype.slice.call(padWORD2);
                }

                document.body.style.pointerEvents = 'initial';
            },
            onUpdate: () => {
                render(currentState)
            },
        });

        document.body.style.pointerEvents = 'none';
        tl.to(currentState, 1, toState);
        // staggerArray(
        //     currentState,
        //     toState,
        //     {
        //         duration: 0.8,
        //         stagger:0.001,
        //         round:true,
        //         ease: Back.easeInOut.config(1.7),
        //         onComplete: () => {
        //             if (from === 'stanislav') {
        //                 from = 'zhukovskiy';
        //                 currentState = Array.prototype.slice.call(padWORD2);
        //                 toState = Array.prototype.slice.call(padWORD1);
        //             } else if (from === 'zhukovskiy') {
        //                 from = 'stanislav';
        //                 currentState = Array.prototype.slice.call(padWORD1);
        //                 toState = Array.prototype.slice.call(padWORD2);
        //             }

        //             document.body.style.pointerEvents = 'initial';
        //         },
        //         onUpdate: () => {
        //             render(currentState)
        //         },
        //     }
        // );

    });

    ctx.lineWidth = 0.9;
    ctx.strokeStyle = '#FFCC00';
    ctx.fillStyle = "#FFCC00";

    function render(state) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < state.length; i += 6) {
            // the triangle
            ctx.beginPath();
            ctx.moveTo(state[i], state[i + 1]);
            ctx.lineTo(state[i + 2], state[i + 3]);
            ctx.lineTo(state[i + 4], state[i + 5]);
            ctx.closePath();

            ctx.stroke();
            ctx.fill();
        }
    }

    render(currentState);

}

Canvas();

function padArray(arr, len, fill) {
    return arr.concat(Array(len).fill(fill).slice(0, len))
}

function staggerArray(start, end, vars) {
    var tl = new TimelineMax(vars),
        proxy = {},
        duration = vars.duration || 0,
        stagger = vars.stagger || 0,
        proxyUpdate = function(original, proxy, i) {
          return function() {
            original[i] = proxy[i];
          };
        },
        v, i;
    for (i = 0; i < start.length; i++) {
      proxy[i] = start[i];
      v = {};
      v[i] = end[i];
      v.onUpdate = proxyUpdate(start, proxy, i);
      if (vars.round) {
        v.roundProps = i + "";
      }
      tl.to(proxy, duration, v, stagger * i);
    }
    return tl;
  }