<script lang="ts">

	let { form } = $props();

</script>

<div class="grid mx-3">
	<form action="?/login" method="POST">
		<h1>Ingreso</h1>

		<div>
			<label for="email">Escribe tu email</label>
			<input id="email" name="email" type="text"  required />
		</div>

		<div>
			<label for="password">Escribe tu Password</label>
			<input id="password" name="password" type="password" required />
		</div>

		{#if form?.mensaje }
			<p class="error">{form.mensaje}</p>
		{/if}

		{#if form?.credentials}
			<p class="error">Usuario o contraseña invalido</p>
		{/if}

		<button type="submit">Register</button>

	</form>
</div>