function trailingZeros(n) {
  //your JS code here. If required.
	let ct=0; 
	while(n>0){
		n=Math.floor(n/5);
		ct+=n;
	}
	return ct;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
