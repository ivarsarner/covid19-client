import React, {useEffect, useState} from 'react';
import axios from 'axios';
import State from './State';
 
const StatesContainer: React.FC = () => {
	const [covidData, setCovidData] = useState([]);

	const getCovidData = async () => {
		const response = await axios.get('https://covidtracking.com/api/v1/states/current.json');
		console.log(response.data[0]);
		setCovidData(response.data);
	}

	useEffect(() => {
		getCovidData();
	}, [])

	return (
		<>
		{!covidData ? (
			<div>Loading...</div>
		) : (
			<div>
				<span>State - Currently in hospital</span>
				{covidData.map((item: any) =>
					<State key={item.state} stateData={
						{state: item.state, hospitalizedCurrently: item.hospitalizedCurrently || 0}
					}/>
				)}
			</div>
		)}
		</>
	)
}
 
export default StatesContainer;