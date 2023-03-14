<!-- Scripts -->
<script>
	import Navigation from "../ui/layouts/Navigation.svelte"
</script>

<!-- Template -->
<Navigation />
<main>
  <slot />
</main>
<footer>
  <p>footer</p>
</footer>

<!-- Style -->
<style>
  /* FONTS */
  @font-face {
    font-family: 'Dosis';
    src: url('%sveltekit.assets%/fonts/Dosis-Medium.ttf');
    src: local('Dosis'), local('Dosis Medium'), local('Dosis-Medium');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Dosis';
    src: url('%sveltekit.assets%/fonts/Dosis-SemiBold.ttf');
    src: local('Dosis-SemiBold'), local('Dosis SemiBold');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Dosis';
    src: url('%sveltekit.assets%//fonts/Dosis-Bold.ttf');
    src: local('Dosis-Bold'), local('Dosis Bold');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* CSS VARIABLES */
  :global(:root) {
    /* color variables */
    --main-black: #000000;
    --main-off-black: #1B1B1B;
    --main-white: #FFFFFF;
    --main-off-white: #F2F2F2;
    --main-primary: rgba(15, 210, 255, 1);
    --main-secondary: rgba(246, 0, 153, 1);
    --main-tertiary: rgba(255, 210, 0, 1);
    --main-gray: #808080;
    /* fonts */
    --text-heading-h1: 5.5rem;
    --text-body-large: 1.12rem;
    --text-body: 1.063rem;
  }

  /* GLOBAL CSS */
  :global(html) {
    /* font */
    font-size: 16px;
  }
  :global(body) {
    /* size */
    height: 100%;
    /* margins */
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* colors */
    background-color: var(--main-black);
    color: var(--main-white);
    /* text */
    font-size: 100%;
    text-rendering: optimizeLegibility;
    font-family: 'Dosis', Arial, sans-serif;
    /* scroll */
    scroll-behavior: smooth;
  }
  :global(*) {
    /* css reset */
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    /* font */
    font-family: 'Dosis', Arial, sans-serif;
  }
  :global(::-webkit-scrollbar) {
    /* size */
    width: 2px;
  }
  :global(::-webkit-scrollbar-track) {
    /* colors */
    background-color: transparent;
  }
  :global(::-webkit-scrollbar-thumb) {
    /* colors */
    background: var(--main-gray);
    /* borders */
    border-radius: 0px;
  }

  /* PAGE SPECIFIC */
  main {
    /* size */
    min-height: 100vh;
    /* flex */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
</style>