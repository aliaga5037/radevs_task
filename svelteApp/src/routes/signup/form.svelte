<script>
	import { slide } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import { formData, page } from './store';
	let step = 1;
	let isLoading = false;
	let loadingProgress = 0;

	let { carBrand, zipCode, firstName, lastName, carModel, firstRegistration } = $formData;

	const allowedBrands = ['audi', 'bmw', 'nissan'];
	const allowedZipCodes = ['65000', '66000', '67000', '68000'];

	let errorMessage = '';

	function handleNext() {
		if (step === 1) {
			if (!carBrand || !allowedBrands.includes(carBrand.toLowerCase())) {
				errorMessage = 'Please enter a valid car brand.';
				return;
			}

			if (!zipCode || !allowedZipCodes.includes(zipCode)) {
				errorMessage = 'Please enter a valid zip code.';
				return;
			}

			errorMessage = '';
			step++;
		} else if (step === 2) {
			if (!firstName || !lastName || !carModel || !firstRegistration) {
				errorMessage = 'Please fill in all required fields.';
				return;
			}
			errorMessage = '';
			submitForm();
		}
	}

	function handleBack() {
		step--;
	}

	function handleLoadingProgress() {
		if (loadingProgress < 100) {
			loadingProgress += 10;
			setTimeout(handleLoadingProgress, 600);
		}
	}

	function submitForm() {
		formData.set({
			carBrand,
			zipCode,
			firstName,
			lastName,
			carModel,
			firstRegistration
		});
		isLoading = true;
		// simulate load
		handleLoadingProgress();
		setTimeout(() => {
			isLoading = false;
			// redirect to random page
			const redirectTo = Math.random() < 0.5 ? 'ResultV1' : 'ResultV2';
			page.set(redirectTo);
		}, 6000);

		console.log('Form submitted!');
	}
</script>

<div class="signup">
	<h1>Signup</h1>

	{#if errorMessage}
		<div class="error-popup">
			<p>{errorMessage}</p>
		</div>
	{/if}

	{#if step === 1}
		<form
			class="form"
			transition:slide={{
				duration: 300,
				easing: elasticOut
			}}
		>
			<div class="input__group">
				<label for="carBrand">Car Brand:</label>
				<input type="text" id="carBrand" bind:value={carBrand} />
			</div>
			<div class="input__group">
				<label for="zipCode">Zip Code:</label>
				<input type="text" id="zipCode" bind:value={zipCode} />
			</div>
			<button on:click={handleNext}>Next</button>
		</form>
	{:else if step === 2}
		<form class="form" transition:slide={{ duration: 300 }}>
			{#if isLoading}
				<div class="loading-window">
					<div class="loading-text">Loading...</div>
					<progress value={loadingProgress} max="100" />
				</div>
			{/if}
			<div class="input__group">
				<label for="firstName">First Name:</label>
				<input type="text" id="firstName" bind:value={firstName} />
			</div>
			<div class="input__group">
				<label for="lastName">Last Name:</label>
				<input type="text" id="lastName" bind:value={lastName} />
			</div>
			<div class="input__group">
				<label for="carModel">Car Model:</label>
				<input type="text" id="carModel" bind:value={carModel} />
			</div>
			<div class="input__group">
				<label for="firstRegistration">First Registration:</label>
				<input type="text" id="firstRegistration" bind:value={firstRegistration} />
			</div>

			<div class="form__actions">
				<button on:click={handleBack}>Back</button>
				<button on:click={handleNext}>Submit</button>
			</div>
		</form>
	{/if}
</div>
