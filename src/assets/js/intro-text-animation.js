const textOne = document.querySelector('.intro__anitext1');
const textTwo = document.querySelector('.intro__anitext2');
const wrap = document.querySelector('.intro__bg-anitext');
const scrollbtn = document.querySelector('.intro__btn-scroll');

const scale = (displayText, showtime = 0.25) => {
  const scaleTL = new TimelineMax();
  scaleTL.
  to(textOne, showtime, { text: displayText }, 0.5).
  to(wrap, 0.125, { scale: 1.25, delay: 0.125 }).
  to(wrap, 0.125, { scale: 1 });
  return scaleTL;
};

const swap = (el, text, delay = 0.5) => {
  const swapTL = new TimelineMax();
  swapTL.to(el, 0, { text, delay, opacity: 1, x: '0%', immediateRender: false });
  return swapTL;
};

const clear = (el, delay = 0.5) => {
  const tl = new TimelineMax();
  tl.to(el, 0, { text: '', delay, opacity: 1, x: '0%', immediateRender: false });
  return tl;
};

const type = (el, text, delay = 0.5, flashTime = 0.15) => {
  const typeTL = new TimelineMax();
  typeTL.add(TweenMax.to(el, 0, { delay, text: '' }));
  for (let l = 0; l < text.length; l++) {
    typeTL.add(TweenMax.to(el, flashTime, { text: text.slice(0, l + 1) }));
  }
  return typeTL;
};

const twoText = (text1, text2) => {
  const actionTL = new TimelineMax();
  actionTL.
  to(textOne, 0, { text: text1, delay: 0.5 }, 0).
  to(textTwo, 0, { text: text2, delay: 0.5 }, 0).
  from(textOne, 0.25, { x: '-25%', opacity: 0, immediateRender: false }, 0.5).
  from(textTwo, 0.25, { x: '-125%', opacity: 0, immediateRender: false }, 0.5);
  return actionTL;
};


const advertTL = new TimelineMax({
  onStart: () => {
    textOne.style.color = 'transparent';
  },
  onComplete: () => {
    scrollbtn.style.visibility = 'visible';
  }
});

advertTL.
add(scale('Dream big')).
add(clear(textOne)).
add(scale('Try hard !!')).
add(clear(textOne)).
add(type(textOne, 'Windows application', 0.5, 0.05)).
add(swap(textOne, '', 0.5)).
add(type(textOne, 'Front-End & Back-End', 0.5, 0.05)).
add(swap(textOne, '', 0.5)).
add(clear(textOne)).
add(twoText('Multi position', '&nbsp;developer'));
