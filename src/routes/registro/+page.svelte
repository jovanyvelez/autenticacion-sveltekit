<script lang="ts">
	let { form } = $props();
</script>

<div class="grid">
	<form action="?/register" method="post">
		<h1>Registro</h1>

		<div>
			<label for="email">Escribe tu email</label>
			<input id="email" name="email" type="email" required />
		</div>

		<div>
			<label for="password">Escribe tu Password</label>
			<input id="password" name="password" type="password" required />
		</div>

		<div>
			<label for="password1">Confirma Password</label>
			<input id="password1" name="password1" type="password" required />
		</div>

		{#if form?.user}
			<p class="error">{form.user}</p>
		{/if}

		{#if form?.mensaje}
		    <p class="error">{form.mensaje}</p>
        {/if}

		<button type="submit">Registrarse</button>
	</form>
</div>