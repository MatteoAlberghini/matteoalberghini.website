<!-- Script -->
<script lang="ts">
	import GlitchLink from "../atoms/text/glitch/GlitchLink.svelte";
	import NavigationLink from "../components/navigation/NavigationLink.svelte";

</script>

<!-- Template -->
<footer>
  <nav>
    <NavigationLink index={0} text="Projects && Code Snippets" />
    <NavigationLink index={1} text="Notebook" />
    <NavigationLink index={2} text="Contacts" />
  </nav>
  <div class="links">
    *
    <GlitchLink href="mailto:alberghini.matteo.96@gmail.com" text="alberghini.matteo.96@gmail.com" />
    *
    <GlitchLink href="https://google.com" text="Github" />
    *
    <GlitchLink href="https://linkedin.com" text="LinkedIn" />
    *
    <GlitchLink href="/wallet" text="Wallet" />
  </div>
</footer>

<!-- Stye -->
<style>
  footer {
    /* size */
    width: 100%;
    margin-top: 116px;
  }
  nav {
    /* size */
    width: 100%;
    /* flex */
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .links {
    /* size */
    width: 100%;
    margin-top: 32px;
    padding-right: 32px;
    padding-bottom: 64px;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-direction: row;
  }
  .links :global(.glitch-link) {
    /* position */
    margin-left: 4px;
    margin-right: 4px;
  }
</style>