let number_format = (value) => {
	return value.toLocaleString();
} 
data_object
let investment_simulation_data = (object) => {
	let data_array = [];
	let compounded_investment = compounded_yield = compounded_profit = 0;
	for (let i=0;i<object.number;++i) {
		let investment = object.investment + (data_object.increment*i);
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
console.log(investment_simulation_data(10,10000,10000));
