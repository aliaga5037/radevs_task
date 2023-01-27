<script>
	import { formData } from './store';
	const { carBrand, zipCode, firstName, lastName, carModel, firstRegistration } = $formData;
</script>

<h1 class="heading">Your Profile</h1>
<div class="container">
	<div class="item">First Name: {firstName}</div>
	<div class="item">Last Name: {lastName}</div>
	<div class="item">Car Brand: {carBrand}</div>
	<div class="item">Car Model: {carModel}</div>
	<div class="item">Zip Code: {zipCode}</div>
	<div class="item">First registration: {firstRegistration}</div>
</div>
