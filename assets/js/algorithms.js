let number_format = (value) => {
	return value.toLocaleString();
} 
let investment_simulation_data = (input_array) => {
	let data_array = [];

	let first_investment = Number(input_array[0].value),number = Number(input_array[1].value),
		increment = Number(input_array[2].value),start_capital = Number(input_array[3].value);
	let compounded_investment = compounded_yield = compounded_profit = 0;
	for (let i=0;i<number;++i) {
		let investment = first_investment + (increment*i);
		console.log (investment)

		if (i === 0) {
			current_yield = 0;
		}else {
			current_yield = (investment - increment) * 1.5;
		}
		let block_data = {
			index: i+1,investment: number_format(investment),
			yield: number_format(current_yield),profit: number_format(current_yield - investment),
			profit: number_format(current_yield - investment),
			compounded_investment: number_format(compounded_investment += investment),
			compounded_yield: number_format(compounded_yield += current_yield),
			compounded_profit: number_format(compounded_profit += (current_yield - investment))
		};
		data_array.push(block_data);
	}
	return data_array;
}
