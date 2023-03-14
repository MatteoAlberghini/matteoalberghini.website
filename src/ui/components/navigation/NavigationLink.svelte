<!-- Script -->
<script lang="ts">
	/* imports */
  import { slide } from "../../../transitions/slide"

  /* props */
  export let href: string = ''
  export let target: string = '_self'
  /* state */
  let mouseEnter: boolean = false
  /* refs */
  let linkRef: HTMLAnchorElement | null = null
  let gradientRef: HTMLDivElement | null = null

  /* callbacks */
  const onMouseEnter = () => { mouseEnter = true }
  const onMouseLeave = () => { mouseEnter = false }
  const onMouseMove = (e: MouseEvent) => {
    if (!linkRef || !gradientRef) { return }
    const decimal: number = e.clientX / linkRef.offsetWidth
    const adjustablePercentage: number = 80 * decimal
    const percentage: string = `${105 + adjustablePercentage}%`
    gradientRef.animate({ backgroundSize: percentage }, { duration: 100, fill: 'forwards' })
  }
</script>

<!-- Template -->
<a {href} {target} on:mouseenter={onMouseEnter} on:mouseleave={onMouseLeave} on:mousemove={onMouseMove} bind:this={linkRef}>
  {#if mouseEnter}
    <div bind:this={gradientRef} transition:slide={{ x: '100%', duration: 230 }} class="gradient" />
  {/if}
  <span><slot /></span>
</a>

<!-- Style -->
<style>
  a {
    /* text */
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    text-decoration: none;
    text-transform: uppercase;
    /* margins */
    padding-top: 34px;
    padding-bottom: 34px;
    padding-left: 64px;
    /* size */
    width: 100%;
    /* borders */
    border-top: 1px solid var(--main-white);
    border-bottom: 1px solid var(--main-white);
    /* color */
    color: var(--main-white);
    /* font */
    font-size: var(--text-heading-h1);
    line-height: 115%;
    font-weight: 400;
    letter-spacing: 0.17rem;
    /* position */
    position: relative;
  }
  .gradient {
    /* position */
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    /* size */
    height: 100%;
    width: 100%;
    /* background */
    opacity: 0.55;
    background: linear-gradient(to right, transparent, var(--main-secondary), var(--main-primary));
    background-size: 105%;
  }
</style>