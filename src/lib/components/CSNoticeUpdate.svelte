<script lang="ts">
  import { onMount } from 'svelte';
  import { Tipex, type TipexEditor } from '@friendofsvelte/tipex';
  import { success, danger } from '$lib/alert.svelte';
  import { invoke } from '$lib/clearsense-manager/api';
  import { htmlize } from '$lib/clearsense-manager/notice';

  import "@friendofsvelte/tipex/styles/Tipex.css";
  import "@friendofsvelte/tipex/styles/ProseMirror.css";
  import "@friendofsvelte/tipex/styles/Controls.css";
  import "@friendofsvelte/tipex/styles/EditLink.css";
  import "@friendofsvelte/tipex/styles/CodeBlock.css";

  let editor = $state() as TipexEditor;
  let noticeBody = $derived(editor ? editor.getHTML() : "")

  function handleSubmit(e: Event) {
    e.preventDefault();
    const payload = htmlize(noticeBody);
    invoke('POST', '/notice', 'text/html', payload)
      .then((res) => {
        if (res.status >= 400) {
          danger('Failed to update notice');
        } else {
          success('Notice updated successfully');
        }
      })
      .catch((err) => {
        danger('Failed to update notice');
        console.error(err);
      });
  }

  onMount(() => {
    document.getElementById('notice-form')!.addEventListener('submit', handleSubmit);
  });
</script>

<div class="card">
  <div class="card-body">
    <h1 class="card-title text-center mb-4">Notice Update</h1>
    <form id="notice-form">
      <div class="mb-3">
        <label for="notice" class="form-label">Notice</label>
        <input type="text" class="form-control" id="notice" placeholder="Notice" required value={noticeBody} />
        <Tipex controls floating focal bind:tipex={editor} />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-primary" id="update-notice">Update</button>
      </div>
    </form>
  </div>
</div>

<style>
  #notice {
    display: none;
  }
</style>
