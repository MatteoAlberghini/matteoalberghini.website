<!-- Script -->
<script lang="ts">
  /* props */
  export let href: string = ''
  export let target: string = '_self'
  export let text: string = ''
  export let index: number = 0
</script>

<!-- Template -->
<a {href} {target} style:border-top-width={index === 0 ? '1px' : '0px'}>
  <span class="before-span" style:border-top-width={index === 0 ? '1px' : '0px'}>{text}</span>
  <span class="main-span">{text}</span>
  <span class="after-span" style:border-top-width={index === 0 ? '1px' : '0px'}>{text}</span>
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
    border-color: var(--main-white);
    border-style: solid;
    border-bottom-width: 1px;
    /* color */
    color: var(--main-white);
    /* font */
    font-size: var(--text-heading-h1);
    line-height: 115%;
    font-weight: 400;
    letter-spacing: 0.17rem;
    /* position */
    position: relative;
    overflow: hidden;
  }
  .main-span {
    /* text */
    text-transform: uppercase;
  }
  .after-span, .before-span {
    /* text */
    text-transform: uppercase;
    /* size */
    height: 100%;
    width: 100%;
    /* position */
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -2;
    /* margins */
    padding-left: 64px;
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .after-span {
    /* border */
    border-bottom-width: 1px;
    border-color: var(--main-primary);
    border-style: solid;
    /* color */
    color: var(--main-primary);
  }
  .before-span {
    /* border */
    border-bottom-width: 1px;
    border-color: var(--main-secondary);
    border-style: solid;
    /* color */
    color: var(--main-secondary);
  }
  /* Button hover */
  a:hover .after-span {
    animation: glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
  a:hover .before-span {
    animation: glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
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