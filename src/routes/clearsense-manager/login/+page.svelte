<script lang="ts">
  import { onMount } from 'svelte';

  onMount(() => {
    const form = document.getElementById('login-form') as HTMLFormElement;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;

      window.sessionStorage.setItem('baseurl', username);
      window.sessionStorage.setItem('token', password);

      window.location.href = '/clearsense-manager';
    });
  });
</script>

<div class="container d-flex justify-content-center align-items-center">
  <div class="card">
    <div class="card-body">
      <h1 class="card-title text-center mb-4">깨끗耳 관리자 로그인</h1>
      <form id="login-form">
        <div class="mb-3">
          <label for="username" class="form-label">아이디</label>
          <input type="text" class="form-control" id="username" name="username" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">비밀번호</label>
          <input type="password" class="form-control" id="password" name="password" required />
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary">로그인</button>
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  .container {
    height: 100vh;
  }
</style>
