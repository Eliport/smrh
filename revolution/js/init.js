$("#rev_slider_28_1")
  .show()
  .revolution({
    delay: 10000,
    sliderLayout: "fullscreen",
    responsiveLevels: [1199, 1025, 768, 560],
    visibilityLevels: [1199, 1025, 768, 560],
    disableProgressBar: "on",
    navigation: {
      keyboardNavigation: "on",
      keyboard_direction: "horizontal",
      onHoverStop: "off",
      arrows: {
        style: "uranus",
        enable: true,
        hide_onmobile: false,
        hide_onleave: false,
        tmp: "",
        left: {
          h_align: "left",
          v_align: "center",
          h_offset: 20,
          v_offset: 0,
        },
        right: {
          h_align: "right",
          v_align: "center",
          h_offset: 20,
          v_offset: 0,
        },
      },
      bullets: {
        enable: true,
        style: "hermes",
        hide_onleave: false,
        h_align: "center",
        v_align: "bottom",
        h_offset: 0,
        v_offset: 50,
        space: 11,
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false,
      },
    },
    fullScreenAutoWidth: "on",
    fullScreenAlignForce: "off",
    fullScreenOffsetContainer: "",
    fullScreenOffset: "118px",
    lazyType: "none",
    shadow: 0,
    spinner: "spinner0",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
  });
