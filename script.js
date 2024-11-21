function firstWord(s)
{
  // your code here
	
	let res="";
	for (let index = 0; index < s.length(); index++)
	{
		if (s[index]==" ")
		{
			return res;
		}
		else
		{
			res+=s[index];
		}
	}
	return res;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
