<!-- Template -->
<h2><slot /></h2>

<!-- Styles -->
<style>
  h2 {
    /* colors */
    color: var(--main-white);
    /* text */
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    text-transform: uppercase;
    /* font */
    font-size: var(--text-heading-h1);
    font-weight: 400;
    line-height: 115%;
    letter-spacing: 0.17rem;
    /* animation */
    animation-duration: 2.7s;
    animation-name: glitch, text-shadow;
    animation-iteration-count: infinite;
  }
  @keyframes glitch {
    0% {
      transform: skewX(0deg);
    }
    53.74% {
      transform: skewX(0deg);
    }
    53.75% {
      transform: skewX(24deg);
    }
    54.64% {
      transform: skewX(-8deg);
    }
    55.53% {
      transform: skewX(55deg);
    }
    56.42% {
      transform: skewX(-60deg);
    }
    57.31% {
      transform: skewX(3deg);
    }
    58.2% {
      transform: skewX(-2deg);
    }
    59.09% {
      transform: skewX(1deg);
    }
    59.98% {
      transform: skewX(10deg);
    }
    60% {
      transform: skewX(0deg);
    }
    100% {
      transform: skewX(0deg);
    } 
  }
  @keyframes text-shadow {  
    0% {
      text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    }
    53.74% {
      text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    }
    53.75% {
      text-shadow: 45px 23px var(--main-secondary), -48px -24px var(--main-primary), -12px -14px var(--main-tertiary);
    }
    75% {
      text-shadow: 45px 23px var(--main-secondary), -48px -24px var(--main-primary), -12px -14px var(--main-tertiary);
    }
    90% {
      text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    }
    100% {
      text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    }
  }
</style>