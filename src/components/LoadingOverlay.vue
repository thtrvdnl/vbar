<template>
  <div class="loader">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="80px"
      height="80px"
      viewBox="0 0 50 50"
      style="enable-background:new 0 0 50 50;"
      xml:space="preserve"
    >
      <path
        fill="#000"
        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.99s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
</template>

<style lang="scss">
.loader {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
}
</style>
