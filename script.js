function firstWord(s)
{
  
	let res="";
	for (let index = 0; index < s.length; index++)
	{
		if (s[index]==" " && index!=0)
		{
			return res;
		}
		else if (s[index]==" " && index==0)
		{
			 res+=s[index];
		}
		else
		{
			res+=s[index];
		}
	}
	return res;
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
