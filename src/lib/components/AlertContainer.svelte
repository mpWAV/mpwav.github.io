<script lang="ts">
  import { alerts, remove, type Alert } from '$lib/alert.svelte';
</script>

{#snippet alert(a: Alert)}
  <div class="alert alert-{a.type} alert-dismissible" role="alert">
    <div>{a.message}</div>
    <button type="button" class="btn-close" aria-label="닫기" onclick={(_) => remove(a)}></button>
  </div>
{/snippet}

<div id="alert-container">
  {#each alerts as item}
    {@render alert(item)}
  {/each}
</div>
