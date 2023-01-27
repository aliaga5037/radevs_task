<script>
	import { formData } from './store';
	const { carBrand, zipCode, firstName, lastName, carModel, firstRegistration } = $formData;
	const fullName = `${firstName} ${lastName}`;
	const car = `${carModel} ${carBrand}`;
</script>

<h1 class="heading">Your Profile</h1>
<div class="container">
	<div class="item">Full Name: {fullName}</div>
	<div class="item">Car: {car}</div>
	<div class="item">Zip Code: {zipCode}</div>
	<div class="item">First registration: {firstRegistration}</div>
</div>
