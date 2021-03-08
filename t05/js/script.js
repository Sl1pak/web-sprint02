function total(addCount, addPrice, currentTotal){
	if(currentTotal === undefined)
		currentTotal = 0;
	if(Number.isFinite(addCount) && Number.isFinite(addPrice) && Number.isFinite(currentTotal))
		return +(currentTotal += addPrice * addCount).toFixed(2);
}