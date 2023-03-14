<!-- Script -->
<script lang="ts">
  /* props */
  export let href: string = ''
  export let target: string = '_self'
</script>

<!-- Template -->
<a {href} {target}>
  <span class="main-span">
    <span class="before-span"><slot /></span>
    <slot />
    <span class="after-span"><slot /></span>
  </span>
</a>

<!-- Style -->
<style>
  a {
    /* text */
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    text-decoration: none;
  }
  /* Spans */
  .main-span {
    /* position */
    position: relative;
    z-index: 1;
  }
  .after-span, .before-span {
    /* position */
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: -2;
  }
  .after-span {
    /* color */
    color: var(--main-primary);
  }
  .before-span {
    /* color */
    color: var(--main-tertiary);
  }
  /* Link hover */
  a:hover .after-span {
    animation: glitch 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
  a:hover .before-span {
    animation: glitch 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
  /* Keyframes */
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-3px, 3px); }
    40% { transform: translate(-3px, -3px); }
    60% { transform: translate(3px, 3px); }
    80% { transform: translate(3px, -3px); }
    100% { transform: translate(0); }
  }
</style>