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
      title: 'Nextjs && Headless wordpress',
      type: 'project',
      intro: 'To escape a deluge of generated content, companies are screening your resumes and documents using AI. But there is a way you can still stand out and get your dream job: Prompt Injection. '
    },
    {
      id: 0,
      image: '/code1.avif',
      title: 'News scraper on a timer',
      type: 'project',
      intro: 'To escape a deluge of generated content, companies are screening your resumes and documents using AI. '
    },
    {
      id: 2,
      image: '/code2.avif',
      title: 'Parallax effect on images',
      type: 'snippet',
      intro: 'To escape a deluge of generated content, companies are screening your resumes and documents using AI. '
    },
    {
      id: 2,
      image: '/code3.avif',
      title: 'Custom cursor in React',
      type: 'snippet',
      intro: 'To escape a deluge of generated content, companies are screening your resumes and documents using AI. '
    },
    {
      id: 2,
      image: '/code4.avif',
      title: 'Detect autofill && trigger animations off of it in React',
      type: 'project',
      intro: 'To escape a deluge of generated content, companies are screening your resumes and documents using AI. '
    },
  ]
</script>

<!-- Template -->
<Section>
  <div class="cards-container">
    {#each cards as card}
      <ProjectCard image={card.image} title={card.title} type={card.type} intro={card.intro} />
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
    margin-top: 168px;
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