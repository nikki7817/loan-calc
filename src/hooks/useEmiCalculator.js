export const useEmiCalculator = () => {
	// Calculate monthly EMI
	const calculateEmi = (principal, rate, tenure) => {
		const P = parseFloat(principal);
		const R = parseFloat(rate) / 12 / 100;
		const N = parseFloat(tenure) * 12;

		const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
		return isNaN(emi) ? 0 : emi;
	};

	// Create amortization schedule
	const generateAmortizationSchedule = (principal, rate, tenure) => {
		const monthlyEmi = calculateEmi(principal, rate, tenure);
		const schedule = [];
		let balance = principal;
		const totalMonths = tenure * 12;

		for (let month = 1; month <= totalMonths; month++) {
			const interest = balance * (rate / 12 / 100);
			const principalPaid = monthlyEmi - interest;
			balance -= principalPaid;

			schedule.push({
				month,
				principalPaid: principalPaid.toFixed(2),
				interest: interest.toFixed(2),
				balance: Math.max(0, balance).toFixed(2),
			});
		}

		return schedule;
	};

	return { calculateEmi, generateAmortizationSchedule };
};
