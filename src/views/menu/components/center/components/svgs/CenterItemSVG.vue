<template>
  <svg
    v-if="type === 'board'"
    width="73"
    height="88"
    viewBox="0 0 73 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#2E3A59"
  >
    <g filter="url(#filter0_d_1_239)">
      <rect x="5.5" y="5" width="54" height="70" rx="3" stroke="inherit" stroke-width="2" />
      <path
        d="M13.5 5H51.5V10C51.5 11.6569 50.1569 13 48.5 13H16.5C14.8431 13 13.5 11.6569 13.5 10V5Z"
        stroke="inherit"
        stroke-width="2"
      />
      <g filter="url(#filter1_d_1_239)">
        <path
          d="M13.5 61C13.5 59.3431 14.8431 58 16.5 58H48.5C50.1569 58 51.5 59.3431 51.5 61V63C51.5 64.6569 50.1569 66 48.5 66H16.5C14.8431 66 13.5 64.6569 13.5 63V61Z"
          stroke="#00C368"
          stroke-width="2"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1_239"
        x="0.5"
        y="0"
        width="72"
        height="88"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_239" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_239" result="shape" />
      </filter>
      <filter
        id="filter1_d_1_239"
        x="10.5"
        y="55"
        width="48"
        height="18"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_239" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_239" result="shape" />
      </filter>
    </defs>
  </svg>
  <svg
    v-else-if="$props.type === 'box'"
    width="81"
    height="94"
    viewBox="0 0 81 94"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#2E3A59"
  >
    <g filter="url(#filter0_d_1_257)">
      <circle
        cx="31.69"
        cy="73.4106"
        r="7"
        transform="rotate(-15 31.69 73.4106)"
        stroke="inherit"
        stroke-width="2"
      />
      <rect
        x="30.9965"
        y="32.1854"
        width="30"
        height="30"
        transform="rotate(-15 30.9965 32.1854)"
        stroke="inherit"
        stroke-width="2"
      />
      <g filter="url(#filter1_d_1_257)">
        <rect
          x="43.1053"
          y="31.0114"
          width="6"
          height="8"
          transform="rotate(-15 43.1053 31.0114)"
          stroke="#00C368"
          stroke-width="2"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1_257"
        x="19.688"
        y="19.196"
        width="61.2756"
        height="74.2165"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_257" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_257" result="shape" />
      </filter>
      <filter
        id="filter1_d_1_257"
        x="39.8805"
        y="26.2338"
        width="18.3156"
        height="19.7298"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_257" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_257" result="shape" />
      </filter>
    </defs>
  </svg>
  <svg
    v-else-if="$props.type === 'headphones'"
    width="80"
    height="88"
    viewBox="0 0 80 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#2E3A59"
  >
    <g filter="url(#filter0_d_1_248)">
      <path
        d="M64 43.5V29C64 15.7452 53.2548 5 40 5H32C18.7452 5 8 15.7452 8 29V43.5"
        stroke="inherit"
        stroke-width="2"
      />
      <path
        d="M13 35C13 22.2975 23.2975 12 36 12C48.7025 12 59 22.2975 59 35V43C59 55.7025 48.7025 66 36 66C23.2975 66 13 55.7025 13 43V35Z"
        stroke="inherit"
        stroke-width="2"
      />
      <path
        d="M33.5 74.5L40 74.5C53.2548 74.5 64 63.7548 64 50.5L64 40"
        stroke="inherit"
        stroke-width="2"
      />
      <rect x="5" y="36" width="6" height="14" rx="3" stroke="inherit" stroke-width="2" />
      <rect x="61" y="36" width="6" height="14" rx="3" stroke="inherit" stroke-width="2" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_248"
        x="0"
        y="0"
        width="80"
        height="87.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_248" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_248" result="shape" />
      </filter>
    </defs>
  </svg>
  <svg
    v-else-if="type === 'pult'"
    width="109"
    height="99"
    viewBox="0 0 109 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#2E3A59"
  >
    <g filter="url(#filter0_d_1_284)">
      <path
        d="M15.1607 61.5422C9.30285 55.6844 9.30284 46.1869 15.1607 40.329L40.7138 14.7759C46.5717 8.91804 56.0692 8.91804 61.927 14.7759L66.3751 19.2239C72.7391 25.588 72.1152 36.1227 65.2298 42.0046C61.3795 45.2936 57.381 48.849 54.1861 52.0091C50.446 55.7086 46.2117 60.4447 42.3971 64.8965C36.5133 71.7631 25.9905 72.372 19.6345 66.016L15.1607 61.5422Z"
        stroke="inherit"
        stroke-width="2"
      />
      <path
        d="M13.1361 59.2873C7.76622 53.9173 7.26444 45.4045 12.1268 39.6211C16.509 34.4089 21.7879 28.3753 26.3021 23.9101C30.2798 19.9757 35.5538 15.3896 40.2347 11.4712C46.0198 6.62843 54.5204 7.13888 59.8823 12.5008L60.2826 12.9011C66.6467 19.2651 66.0228 29.7998 59.1373 35.6817C55.287 38.9708 51.2885 42.5261 48.0937 45.6863C44.3535 49.3857 40.1192 54.1218 36.3046 58.5736C30.4209 65.4402 19.898 66.0491 13.542 59.6931L13.1361 59.2873Z"
        stroke="inherit"
        stroke-width="2"
      />
      <rect
        x="34.1522"
        y="26.7675"
        width="15.6653"
        height="15.6653"
        rx="7.83265"
        transform="rotate(-45 34.1522 26.7675)"
        stroke="inherit"
        stroke-width="2"
      />
      <rect x="69.5" y="63.9998" width="26" height="22" rx="1" stroke="inherit" stroke-width="2" />
      <path
        d="M71.5 40.9994C78.5 42.9994 82.5 45.9998 82.5002 56.999"
        stroke="inherit"
        stroke-width="2"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_284"
        x="3.77332"
        y="3.1373"
        width="104.727"
        height="95.8625"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_284" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_284" result="shape" />
      </filter>
    </defs>
  </svg>
</template>
<script lang="js">
export default {
  name: 'CenterItemSVG',
  props: {
    type: {
      type: String,
      validator: (value) => {
        return ['board', 'headphones', 'box', 'pult'].includes(value)
      },
    }
  }
}
</script>
<style lang="scss" scoped></style>
