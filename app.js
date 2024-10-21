const vm = Vue.createApp({
  data() {
    return {
      perspective: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  methods: {
    reset() {
      (this.perspective = 0),
        (this.rotateX = 0),
        (this.rotateY = 0),
        (this.rotateZ = 0);
    },
  },
}).mount("#app");
