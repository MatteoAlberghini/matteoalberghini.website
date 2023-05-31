<!-- Script -->
<script lang="ts">
  /* props */
  export let href: string = ''
  export let target: string = '_self'
  export let text: string = ''
  /* refs */
  let linkRef: HTMLAnchorElement | null = null
  /* constants */
  const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  /* callbacks
  const mouseOver = () => {
    /* constants
    let iterations: number = 0
    const iterationModifier: number = text.length < 10 ? 1 / 3 : text.length < 15 ? 1 / 2 : 1
    /* run every 30 ms
    const interval: number = setInterval(() => {
      if (!linkRef) { return }
      const splitText: string[] = text.split('')
      linkRef.innerText = splitText.map((letter, index) => {
        if (index < iterations) { return text[index] }
        return letters[Math.floor(Math.random() * 26)]
      }).join('')
      if (iterations >= text.length) { clearInterval(interval) }
      iterations += iterationModifier
    }, 30)
  }
  */
</script>

<!-- Template -->
<a {href} {target} bind:this={linkRef} class="glitch-link">
  {text}
</a>

<!-- Style -->
<style>
  a {
    /* text */  
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    text-decoration: none;
    text-transform: uppercase;
    /* color */
    color: var(--main-primary);
    /* font */
    font-size: var(--text-body);
    font-weight: 200;
  }
  a:hover {
    color: var(--main-additional);
  }
</style>