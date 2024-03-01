<script>
export default {
  data() {
    return {
    }
  },
  props: {
    secTitle: String,
    href: String,
    disable: Boolean
  },
  methods: {
    click() {
      this.href && window.open(this.href, '_blank')
    }
  },
  created: () => {

  }
}
</script>

<template>
  <button class="btn btn-default ripple btn-lg" v-on:click="click">
    <div class="mainTitle">
      <slot></slot>
    </div>
    <span>{{ secTitle }}</span>
  </button>
</template>

<style>
.ripple {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 3px 10px;
  min-width: 100px;
  min-height: 40px;
  background-color: #0071C5;
  color: #ffffff;
  margin: 20px;
}

.mainTitle {
  font-size: 18px;
}

.ripple:hover {
  background-color: rgb(0, 144, 222);
}

.ripple:after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.3s, opacity 0.5s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}</style>