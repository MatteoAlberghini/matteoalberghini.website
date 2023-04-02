<!-- Script -->
<script lang="ts">
  /* constants */
  export let marginTop: string = '0px'
</script>

<!-- Template -->
<p style:--margin-top={marginTop}>
  <slot />
</p>

<!-- Style -->
<style>
  p {
    /* position */
    display: inline-block;
    /* color */
    color: var(--main-off-white);
    /* text */
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    /* font */
    font-size: var(--text-body-large);
    font-weight: 300;
    line-height: 145%;
    letter-spacing: 0.127rem;
    /* margins */
    margin-top: var(--margin-top);
  }
</style>