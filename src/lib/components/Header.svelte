<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    rightMenu,
  }: {
    rightMenu: Snippet;
  } = $props();
</script>

<header class="p-3 text-bg-dark">
  <div class="container">
    <div
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
    >
      <a
        href="https://mpwav.com/"
        class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <img
          class="bi me-2"
          width="140"
          height="52"
          src="https://mpwav.com/theme/basic/img/logo_w.svg"
          alt="mpWAV Inc."
        />
        <span>ClearSense Management Console</span>
      </a>
      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>
      <div class="text-end">
        {@render rightMenu()}
      </div>
    </div>
  </div>
</header>
