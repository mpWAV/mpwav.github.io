<script lang="ts">
  import { onMount} from 'svelte';
  import { success, danger } from '$lib/alert.svelte';
  import { invoke } from '$lib/clearsense-manager/api';

  function handleSubmit(e: Event) {
    e.preventDefault();

    const form = document.getElementById('version-form') as HTMLFormElement;
    const payload = {
      'type': (form.elements.namedItem('type') as HTMLInputElement).value,
      'minimum': (form.elements.namedItem('min-version') as HTMLInputElement).value,
      'recommended': (form.elements.namedItem('recommended-version') as HTMLInputElement).value,
    };
    invoke('POST', '/compatibility', 'application/json', JSON.stringify(payload))
      .then((res) => {
        if (res.status === 200) {
          success('Version updated successfully');
        } else {
          danger('Failed to update version');
        }
      })
      .catch((err) => {
        danger('Failed to update version');
        console.log(err);
      });
  }

  onMount(() => {
    document.getElementById('version-form')!.addEventListener('submit', handleSubmit);
  });
</script>

<div class="card">
  <div class="card-body">
    <h1 class="card-title text-center mb-4">버전 업데이트</h1>
    <form id="version-form">
      <div class="mb-3">
        <label for="type" class="form-label">Type</label>
        <select class="form-select" id="type" name="type" required>
          <option value="">Select Type</option>
          <option value="ios">iOS</option>
          <option value="android">Android</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="min-version" class="form-label">New Minimum Required Version</label>
        <input type="text" class="form-control" id="min-version" name="min-version" required />
      </div>
      <div class="mb-3">
        <label for="recommended-version" class="form-label">New Recommended Version</label>
        <input
          type="text"
          class="form-control"
          id="recommended-version"
          name="recommended-version"
          required
        />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary" id="update-version">Update</button>
      </div>
    </form>
  </div>
</div>
