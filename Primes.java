//Nadia; May 30 2019; Team : Scott, Tony, Ricardo, Scott;

package primeNumbers;

import java.util.ArrayList;

public class Primes {
	
	public static void isPrime(int numberOfValues, int someOtherNumber) {

	//declare of arrayList of integers 1 - 100. 
	
	
	ArrayList<Integer> oneToOneHundred = new ArrayList<>(numberOfValues);
	
		//number of values stored in the array list
		int arrayValues = numberOfValues; 
	
		// initialize count
		int count = 0;
				
		// while loops to fill the arrayList with the values
				
		while (count < arrayValues) {
			oneToOneHundred.add(count +1);
			count++;
		}
	
		//print ArrayList values
		//System.out.println(oneToOneHundred);
	
	//initialize new count for inner while loop
	int count2 = 0; 
	// create an array of prime factors to divide by and not eliminate from the array list
	int [] nValues = {2, 3, 5, 7};
	// new count for outer loop 
	int countW = 0;
	
	// outer loop goes through the array to use different values 
	while (countW < nValues.length) {
		
	
	//inner loop checks to see if something is divisible by a value and keeps that value in the array list
	while (count2 < oneToOneHundred.size()) {
		if (oneToOneHundred.get(count2)%nValues[countW]==0 && oneToOneHundred.get(count2)!=nValues[countW]) {
			oneToOneHundred.remove(count2);
		}
			count2++;
	
	}
	count2= 0; countW++;
	}
	
	//takes one out by force because it is NOT prime. Sorry, folks. 
	oneToOneHundred.remove(0);
	
	
	
	System.out.println(oneToOneHundred);
	
	//check if a number is prime
	if (oneToOneHundred.contains(someOtherNumber)) {
		System.out.println("That number is a prime number");
		
	}
	else {
		System.out.println("That number is not a prime number");
	}
			//////////////////////////////
	}
	
				
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		isPrime(100, 2);
		

	}

}


