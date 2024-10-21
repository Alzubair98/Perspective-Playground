const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
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
    copy() {
      const copyText = `Perspective: ${this.perspective}, RotateX: ${this.rotateX}deg, RotateY: ${this.rotateY}deg, RotateZ: ${this.rotateZ}deg`;

      // copy the text to clipboard
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          alert("Value copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    },
  },
  computed: {
    changer() {
      return [
        {
          transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
        },
      ];
    },
  },
}).mount("#app");
