<!-- Script -->
<script lang="ts">
  /* imports */
	import type { Color } from "../../types/common/colors.types"

  /* props */
  export let backgroundColor: Color = 'var(--main-black)'
</script>

<!-- Template -->
<section style:background-color={backgroundColor}>
  <slot />
</section>

<!-- Style -->
<style>
  /* Section */
  section {
    /* grid */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    column-gap: 16px;
    row-gap: 0px;
    /* size */
    width: 100%;
    max-width: 2056px;
    /* margins */
    padding-left: 16px;
    padding-right: 16px;
  }
  @media only screen and (min-width: 600px) {
    section {
      /* grid */
      grid-template-columns: repeat(6, 1fr);
      /* margins */
      padding-left: 56px;
      padding-right: 56px;
    }
  }
  @media only screen and (min-width: 1280px) {
    section {
      /* grid */
      grid-template-columns: repeat(12, 1fr);
      column-gap: 24px;
      /* margins */
      padding-left: 96px;
      padding-right: 96px;
    }
  }
  @media only screen and (min-width: 2056px) {
    section {
      /* grid */
      column-gap: 32px;
      /* margins */
      padding-left: 184px;
      padding-right: 184px;
    }
  }
</style>