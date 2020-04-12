tl = new TimelineMax({});

tl.staggerFrom('.hide__title', 1.5, {
  y: '100%',
  ease: Power4.easeOut
}, .15)

tl.staggerFrom('.hide__text', 1.5, {
  y: '15%',
  opacity: '0',
  ease: Power4.easeOut
}, .15)
