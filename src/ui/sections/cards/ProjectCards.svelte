<!-- Script -->
<script lang="ts">
  /* imports */
	import Section from "../../layouts/Section.svelte"
  import type { ProjectCard as ProjectCardType } from "../../components/cards/ProjectCard.types"
	import ProjectCard from "../../components/cards/ProjectCard.svelte"

  /* constants */
  const cards: ProjectCardType[] = [
    {
      id: 1,
      image: '/test.jpg',
    },
    {
      id: 0,
      image: '/test.jpg',
    },
    {
      id: 2,
      image: '/test.jpg',
    },
    {
      id: 2,
      image: '/test.jpg',
    },
    {
      id: 2,
      image: '/test.jpg',
    },
  ]
</script>

<!-- Template -->
<Section>
  <div class="cards-container">
    {#each cards as card}
      <ProjectCard image={card.image} />
    {/each}
  </div>
</Section>

<!-- Style -->
<style>
  .cards-container {
    /* grid */
    grid-column: 3 / 11;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    column-gap: 16px;
    row-gap: 24px;
    /* margins */
    margin-top: 128px;
  }
  @media only screen and (min-width: 600px) {
    .cards-container {
      /* grid */
      grid-template-columns: repeat(6, 1fr);
    }
  }
  @media only screen and (min-width: 1280px) {
    .cards-container {
      /* grid */
      grid-template-columns: repeat(12, 1fr);
      column-gap: 24px;
    }
  }
  @media only screen and (min-width: 2056px) {
    .cards-container {
      /* grid */
      column-gap: 32px;
    }
  }
</style>