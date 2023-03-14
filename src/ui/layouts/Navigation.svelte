<!-- Script -->
<script>
  /* imports */
	import NavigationSlider from "../components/navigation/NavigationSlider.svelte"
</script>

<!-- Template -->
<header>
  <NavigationSlider />
</header>

<!-- Style -->
<style>
  header {
    /* size */
    width: 100%;
    height: 80px;
    /* position */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    /* color */
    background-color: transparent;
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* margins */
    padding-left: 24px;
    padding-right: 24px;
  }
</style>