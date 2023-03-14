<!-- Script -->
<script>
  /* imports */
  import GlitchButton from "../../atoms/button/glitch/GlitchButton.svelte"
  import GlitchHeading from "../../atoms/text/glitch/GlitchHeading.svelte"
	import GlitchSpan from "../../atoms/text/glitch/GlitchSpan.svelte"
	import GlitchText from "../../atoms/text/glitch/GlitchText.svelte"
  import Section from "../../layouts/Section.svelte"
</script>

<!-- Template -->
<Section>
  <div class="content-container">
    <GlitchSpan>Welcome to my website...</GlitchSpan>
    <GlitchHeading>Hi, I'm Matteo Alberghini :)</GlitchHeading>
    <GlitchText marginTop="52px">
      European developer, currently based in the Netherlands. I love building websites, apps & video games. I code scripts & build IOT devices.
      Currently frontend developer for, working on headless wordpress with nextjs.
    </GlitchText>
    <div class="buttons-container">
      <GlitchButton type="primary" href="/" text="My projects and code snippets" />
      <GlitchButton marginLeft="32px" type="secondary" href="/" text="Something else CTA" />
    </div>
  </div>
</Section>

<!-- Styles -->
<style>
  .content-container {
    /* grid */
    grid-column: 3 / 11;
    grid-row: 1;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    /* margins */
    padding-top: 258px;
  }
  .buttons-container {
    /* flex */
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    /* margins */
    padding-top: 28px;
  }
</style>