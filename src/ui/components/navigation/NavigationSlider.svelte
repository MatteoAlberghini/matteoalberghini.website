<!--Script -->
<script lang="ts">
  /* imports */
  import { slide } from "../../../transitions/slide"
	import GlitchLink from "../../atoms/text/glitch/GlitchLink.svelte";
	import NavigationLink from "./NavigationLink.svelte"

  /* state */
  let visible: boolean = false

  /* callbacks */
  const toggleDrawer = () => {
    visible = !visible
    document.body.style.overflowY = visible ? 'hidden' : 'unset'
  }
</script>

<!-- Template -->
<button aria-label="navigation menu" on:click={toggleDrawer}>
  <svg viewBox="0 0 27 6" fill="none" stroke="var(--main-white)" width="30px">
    <path d="M.867.711h25.634M.867 5.25h21.429" />
  </svg>
</button>
{#if visible}
<div transition:slide={{ x: '100%', duration: 170, opacity: 1 }} class="drawer">
  <nav>
    <NavigationLink index={0} text="Projects" />
    <NavigationLink index={1} text="Code snippets" />
    <NavigationLink index={2} text="Contacts" />
  </nav>
  <div class="under-nav-container">
    <GlitchLink href="mailto:matteo.alberghini.96@gmail.com" text="matteo.alberghini.96@gmail.com" />
  </div>
</div>
{/if}

<!-- Style -->
<style>
  /* Button */
  button {
    /* size */
    width: 32px;
    /* border */
    border-width: 0;
    border-radius: 0;
    /* color */
    background-color: transparent;
  }
  button:hover {
    /* cursor */
    cursor: pointer;
  }
  button:hover path {
    animation-name: glitch;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  @keyframes glitch {
    0% { transform: skew(24deg); }
    10% { transform: skew(-8deg); }
    20% { transform: skew(55deg); }
    30% { transform: skew(-60deg); }
    40% { transform: skew(3deg); }
    50% { transform: skew(-2deg); }
    60% { transform: skew(1deg); }
    70% { transform: skew(10deg); }
    80% { transform: skew(2deg); }
    90% { transform: skew(10deg); }
    100% { transform: skew(0deg); }
  }
  /* Containers */
  .drawer {
    /* size */
    width: 100%;
    height: 100%;
    min-height: 100vh;
    /* position */
    position: fixed;
    left: 0;
    top: 80px;
    /* color */
    background-color: var(--main-black);
    /* margins */
    padding-top: 64px;
    padding-bottom: 48px;
  }
  nav {
    /* size */
    width: 100%;
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    /* position */
    overflow-y: scroll;
  }
  .under-nav-container {
    /* flex */
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: flex-end;
    /* size */
    width: 100%;
    /* margins */
    margin-top: 32px;
    padding-right: 32px;
  }
</style>