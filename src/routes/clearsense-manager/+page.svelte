<script lang="ts">
  import { browser } from '$app/environment';

  import { danger } from '$lib/alert.svelte';
  import AlertContainer from '$lib/components/AlertContainer.svelte';
  import CSVersionUpdate from '$lib/components/CSVersionUpdate.svelte';
  import CSNoticeUpdate from '$lib/components/CSNoticeUpdate.svelte';
  import Header from '$lib/components/Header.svelte';

  const loggedIn =
    browser && window.sessionStorage.getItem('baseurl') && window.sessionStorage.getItem('token');

  function handleLogout() {
    window.sessionStorage.removeItem('baseurl');
    window.sessionStorage.removeItem('token');
    window.location.href = '/clearsense-manager/login';
  }
</script>

{#snippet logout()}
  <button type="button" class="btn btn-outline-light me-2" onclick={handleLogout}>
    로그아웃
  </button>
{/snippet}

{#if loggedIn}
  <Header rightMenu={logout} />
  <div class="m-3">
    <AlertContainer />
  </div>
  <button type="button" class="btn btn-primary" onclick={(_) => danger('whoopsie')}
    >insert alert</button
  >
  <div class="container d-flex justify-content-center align-items-center">
    <div class="row g-4">
      <div class="col-12">
        <CSVersionUpdate />
      </div>
      <div class="col-12">
        <CSNoticeUpdate />
      </div>
    </div>
  </div>
{/if}
