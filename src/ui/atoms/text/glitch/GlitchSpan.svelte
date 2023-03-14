<!-- Template -->
<span><slot /></span>

<!-- Style -->
<style>
  span {
    /* position */
    display: inline-block;
    /* color */
    color: var(--main-primary);
    /* text */
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    text-transform: uppercase;
  }
</style>