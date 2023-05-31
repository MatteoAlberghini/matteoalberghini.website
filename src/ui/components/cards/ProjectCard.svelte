<!-- Script -->
<script lang="ts">
  /* props */
  export let image: string = ''
  export let title: string = ''
  export let type: string = ''
  export let intro: string = ''
</script>

<!-- Template -->
<a href="/" class="container">
  <div class="before-container" />
  <div class="after-container" />
  <img src={image} alt="test" />
  <div class="gradient" />
  <div class="content">
    <!-- title -->
    <div class="title">
      <span class="before-title">{title}</span>
      <h3 class="card-title">{title}</h3>
      <span class="after-title">{title}</span>
    </div>
    <div class="intro">
      <span class="before-span">{intro}</span>
      <span class="card-intro">{intro}</span>
      <span class="after-span">{intro}</span>
    </div>
  </div>
  <!-- type -->
  <span class="before-type">{type}</span>
  <span class="card-type">{"<"}{type} {"/>"}</span>
  <span class="after-type">{type}</span>
</a>

<!-- Style -->
<style>
  .container {
    /* constants */
    --primary-opacity: rgba(15, 210, 255, 0.3);
    --primary-off-opacity: rgba(15, 210, 255, 1);
    /* size */
    aspect-ratio: 11 / 15;
    grid-column: span 4;
    /* border */
    border-radius: 0px;
    border: 1px solid var(--primary-off-opacity);
    /* colors */
    /* position */
    position: relative;
  }
  .before-container, .after-container {
    /* content */
    content: '';
    /* size */
    height: 100%;
    width: 100%;
    /* position */
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
  }
  .after-container {
    /* border */
    border-width: 1px;
    border-color: var(--main-tertiary);
    border-style: solid;
    /* color */
    color: var(--main-tertiary);
  }
  .before-container {
    /* border */
    border-width: 1px;
    border-color: var(--main-secondary);
    border-style: solid;
    /* color */
    color: var(--main-secondary);
  }
  .gradient {
    /* gradient */
    background: linear-gradient(
      var(--primary-opacity),
      var(--primary-opacity) 1px,
      transparent 2px,
      transparent 9px
    );
    background-size: 100% 9px;
    /* size */
    height: 100%;
    width: 100%;
    /* position */
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    /* animation */
    animation: screen 40s infinite linear;
  }
  img {
    /* size*/
    height: 100%;
    width: 100%;
    object-fit: cover;
    /* tint */
    opacity: 0.45;
  }
  @keyframes screen {
    from { background-position: 0% 0%; }
    to { background-position:  0% -100%; }
  }
  /* Hover */
  a:hover .after-container, a:focus .after-container {
    animation: glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
  a:hover .before-container, a:focus .before-container {
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
  /* content */
  .content {
    /* position */
    top: 24px;
    position: absolute;
    z-index: 4;
    /* size */
    width: 100%;
    height: 100%;
    /* layout */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .title, .intro {
    /* size */
    width: 100%;
    /* layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .card-title {
    /* fonts */
    font-size: var(--text-heading-h3);
    font-weight: 300;
    color: var(--main-primary);
    text-transform: uppercase;
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    /* position */
    position: relative;
    /* size */
    max-width: 85%;
  }
  .card-type {
    /* font */
    font-size: var(--text-body-large);
    font-weight: 300;
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    /* position */
    position: absolute;
    bottom: 12px;
    right: 16px;
    /* color */
    color: var(--main-off-white);
  }
  .card-intro {
    /* font */
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    font-size: var(--text-body-large);
    font-weight: 200;
    /* color */
    color: var(--main-off-white);
    /* position */
    width: 85%;
    margin-top: 24px;
  }
  .after-title, .before-title {
    /* fonts */
    font-size: var(--text-heading-h3);
    font-weight: 300;
    /* size */
    max-width: 85%;
    /* text */
    text-transform: uppercase;
    /* position */
    position: absolute;
    z-index: -2;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .after-span, .before-span {
    /* fonts */
    font-size: var(--text-body-large);
    font-weight: 200;
    /* size */
    margin-top: 24px;
    width: 85%;
    max-width: 85%;
    /* position */
    position: absolute;
    z-index: -2;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .after-type, .before-type {
    /* fonts */
    font-size: var(--text-body-large);
    font-weight: 300;
    /* position */
    position: absolute;
    z-index: -2;
    bottom: 12px;
    right: 16px;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .after-title, .after-title, .after-type {
    /* color */
    color: var(--main-primary);
  }
  .before-title, .before-span, .before-type {
    /* color */
    color: var(--main-secondary);
  }
  /* Button hover */
  a:hover .after-title {
    animation: glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
  a:hover .before-title {
    animation: glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  }
  a:hover .after-span {
    animation: glitch 0.45s cubic-bezier(0.45, 0.66, 0.65, 1.14) reverse both infinite;
  }
  a:hover .before-span {
    animation: glitch 0.45s cubic-bezier(0.45, 0.66, 0.65, 1.14) both infinite;
  }
  a:hover .after-type {
    animation: glitch 0.45s cubic-bezier(0.45, 0.66, 0.65, 1.14) reverse both infinite;
  }
  a:hover .before-type {
    animation: glitch 0.45s cubic-bezier(0.45, 0.66, 0.65, 1.14) both infinite;
  }
</style>