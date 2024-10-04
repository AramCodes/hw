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