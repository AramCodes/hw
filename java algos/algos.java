//On Max's farm, each plant bench is labeled with a letter followed by an integer. Given integers numRows and numColumns, output the 
//label for each plant bench, followed by a space. End each row with a newline.
//1. Rows are in alphabetical order. Plant benches in the first row all start with the letter A.
//2. Columns are in ascending order. Plant benches in the first column all end with the integer 1.
//3. Add an empty string at the beginning of the output to properly concatenate characters and integers.
import java.util.Scanner;

public class NestedLoops {
   public static void main (String[] args) {
        Scanner scnr = new Scanner(System.in);
        int numRows;
        int numColumns;
        int currentRow;
        char currentRowLetter;
        int currentColumn;
        int currentColumnInteger;
   
        numRows = scnr.nextInt();
        numColumns = scnr.nextInt();

        currentRow = 0;
        currentRowLetter = 'A';
      
      
        while ( currentRow < numRows ){
         
            for (currentColumn = 0; currentColumn < numColumns; currentColumn++ ){
                System.out.print("" + currentRowLetter + (currentColumn + 1) + " ");
            }
         
            System.out.println();
            currentRowLetter++;
            currentRow++;
        }

    }
}

//Make a program that causes this pattern:
// 1: 1,2,3,4,
// 2: 6,8,10,12,
// 3: 15,18,_ _ 
// 4: _ _ _ _ 
// start at index at 1, adds outer loop to a tally to a tally, and inner loop either prints the tally or "_ " if tally is higher than 
//value input.

public class BreakAndContinue {
   public static void main(String [] args){
      Scanner scnr = new Scanner(System.in);
      int result;
      int stop;
      int a;
      int b;
      
      stop = scnr.nextInt();
      result = 0;
      
      for (a = 1; a < 5; ++a) {
         System.out.print(a + ": ");
         
         for (b = 0; b < 4; ++b) {
            result += a;
            
            if (result > stop) {
               System.out.print("_ ");
               continue;
            }
            
            System.out.print(result + ",");
         }
         
         System.out.println();
      }
   }
}

//"Simon Says" is a memory game where "Simon" outputs a sequence of 10 characters (R, G, B, Y) and the user must repeat the sequence. 
//Create a for loop that compares the two strings starting from index 0. For each match, add one point to userScore. Upon a mismatch, 
//exit the loop using a break statement. Assume simonPattern and userPattern are always the same length. Ex: The following patterns 
//yield a userScore of 4:
public class SimonSays {
    public static void main (String [] args) {
        Scanner scnr = new Scanner(System.in);
        String simonPattern;
        String userPattern;
        int userScore;
        int i;

        userScore = 0;

        simonPattern = scnr.next();
        userPattern  = scnr.next();

        for (i = 0; i < simonPattern.length(); i++){
            if(simonPattern.charAt(i) == userPattern.charAt(i)){
                userScore += 1;
            } else {
                break;   
            }
        }

        System.out.println("userScore: " + userScore);

        return;
    }
}

// Statistics are often calculated with varying amounts of input data. Write a program that takes any number of non-negative integers as 
// input, and outputs the max and average. A negative integer ends the input and is not included in the statistics. Assume the input 
// contains at least one non-negative integer.

// Output the average with two digits after the decimal point followed by a newline, which can be achieved as follows:
// System.out.printf("%.2f\n", average);

public class LabProgram {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int currInt;
      int max = 0;
      int result = 0;
      int count = 0;
      
      currInt = scnr.nextInt();
      
      while (currInt >= 0){
        if (currInt > max) {
            max = currInt;   
        }
         
        result += currInt;
         
        count++;
        currInt = scnr.nextInt();
      }
      
      double ave = count > 0 ? (double) result / count: 0.00;
      
      System.out.print(max + " ");
      System.out.printf("%.2f\n", ave);
   }
}

// Write a program whose input is a character and a string, and whose output indicates the number of times the character appears in the
//  string. The output should include the input character and use the plural form, n's, if the number of times the characters appears 
// is not exactly 1.

public class LabsProgram {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      String str;
      char letter;
      int count = 0;
      
      letter = scnr.next().charAt(0);
      str = scnr.nextLine();
      
      for(int i = 0; i < str.length(); i++) {
        if(letter == str.charAt(i)) {
            count++;   
        }  
      }
      
      if (count == 1) {
        System.out.println( count + " " + letter );
      } else {
        System.out.println( count + " " + letter + "'s");
      }
    }
}

// Variable userString is assigned with a 3-character string read from input. If userString's first and third characters are both 
//alphabetic characters, output "String accepted". Otherwise, output "String not accepted". Ex 1: If the input is n0q, then the 
//output is: String accepted Ex 2: If the input is g5=, then the output is: String not accepted

public class StringModification {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        String userString;

        userString = scnr.nextLine();

        if (Character.isLetter(userString.charAt(0)) && Character.isLetter(userString.charAt(2)) ) {
            System.out.println("String accepted");  
        } else {
            System.out.println("String not accepted");   
        }

    }
}

// Integer numElems is read from input and integer array patientNumbers is 
//declared with size numElems. Then, numElems integers are read from input and 
//stored into patientNumbers. If the first element is less than the last element, 
//then assign Boolean firstSmaller with true. Otherwise, assign firstSmaller with
// false.

public class PatientLog {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int numElems;
        int[] patientNumbers;
        int i;
		boolean firstSmaller;

        numElems = scnr.nextInt();

        patientNumbers = new int[numElems];
        for (i = 0; i < patientNumbers.length; ++i) {
		  patientNumbers[i] = scnr.nextInt();
	    }

        if (patientNumbers[0] < patientNumbers[numElems - 1]) {
           firstSmaller = true;
        } else {
           firstSmaller = false;   
        }

        if (firstSmaller) {
			System.out.println("First element is less than last element");
		} else {
			System.out.println("First element is not less than last element");
	    }
    }
}

//Integer numElements is read from input and integer array userVals is declared with size numElements. Then, numElements integers are 
//read from input and stored into userVals. Output all elements of userVals in order, following each element with a space, including 
//the last. After the final output, end with a newline.

public class UserData {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int numElements; 
      int i;
      
      numElements = scnr.nextInt();
      int[] userVals = new int[numElements];
      
	  for (i = 0; i < userVals.length; ++i) {
		userVals[i] = scnr.nextInt();
	  }

	  System.out.print("Array contents: ");

      for (i = 0; i < userVals.length; ++i) {
        System.out.print( userVals[i] + " ");   
      }

      System.out.println();

    }
}

// Given the integer array hourlyMiles with the size of NUM_ELEMENTS, write a for loop to output the integers in the first half of 
//hourlyMiles in reverse order. Separate the integers with an asterisk surrounded by spaces (" * ").
//Ex: If the input is 48 59 49 103 35 36 65 53 66 72, then the output is: 35 * 103 * 49 * 59 * 48

public class MileRange {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      final int NUM_ELEMENTS = 10;
      int[] hourlyMiles = new int[NUM_ELEMENTS];
      int i;
      
      for (i = 0; i < hourlyMiles.length; ++i) {
        hourlyMiles[i] = scnr.nextInt();
      }
      
      for (i = (hourlyMiles.length / 2 ) - 1; i >= 0; i-- ) {
         
        if(i == 0){
            System.out.print(hourlyMiles[i]);
        } else {
            System.out.print(hourlyMiles[i] + " * ");   
        }
      }
      
      
      
      System.out.println();
    }
}

// Given the integer array averageMiles with the size of NUM_VALUES, write a for loop to initialize the second half of averageMiles 
// with the integers read from input. Ex: If the input is 72 70, then the output is: 0 0 72 70 

public class MileList {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      final int NUM_VALUES = 4;
      int[] averageMiles = new int[NUM_VALUES];
      int i;
      
      for (i = (averageMiles.length / 2 ); i < averageMiles.length ; i++ ) {
         averageMiles[i] = scnr.nextInt();
      }
      
      for (i = 0; i < averageMiles.length; ++i) {
         System.out.print(averageMiles[i] + " ");
      }
      
      System.out.println();
    }
}

// Given the integer array averageScores with the size of NUM_INPUTS, write a for loop that sums each integer of averageScores together
// until either maxSum is greater than or equal to 150 or the end of the array is reached. Ex: If the input is 5 9 11 12 3 8 16 7 4, 
// then the output is: Maximum sum: 75

public class ThresholdTracker {
   public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        final int NUM_INPUTS = 9;
        int[] averageScores = new int[NUM_INPUTS];
        int i;
        int maxSum;
      
        for (i = 0; i < averageScores.length; ++i) {
         averageScores[i] = scnr.nextInt();
        }

        maxSum = 0;
        for (i = 0; i < averageScores.length ; i++){
            if(maxSum < 150 ){
               maxSum += averageScores[i];
            }
        }

        System.out.println("Maximum sum: " + maxSum);
    }
}

// Integer numElements is read from input and represents: The number of elements in each array. The number of pairs of integers read from 
// input. Declare two integer arrays, groupNumbers and tipsPaid. Then, read each pair of integers from input. For each pair read, store 
// the first integer into groupNumbers and the second integer into tipsPaid. Ex: If the input is: 3,  7 35 5 50 2 22 then the output is:
//Group number: 7, Paid: $35
//Group number: 5, Paid: $50
//Group number: 2, Paid: $22

public class CashRecords {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int numElements;
		int i;

		numElements = scnr.nextInt();

        int[] groupNumbers =  new int[numElements];
        int[] tipsPaid = new int[numElements];
      
        for (i = 0; i < numElements; i++){
           groupNumbers[i] = scnr.nextInt();   
           tipsPaid[i] = scnr.nextInt();   
        }

        for (i = 0; i < numElements; ++i) {
			System.out.println("Group number: " + groupNumbers[i] + ", Paid: $" + tipsPaid[i]);
		}
    }
}

//Integer arrays firstArray and filterArray are read from input, each containing two elements. If an element in firstArray is negative, 
//then replace the element in firstArray with the corresponding element in filterArray (which has only positive integers).Ex: If the 
//input is:
//-29 44
//50 27
//then the output is:
//50 44 

public class ReplaceNegatives {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        final int NUM_VALS = 2;
        int[] firstArray = new int[NUM_VALS];
        int[] filterArray = new int[NUM_VALS];
        int i;

        for (i = 0; i < NUM_VALS; ++i) {
           firstArray[i] = scnr.nextInt();
        }

        for (i = 0; i < NUM_VALS; ++i) {
           filterArray[i] = scnr.nextInt();
        }

        for (i = 0; i < NUM_VALS; ++i) {
            if(firstArray[i] < 0) {
              firstArray[i] =  filterArray[i];
            }
        }

        for (i = 0; i < firstArray.length; ++i) {
            System.out.print(firstArray[i] + " ");
        } 

        System.out.println();
    }
}

//Integer arrays busNumbers and distanceTraveled are read from input, containing the numbers and distance traveled of each bus.
//Initialize variable count with 0. For each bus, increment count if a bus meets both of the following conditions: Number is less than
//150. Distance traveled is an even integer. Lastly, output count followed by a newline. Ex: For the input:
// 178 141 124 179 164
// 11 24 34 41 29
// then the output is:
// 2

public class CombineArrays {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        final int NUM_VALS = 5;
        int[] busNumbers = new int[NUM_VALS];
        int[] distanceTraveled = new int[NUM_VALS];
        int i; 
        int count;
 
        for (i = 0; i < NUM_VALS; ++i) {
            busNumbers[i] = scnr.nextInt();
        }
 
        for (i = 0; i < NUM_VALS; ++i) {
            distanceTraveled[i] = scnr.nextInt();
        }
 
        count = 0;
        for (i = 0; i < NUM_VALS; i++) {
            if (busNumbers[i] < 150 && distanceTraveled[i] % 2 == 0) {
                ++count;   
            }
        }
       
        System.out.println(count);
    }
};

//Integer numValues is read from input, representing the number of integers to be read next. Then, the remaining integers are read and 
//stored into array wagesList. For each element in wagesList that is less than 120: Output the element, followed by " is corrected to 
//twice the current value" and a newline. Assign the element with twice the element's current value. Ex: If the input is:
//3
//10 255 115
//then the output is:
//Raw wages: 10 255 115 
//10 is corrected to twice the current value
//115 is corrected to twice the current value
//Adjusted wages: 20 255 230 

public class ArrayUpdate {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int[] wagesList;
        int numValues;
        int i;
   
        numValues = scnr.nextInt();
   
        wagesList = new int[numValues];
   
        for (i = 0; i < wagesList.length; ++i) {
            wagesList[i] = scnr.nextInt();
        }
   
        System.out.print("Raw wages: ");
        for (i = 0; i < wagesList.length; ++i) {
           System.out.print(wagesList[i] + " ");
        }
        System.out.println();

        for(i = 0; i < wagesList.length; i++){
            if(wagesList[i] < 120) {
                System.out.println(wagesList[i] + " is corrected to twice the current value"); 
                wagesList[i] *= 2;
            }
        }

        System.out.print("Adjusted wages: ");
        for (i = 0; i < wagesList.length; ++i) {
            System.out.print(wagesList[i] + " ");
        }

        System.out.println();
    }
}

//Integer numValues is read from input, representing the number of integers to be read next. Then, the remaining integers are read and stored into array wagesList. 
//Initialize the array newList to be half the size of wagesList. Write a loop that iterates through newList and:If the corresponding element in the first half of 
//wagesList is less than 115, then assign the element in newList with the corresponding element in the first half of wagesList. Otherwise, assign the element in newList with 0.
// Ex: If the input is:
// 4
// 135 85 95 125
// then the output is:
// Original wages: 135 85 95 125 
// First half of the wages: 0 85 
// Note: Input array always has an even number of elements.

public class Wage {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int[] wagesList;
      int[] newList;
      int numValues;
      int i;
   
      numValues = scnr.nextInt();
      
      wagesList = new int[numValues];
   
      for (i = 0; i < wagesList.length; ++i) {
         wagesList[i] = scnr.nextInt();
      }

      newList = new int[numValues / 2] ;
      
        for (i = 0; i <= newList.length / 2; i++){
            if(wagesList[i] < 115) {
                newList[i] = wagesList[i];         
            } else if (newList[i] >= 115) {
                newList[i] = 0;  
            } 
        }

        System.out.print("Original wages: ");
        for (i = 0; i < wagesList.length; ++i) {
            System.out.print(wagesList[i] + " ");
        }
        System.out.println();
      
        System.out.print("First half of the wages: ");      
        for (i = 0; i < newList.length; ++i) {
            System.out.print(newList[i] + " ");
        }
        System.out.println();
    }
}

//Write a loop to iterate from 0 to the last row of milesTracker. Within each row, use a nested loop to iterate from 0 to the last column of milesTracker. Within the nested 
//loop, if an element is greater than maxMiles, assign maxMiles with the value of the element. Similarly, if an element is less than minMiles, assign minMiles with the value 
//of the element.
// Ex: If the input is: -10 20 30 40 the output is:
// Min miles: -10
// Max miles: 40

public class ArraysKeyValue {
   public static void main (String [] args) {
        Scanner scnr = new Scanner(System.in);
        final int NUM_ROWS = 2;
        final int NUM_COLS = 2;
        int [][] milesTracker = new int[NUM_ROWS][NUM_COLS];
        int i;
        int j;
        int maxMiles;
        int minMiles;

        for (i = 0; i < milesTracker.length; i++){
            for (j = 0; j < milesTracker[i].length; j++){
                milesTracker[i][j] = scnr.nextInt();
            }
        }

      maxMiles = milesTracker[0][0];
      minMiles = milesTracker[0][0];

       for (i = 0; i < NUM_ROWS; i++){
           for(j = 0; j < NUM_COLS; j++ ) {
                if(milesTracker[i][j] > maxMiles){
                 maxMiles = milesTracker[i][j];      
                } else if (milesTracker[i][j] < minMiles ){
                   minMiles = milesTracker[i][j];
                }  
            }
        }

      System.out.println("Min miles: " + minMiles);
      System.out.println("Max miles: " + maxMiles);
    }
}

//Write a program that reads a list of integers and outputs those integers in reverse. The input begins with an integer indicating the number of integers that follow. 
//For coding simplicity, follow each output integer by a comma, including the last one. Assume that the list will always contain fewer than 20 integers. Ex: If the input is:
//5 2 4 6 8 10
// the output is:
// 10,8,6,4,2,

public class LabProgram {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int numElements;                 // Number of integers in user's list
      numElements = scnr.nextInt();   // Input begins with number of integers that follow
      int[] userList = new int[numElements];   // List of numElement integers specified by the user
      int i;
      
      for (i = 0; i < userList.length; i++){
         userList[i] = scnr.nextInt();   // reads all inputs into array    
      }
      
      for(i = numElements - 1; i >= 0; i--){
         System.out.print(userList[i] + ",");  
      }
      System.out.println();
   }
}

//
public class LabProgram {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int[] userValues = new int[9];  // Set of data specified by the user
      double midVal = 0.00;
      
      for (int i= 0; i < userValues.length; i++) {
         if( userValues[i] >= 0){
            userValues[i] = scnr.nextInt();   
         }
      }

      if(userValues.length <= 9 && userValues.length > 0) {
         midVal = userValues.length / 2;
      } else {
         System.out.println("Too many numbers");   
      }
      
      
      System.out.print("Middle item: " + midVal);
   }
}

