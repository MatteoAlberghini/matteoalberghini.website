<!-- Script -->
<script lang="ts">
  /* props */
  export let image: string = ''
</script>

<!-- Template -->
<a href="/" class="container">
  <div class="before-container" />
  <div class="after-container" />
  <img src={image} alt="test" />
  <div class="gradient" />
  <div class="content">CARD TITLE</div>
</a>

<!-- Style -->
<style>
  .container {
    /* constants */
    --primary-opacity: rgba(15, 210, 255, 0.25);
    --primary-off-opacity: rgba(15, 210, 255, 1);
    /* size */
    aspect-ratio: 11 / 16;
    grid-column: span 4;
    /* border */
    border-radius: 0px;
    border: 1px solid var(--primary-off-opacity);
    /* colors */
    background-color: var(--primary-opacity);
    /* position */
    overflow: hidden;
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
      var(--primary-opacity) 3px,
      transparent 3px,
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
    filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(160deg);
    opacity: 0.6;
  }
  @keyframes screen {
    from { background-position: 0% 0%; }
    to { background-position:  0% -100%; }
  }
  /* Hover */
  a:hover .after-container {
    animation: glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
  a:hover .before-container {
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
    position: relative;
    z-index: 4;
  }
</style>