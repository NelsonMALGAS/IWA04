const date= 2050;
const statusA= 'parent';
let count = 0;
if (date === 2050) {
	console.log("January", 'New Year’s Day');  
	console.log("March", 'Human Rights Day');
	let date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	 count += 4;

	if (statusA==="student") {
	  console.log('June', 'Youth Day')
	  count += 1;
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	 count += 3;

	if (statusA === "parent") {
	  console.log(date, 'Christmas Day')
	  count += 1;
  }

	console.log(date, 'Day of Goodwill')
    count += 1;
}

console.log('Your status is:', statusA);
console.log('The year is:', date);
console.log('The total holidays is:', count);

//HERE ARE THE CHANGES I MADE
/**
 * The const variables "statusA" & date have been assigned properly using the "=" instead of :
 * The variable count has been initialized outside the if statement has been re-declared as let instead of const
 * The if statement for the year 2050 has been fixed by using the strict equality operator '===' instead of =
 * The count variable is incremented properly using += instead of = in each case
 * The if statement to log(chistmas day) & log(youth day) has been fixed using the strict operator '===' instead of =
 * Status has been changed to statusA because the word "status" has been
   deprecated(a program or application that is no longer supported or maintained
   by its developer.)
 */