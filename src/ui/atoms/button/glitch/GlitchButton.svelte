<!-- Script -->
<script lang="ts">
  /* import */
	import { MapTypeToPrimaryColor, MapTypeToSecondaryColor, type AtomType } from "../../../../types/structure/atoms.types"
  import type { Color } from "../../../../types/common/colors.types"

  /* props */
  export let marginLeft: string = '0px' 
  export let type: AtomType = 'primary'
  export let href: string = ''
  export let target: string = '_self'

  /* constants */
  const primary: Color = MapTypeToPrimaryColor[type]
  const secondary: Color = MapTypeToSecondaryColor[type] 
</script>

<!-- Template -->
<a
  href={href}
  target={target}
  style:--margin-left={marginLeft} 
  style:--primary={primary}
  style:--secondary={secondary}
>
  <span class="before-span"><slot /></span>
  <span class="main-span"><slot /></span>
  <span class="after-span"><slot /></span>
</a>

<!-- Style -->
<style>
  /* Button */
  a {
    /* margins */
    margin-left: var(--margin-left);
    /* size */
    height: 56px;
    width: 350px;
    /* text */
    text-shadow: 1px 1px var(--main-secondary), -1px -1px var(--main-primary), -1px 0px var(--main-tertiary);
    text-decoration: none;
    /* colors */
    background-color: transparent;
    color: var(--main-white);
    /* border */
    border-width: 1px;
    border-radius: 0px;
    border-style: solid;
    border-color: var(--main-white);
    /* font */
    font-size: var(--text-body);
    font-weight: 400;
    /* position */
    position: relative;
    z-index: 1;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:hover {
    /* cursor */
    cursor: pointer;
  }
  /* Spans */
  .main-span {
    /* text */
    text-transform: uppercase;
  }
  .after-span, .before-span {
    /* text */
    text-transform: uppercase;
    /* size */
    height: 56px;
    width: 350px;
    /* position */
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -2;
    /* flex */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .after-span {
    /* border */
    border-width: 1px;
    border-color: var(--secondary);
    border-style: solid;
    /* color */
    color: var(--secondary);
  }
  .before-span {
    /* border */
    border-width: 1px;
    border-color: var(--primary);
    border-style: solid;
    /* color */
    color: var(--primary);
  }
  /* Button hover */
  a:hover .after-span {
    animation: glitch 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  }
  a:hover .before-span {
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
</style>