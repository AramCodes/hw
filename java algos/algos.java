//On Max's farm, each plant bench is labeled with a letter followed by an integer. Given integers numRows and numColumns, output the 
//label for each plant bench, followed by a space. End each row with a newline.
//1. Rows are in alphabetical order. Plant benches in the first row all start with the letter A.
//2. Columns are in ascending order. Plant benches in the first column all end with the integer 1.
//3. Add an empty string at the beginning of the output to properly concatenate characters and integers.
import java.util.Scanner;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.regex.Pattern;
import java.util.InputMismatchException;

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

public class ModifyArray {

    static void modifyArray(int[] arr, int chosen){
        for(int i = 0; i < arr.length; i++){
            if(arr[i] >= chosen) {
                arr[i] = 1;   
            } else {
                arr[i] = -1;   
            }   
        }   
    }

    public static void printArr(int[] arr) {
        int i;

        for (i = 0; i < arr.length; ++i) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        final int NUM_ELEM = 6;
        int[] myArray = new int[NUM_ELEM];
        int i;
        int numCompare;

        for (i = 0; i < myArray.length; ++i) {
           myArray[i] = scnr.nextInt();
        }

        numCompare = scnr.nextInt();

        System.out.print("Initial array: ");
        printArr(myArray);

        modifyArray(myArray, numCompare);

        System.out.print("Final array: ");
        printArr(myArray);
    }
}

public class BookshelfHeight {
   public static void printBookshelfHeight(int bookshelfHeight) {
      System.out.println("Bookshelf height as a whole number: " + bookshelfHeight + " centimeters");
   }

   public static void printBookshelfHeight(double bookshelfHeight){
      System.out.print("Bookshelf height to one decimal place: ");
      System.out.printf("%.1f", bookshelfHeight);
      System.out.println(" centimeters");
   }

   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int bookshelfHeight1;
      double bookshelfHeight2;
      
      bookshelfHeight1 = scnr.nextInt();
      bookshelfHeight2 = scnr.nextDouble();
      
      printBookshelfHeight(bookshelfHeight1);
      printBookshelfHeight(bookshelfHeight2);
   }
}

public class GardenInventory {
   public static int[] resupplySeed(int[] stock) {
      int[] newArr = new int[stock.length];
      
      for(int i = 0; i < stock.length; i++) {
         newArr[i] = stock[i] * 2;
      }

      return newArr;
   }

    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int[] seedStock = new int[4];
        int[] arr;
        int i;

        for (i = 0; i < seedStock.length; ++i) {
            seedStock[i] = scnr.nextInt();
        }

        arr = resupplySeed(seedStock);

        for (i = 0; i < arr.length; ++i) {
            System.out.print(arr[i] + " ");
        }

        // Check if the array returned by resupplySeed() is a copy of seedStock
        if (arr == seedStock) {
            System.out.println("\nA new array was not returned.");
        }
    }
}

// half custom hall predefined algo to reverse a sorted array
public static void sortArray(int[] arr){
    Arrays.sort(arr);
      
    for (int i = 0; i < arr.length / 2; ++i) {
        int temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    } 
}

//Define a method named sortArray that takes an array of integers as a parameter. Method sortArray() modifies the array 
//parameter by sorting the elements in descending order (highest to lowest). Then write a main program that reads a list 
//of integers from input, stores the integers (starting from the second input) in an array, calls sortArray(), and 
//outputs the sorted array. The first input integer indicates how many numbers are in the list. Assume that the list 
//will always contain less than 20 integers.

//Ex: If the input is:

//5 10 4 39 12 2
//the output is:

//39,12,10,4,2,
//For coding simplicity, follow every output value by a comma, including the last one.
public class LabProgram {

   public static void sortArray(int[] arr){
        Arrays.sort(arr);
      
        for (int i = 0; i < arr.length / 2; ++i) {
            int temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        } 
    }

    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int limit = scnr.nextInt();
        int[] arr = new int[limit];
      
        for(int i = 0; i < arr.length; i++) {
            arr[i] = scnr.nextInt();
        }
      
        sortArray(arr);
      
        for (int i = 0; i < arr.length; ++i) {
            if(i < limit - 1) {
                System.out.print(arr[i] + ",");
            } else {
                System.out.println(arr[i] + ",");   
            }
        }
    }
}

public class Play {
    private String title;
	private String author;
   
    public Play() { // Default constructor
        title = "Unspecified";
		author = "NoName";
    }

    public Play(String tit,  String auth) { // Overloaded constructor number 1
        title = tit;
		author = auth;
    }

    public void print() {
        System.out.println("Play: " + title + ", " + author);
    }
}

public class Animal {
    private String type;
    private String color;
    private int age;
   
    public Animal() { // Default constructor
        type = "None";
        color = "Undefined";
        age = -1;
    }

    public Animal(String ty, int ag) { // Overloaded constructor number 1
        type = ty;
        color = "Blue";
        age = ag;
    }

    public Animal(String ty, String col, int ag) { // Overloaded constructor number 2
        type = ty;
        color = col;
        age = ag;
    }

    public void print() {
        System.out.println("Animal: " + type + ", " + color + ", " + age);
    }
}

import java.util.ArrayList;

public class MakeLengthList {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int numLengths;
        int i;
        ArrayList<Integer> lengthList = new ArrayList<Integer>();//1
      
        numLengths = scnr.nextInt();//2
      
        for(i = 0; i < numLengths; i++){
            lengthList.add(2 * i + 2);
        }
      
        // Traversing a list using indexes
        for (i = 0; i < lengthList.size(); ++i) {
            System.out.print(lengthList.get(i) + " ");
        }

        System.out.println();
    }
}


Integer numWeights is read from input. Then, numWeights integers are read from input and inserted at the end of weightList. Assign sumOfWeights with the sum of all the elements in weightList.

Ex: If the input is:

2
35 21

then the output is:

56


public class WeightListSum {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<Integer> weightList = new ArrayList<Integer>();
        int numWeights;
		int sumOfWeights;
        int i;
      
        numWeights = scnr.nextInt();
        for (i = 0; i < numWeights; ++i) {
            weightList.add(scnr.nextInt());
        }

        sumOfWeights = 0;
        for (i = 0; i < weightList.size(); ++i) {
            sumOfWeights += weightList.get(i);
        }

        System.out.println(sumOfWeights);
    }
}

Integer numWeights is read from input. Then, numWeights integers are read from input and inserted at the end of weightList. If an element is at an odd index in weightList, negate the element.

Ex: If the input is:

2
47 33

then the output is:

47 -33 

Note: Index i is odd if i % 2 != 0.

public class WeightListModification {
   public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<Integer> weightList = new ArrayList<Integer>();
        int numWeights;
        int i;
      
        numWeights = scnr.nextInt();
        for (i = 0; i < numWeights; ++i) {
            weightList.add(scnr.nextInt());
        }

        for (i = 0; i < numWeights; ++i) {
            if( i % 2 != 0) {
                weightList.set(i, weightList.get(i) * -1);
            }
        }

        for (i = 0; i < weightList.size(); ++i) {
            System.out.print(weightList.get(i) + " ");
        }

        System.out.println();
    }
}

//Example of the implmentation of a backend comment system
public class Review {
   private int rating = -1;
   private String comment = "NoComment";
   
   public void setRatingAndComment(int revRating, String revComment) {
      rating = revRating;
      comment = revComment;
   }
   public int getRating() { return rating; }
   public String getComment() { return comment; }
}


public class ReviewSystem {
 
    public static void main(String [] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<Review> reviewList = new ArrayList<Review>();
        Review currReview;
        int currRating;
        String currComment;
        int i;
   
        System.out.println("Type rating + comments. To end: -1");
        currRating = scnr.nextInt();
        while (currRating >= 0) {
           currReview = new Review();
           currComment = scnr.nextLine(); // Gets rest of line
           currReview.setRatingAndComment(currRating, currComment);
           reviewList.add(currReview);
           currRating = scnr.nextInt();
        }
   
        // Output all comments for given rating
        System.out.println();
        System.out.println("Type rating. To end: -1");
        currRating = scnr.nextInt(); 

       while (currRating != -1) {
            for (i = 0; i < reviewList.size(); ++i) {
                currReview = reviewList.get(i);

                if (currRating == currReview.getRating()) {
                   System.out.println(currReview.getComment());
                }
            }

            currRating = scnr.nextInt();
        }
    }
}

public class Restaurant {
    private String name;
    private Reviews reviews = new Reviews();
   
    public void setName(String restaurantName) {
        name = restaurantName;
    }
      
    public void readAllReviews(Scanner scnr) {
        System.out.println("Type ratings + comments. To end: -1");
        reviews.inputReviews(scnr);
    }
   
    public void printCommentsByRating() { 
        int i;
      
        System.out.println("Comments for each rating level: ");
        for (i = 1; i <= 5; ++i) {
            System.out.println(i + ":");
            reviews.printCommentsForRating(i);
        }
    }
}

public class RestaurantReviews {
 
    public static void main (String [] args) {
        Scanner scnr = new Scanner(System.in);
        Restaurant ourPlace = new Restaurant();
        String currName;
   
        System.out.println("Type restaurant name: ");
        currName = scnr.nextLine();
        ourPlace.setName(currName);
        System.out.println();
   
        ourPlace.readAllReviews(scnr);
        System.out.println();
   
        ourPlace.printCommentsByRating();
    }
}

//The program first reads integer lectureCount from input, representing the number of pairs of inputs to be read. Each pair has a 
//string and an integer, representing the lecture's topic and duration, respectively. One Lecture object is created for each pair 
//and added to ArrayList lectureList. Output "Smallest lecture duration: ", followed by the smallest duration of all the Lecture 
//objects and a newline.
//Ex: If the input is:

//3
//Travel 50 Education 55 Culture 25
//then the output is:Smallest lecture duration: 25 Note: The ArrayList has at least one element.

public class Lecture {
    private String topic;
    private int duration;

    public void setDetails(String topic, int duration) {
        this.topic = topic;
        this.duration = duration;
    }

	public int getDuration() {
	    return duration;
	}
}

public class Lectures {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<Lecture> lectureList = new ArrayList<Lecture>();
        Lecture currLecture;
        String currTopic;
        int currDuration;
		int smallestDuration;
        int lectureCount;
        int i;

        lectureCount = scnr.nextInt();
        for (i = 0; i < lectureCount; ++i) {
            currTopic = scnr.next();
            currDuration = scnr.nextInt();

            currLecture = new Lecture();
            currLecture.setDetails(currTopic, currDuration);
            lectureList.add(currLecture);
        }
		
		smallestDuration = lectureList.get(0).getDuration();

        for (i = 0; i < lectureCount; ++i) {
            if(lectureList.get(i).getDuration() < smallestDuration){
                smallestDuration = lectureList.get(i).getDuration();;

            }    
        }
            
        System.out.println("Smallest lecture duration: " + smallestDuration);

    }
}

import java.util.ArrayList;

public class IntegerManager {
    public static void printItems(ArrayList<Integer> numsList) {
      int i;

      System.out.print("items:");

      for (i = 0; i < numsList.size(); ++i) {
         System.out.print(" " + numsList.get(i));
      }

      System.out.println();
    }

    public static void main(String[] args) {
        int i;
        ArrayList<Integer> intList = new ArrayList<Integer>();

        for (i = 0; i < 4; ++i) {
            intList.add(i);
        }

        printItems(intList);

        intList.add(2, 5);
        printItems(intList);

        intList.remove(1);
        printItems(intList);
    }
}

public class Purchase {
   private char option;
   private String food;

	public void readDetails(Scanner scnr) {
		option = scnr.next().charAt(0);
		food = scnr.next();
	}

   public void print() {
      System.out.println("Purchase option: " + option + ", Food: " + food);
   }
}

public class Purchases {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<Purchase> purchaseList = new ArrayList<Purchase>();
        Purchase currPurchase;
        int entryNumber;
        int i;
        entryNumber = scnr.nextInt();

        while(entryNumber != -99){
            currPurchase = new Purchase();
            currPurchase.readDetails(scnr);
            purchaseList.add( currPurchase );
   
            entryNumber = scnr.nextInt();
        }


        for (i = 0; i < purchaseList.size(); ++i) {
            currPurchase = purchaseList.get(i);
            currPurchase.print();
        }
    }
}

public class Visitor {
    private static boolean debugMode = false;
    private String name;
   
    public Visitor(String newName) {
        if (debugMode) {
			System.out.println("Debug mode ON: Visitor's constructor called");
		}

		name = newName;
    }
	
	public void print() {
		if (debugMode) {
			System.out.println("Debug mode ON: print() called");
		}
		System.out.println("Visitor is " + name + ".");
	}

    public static void toggleDebugMode() {
        debugMode = !debugMode;
    }


}

// The program first reads integer licenseCount from input, representing the number of pairs of inputs to be read. Each pair has a string 
// and an integer, representing the license's state and fee, respectively. One License object is created for each pair and added to 
// ArrayList licenseList. Write the findAverageLicenseFee() method in the Directory class to return the average fee of all the License 
// objects as an integer. Ex: If the input is: 4
// WI 123 SC 125 OR 215 CA 145

// then the output is:

// Average license fee: 152

// Note: The ArrayList has at least one element.

public class LicenseSystem {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        Directory directory = new Directory();

        directory.inputLicenses(scnr);
        System.out.println("Average license fee: " + directory.findAverageLicenseFee());
    }
}

public class License {
    private String state;
    private int fee;

    public void setDetails(String state, int fee) {
        this.state = state;
        this.fee = fee;
    }

    public int getFee() {
        return fee;
    }
}

public class Directory {
    private ArrayList<License> licenseList = new ArrayList<License>();

    public void inputLicenses(Scanner scnr) {
        License currLicense;
        String currState;
        int currFee;
        int licenseCount;
        int i;

        licenseCount = scnr.nextInt();
        for (i = 0; i < licenseCount; ++i) {
            currState = scnr.next();
            currFee = scnr.nextInt();
            currLicense = new License();
            currLicense.setDetails(currState, currFee);
            licenseList.add(currLicense);
        }
    }

    public int findAverageLicenseFee(){
        int avgFee;
        int total = 0;

        for(int i = 0; i < licenseList.size(); i++ ){
            total +=  licenseList.get(i).getFee();
        }

        avgFee = total / licenseList.size();
 
        return avgFee;
    }

}

// Write the inputPurchases() method in the Deliveries class. Within inputPurchases(), repeat the following until currPurchase's readDetails() method returns false:
//Assign currPurchase with a new Purchase object. Use currPurchase's readDetails() method to read each pair of inputs, integer quantity and string food.
//If currPurchase's readDetails() method returns true, append currPurchase to ArrayList purchaseList. Ex: If the input is 7 mango 2 ginger 15 potato -99, then the output is:

// Purchase quantity: 7, Food: mango
// Purchase quantity: 2, Food: ginger
// Purchase quantity: 15, Food: potato

import java.util.Scanner;
import java.util.ArrayList;

public class PurchaseSystem {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        Deliveries deliveries = new Deliveries();

        deliveries.inputPurchases(scnr);
        deliveries.printPurchases();
    }
}

public class Deliveries {
   private ArrayList<Purchase> purchaseList = new ArrayList<Purchase>();

    public void inputPurchases(Scanner scnr) {
        Purchase currPurchase;
        while (true) {
            currPurchase = new Purchase();
            if (!currPurchase.readDetails(scnr)) {
                break; // Exit if readDetails returns false
            }
            purchaseList.add(currPurchase);
        }
    }

   public void printPurchases() {
      Purchase currPurchase;
      int i;

      for (i = 0; i < purchaseList.size(); ++i) {
         currPurchase = purchaseList.get(i);
         currPurchase.print();
      }
   }
}

public class Purchase {
    private int quantity;
    private String food;

	public boolean readDetails(Scanner scnr) {
		int newQuantity;
		
		newQuantity = scnr.nextInt();
		if (newQuantity == -99) {
			return false;
		}
		else {
			quantity = newQuantity;
			food = scnr.next();
			return true;
		}
	}

    public void print() {
        System.out.println("Purchase quantity: " + quantity + ", Food: " + food);
    }
}

public class Triangle {
    private double base;
    private double height;
   
    public void setBase(double userBase){
        base = userBase;
    }
    public void setHeight(double userHeight) {
        height = userHeight;
    }
   
    public double getArea() {
        double area = 0.5 * base * height;
        return area;
    }
   
    public void printInfo() {
        System.out.printf("Base: %.2f\n", base);
        System.out.printf("Height: %.2f\n", height);
        System.out.printf("Area: %.2f\n", getArea());
    }
}

public class TriangleArea {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
      
        Triangle triangle1 = new Triangle();
        Triangle triangle2 = new Triangle();

        triangle1.setBase(scnr.nextDouble() );
        triangle1.setHeight(scnr.nextDouble());
    
        triangle2.setBase(scnr.nextDouble());
        triangle2.setHeight(scnr.nextDouble());
      
        System.out.println("Triangle with smaller area:");
        
      
        // TODO: Determine smaller triangle (use getArea())
        //       and output smaller triangle's info (use printInfo())
        if(triangle1.getArea() < triangle2.getArea()){
            triangle1.printInfo();
        }else if(triangle2.getArea() < triangle1.getArea()){
            triangle2.printInfo();
        }
    }
}

// Given main(), define the Team class (in file Team.java). For class method getWinPercentage(), the formula is: wins / (wins + losses). Note: Use 
// casting to prevent integer division. For class method printStanding(), output the win percentage of the team with two digits after the decimal 
// point and whether the team has a winning or losing average. A team has a winning average if the win percentage is 0.5 or greater.

// Ex: If the input is:

// Ravens
// 13
// 3 
// where Ravens is the team's name, 13 is the number of team wins, and 3 is the number of team losses, the output is:

// Win percentage: 0.81
// Congratulations, Team Ravens has a winning average!
// Ex: If the input is:

// Angels
// 80
// 82
// the output is:

// Win percentage: 0.49
// Team Angels has a losing average.

public class WinningTeam {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
      
        Team team = new Team();
      
        String name = scnr.next();
        int wins = scnr.nextInt();
        int losses = scnr.nextInt();
      
        team.setName(name);
        team.setWins(wins);
        team.setLosses(losses);
      
        team.printStanding();
    }
}

public class Team {
   
    private String name;
    private int wins;
    private int losses;
   
    public void setName(String name){
        this.name = name;
    }

    public void setWins(int wins){
        this.wins = wins;
    }

    public void setLosses(int losses) {
        this.losses = losses;
    }
   
    public String getName() {
        return name;
    }
   
    public int getWins() {
        return wins;
    }

    public int getLosses() {
        return losses;
    }  
   
    public double getWinPercentage() {
        return (double) wins / (wins + losses);
    }
   
  
    public void printStanding() {
        System.out.print("Win percentage: ");
        System.out.printf("%.2f", getWinPercentage());
        System.out.println();

        if( wins > losses){
            System.out.println("Congratulations, Team " + name + " has a winning average!");
        } else if (wins < losses){
            System.out.println("Team " + name + " has a losing average.");
        }
    }
   
}

// Given main(), complete the FoodItem class (in file FoodItem.java) with constructors to initialize each food item. The default constructor should initialize
// the name to "Water" and all other fields to 0.0. The second constructor should have four parameters (food name, grams of fat, grams of carbohydrates, and 
// grams of protein) and should assign each private field with the appropriate parameter value.

// Ex: If the input is: Water  then the output is:

// Nutritional information per serving of Water:
//   Fat: 0.00 g
//   Carbohydrates: 0.00 g
//   Protein: 0.00 g
// Number of calories for 1.00 serving(s): 0.00
// Ex: If the input is:

// M&M's
// 10.0
// 34.0
// 2.0
// 3.0
// where M&M's is the food name, 10.0 is the grams of fat, 34.0 is the grams of carbohydrates, 2.0 is the grams of protein, and 3.0 is the number of servings, 
// the output is:

// Nutritional information per serving of M&M's:
//   Fat: 10.00 g
//   Carbohydrates: 34.00 g
//   Protein: 2.00 g
// Number of calories for 1.00 serving(s): 234.00
// Number of calories for 3.00 serving(s): 702.00

public class NutritionalInfo {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        FoodItem foodItem;
      
        String itemName = scnr.next();
        if(itemName.equals("Water") || itemName.equals("water")) {
            foodItem = new FoodItem();
         
            foodItem.printInfo();
            System.out.printf("Number of calories for %.2f serving(s): %.2f\n", 1.0, foodItem.getCalories(1.0));
        }
      
        else {
            double amountFat = scnr.nextDouble();
            double amountCarbs = scnr.nextDouble();
            double amountProtein = scnr.nextDouble();
      
            foodItem = new FoodItem(itemName, amountFat, amountCarbs, amountProtein);
      
            double numServings = scnr.nextDouble();
                                                      
            foodItem.printInfo();
            System.out.printf("Number of calories for %.2f serving(s): %.2f\n", 1.0, foodItem.getCalories(1.0));
                             
            System.out.printf("Number of calories for %.2f serving(s): %.2f\n", numServings, foodItem.getCalories(numServings));
        }
    }
}

public class FoodItem {
    private String name;
    private double fat;
    private double carbs;
    private double protein;
   
    public FoodItem(){
        name = "Water";
        fat = 0.00;
        carbs = 0.00;
        protein = 0.00; 
    }
   
  
    public FoodItem(String name, double fat, double carbs, double protein){
        this.name = name;
        this.fat = fat;
        this.carbs = carbs;
        this.protein = protein; 
    }


    public String getName() {
        return name;
    }
   
    public double getFat() {
        return fat;
    }
   
    public double getCarbs() {
        return carbs;
    }
   
    public double getProtein() {
        return protein;
    }
   
    public double getCalories(double numServings) {
          // Calorie formula
        double calories = ((fat * 9) + (carbs * 4) + (protein * 4)) * numServings;
        return calories;
    }
   
    public void printInfo() {
        System.out.println("Nutritional information per serving of " + name + ":");
        System.out.printf("  Fat: %.2f g\n", fat);
        System.out.printf("  Carbohydrates: %.2f g\n", carbs);
        System.out.printf("  Protein: %.2f g\n", protein);
    }
}

public class RackLinkedList {   
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      RackNode headObj;
      RackNode firstRack;
      RackNode secondRack;
      RackNode currRack;
      String color1;
      String color2;

      color1 = scnr.next();
      color2 = scnr.next();

      headObj = new RackNode("color");
   

      firstRack = new RackNode(color1);
      headObj.insertAfter(firstRack);

      secondRack = new RackNode(color2);
      firstRack.insertAfter(secondRack);


      currRack = headObj;
      while (currRack != null) {
         currRack.printNodeData();
         currRack = currRack.getNext();
      }
   }
}


public class RabbitLinkedList {   
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      RabbitNode headRabbit = null;
      RabbitNode currRabbit = null;
      RabbitNode lastRabbit = null;
      int rabbitCount;
      int inputValue;
      int i;

      rabbitCount = scnr.nextInt();
   
      headRabbit = new RabbitNode(rabbitCount);
      lastRabbit = headRabbit;
   

   for (i = 0; i < rabbitCount ; i++) {
   currRabbit = new RabbitNode(scnr.nextInt());
   lastRabbit.insertAfter(currRabbit);
   lastRabbit = currRabbit; 
 }

      currRabbit = headRabbit;
      while (currRabbit != null) {
         currRabbit.printNodeData();
         currRabbit = currRabbit.getNext();
      }
   }
}



class LengthNode {
   private int lengthVal;
   private LengthNode nextNodeRef;

    public LengthNode(int lengthInit) {
        this.lengthVal = lengthInit;
        this.nextNodeRef = null;
    }

    public void insertAfter(LengthNode nodeLoc) {
        LengthNode tmpNext = null;

        tmpNext = this.nextNodeRef;
        this.nextNodeRef = nodeLoc;
        nodeLoc.nextNodeRef = tmpNext;
    }

    public LengthNode getNext() {
        return this.nextNodeRef;
    }

    public int getNodeData() {
        return this.lengthVal;
    }
}


public class LengthLinkedList {   
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        LengthNode headLength = null;
        LengthNode currLength = null;
        LengthNode lastLength = null;
        int count;
        int inputValue;
        int i;
      
        count = scnr.nextInt();
   
        headLength = new LengthNode(count);
        lastLength = headLength;

        for (i = 0; i < count; ++i) {
            inputValue = scnr.nextInt();
      
            currLength = new LengthNode(inputValue);
      
            lastLength.insertAfter(currLength);
            lastLength = currLength;
        }

        lastLength = headLength;
        for(i = 0; i <= count; i++) {
            if(lastLength.getNodeData() < 0) {
                System.out.println(lastLength.getNodeData() + " may be a wrong entry.");
            } 

            lastLength = lastLength.getNext();
        }


    }
}

public class OutputNotation {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        char seatLetter;
		int amountChanged;
		double width;
      
        seatLetter = scnr.next().charAt(0);
		amountChanged = scnr.nextInt();
		width = scnr.nextDouble();

        System.out.printf("%h%%\n", seatLetter );
        System.out.printf("%o%%\n", amountChanged );
        System.out.printf("%e%%\n", width );

      

    }
}

public class OutputFormatter {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int boxLength;
        double boxHeight;
      
        boxLength = scnr.nextInt();
        boxHeight = scnr.nextDouble();

        System.out.printf("%+07d\n", boxLength );
        System.out.printf("%-8.4f\n", boxHeight);



    }
}

public class OutputFormatter {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        String firstName;
      
        firstName = scnr.next();

        System.out.printf("%-6s Thompson\n", firstName);
    }
}

public class StringInputStream {
    public static void main (String [] args) {
        Scanner scnr = new Scanner(System.in);
        Scanner inSS = null;
        String userInput;
        String userMonth;
        int userDate;
        int userYear;

        userInput = scnr.nextLine();
        inSS = new Scanner(userInput);
     
        userMonth = inSS.next();
        userDate = inSS.nextInt();
        userYear = inSS.nextInt();

      

        System.out.println("Month: " + userMonth);
        System.out.println("Date: " + userDate);
        System.out.println("Year: " + userYear);
    }
}

public class StringStreamOutput {
    public static void main (String [] args) {
        Scanner scnr = new Scanner(System.in);
        String userItem;

        StringWriter itemCharStream = new StringWriter();
        PrintWriter itemsOSS = new PrintWriter(itemCharStream);

        System.out.println("Enter items (type Exit to quit):");
        userItem = scnr.next();

        while (!userItem.equals("Exit")) {
          
            System.out.print(userItem + " ");

            userItem = scnr.next();
        }

        userItem = itemCharStream.toString();
        System.out.println(userItem);
    }
}

public class LetterDataProcessor {
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        String dataFileName;
        char letterGrade;
        FileInputStream gradeStream = null;
        Scanner inFS = null;


        dataFileName = scnr.next();

        gradeStream = new FileInputStream(dataFileName);
        inFS = new Scanner(gradeStream);

        letterGrade = inFS.next().charAt(0);
        System.out.println(letterGrade);

        gradeStream.close();
    }
}

public class DillDataProcessor {
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        String nameOfFile;
        double dillWeight;
        FileInputStream groceryInStream = null;
        Scanner inFS = null;

        nameOfFile = scnr.next();

        groceryInStream = new FileInputStream(nameOfFile );
        inFS = new Scanner(groceryInStream );



        dillWeight = inFS.nextDouble();
        System.out.println(dillWeight);

        groceryInStream.close();
    }
}

public class FurnitureDataReader {
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        String dataFileName;
        int deskCount;
        FileInputStream furnitureFStream = null;
        Scanner deskFS = null;

        dataFileName = scnr.next();

        furnitureFStream = new FileInputStream(dataFileName);
        deskFS = new Scanner(furnitureFStream);
        deskCount =  deskFS.nextInt();
        System.out.println(deskCount);

        furnitureFStream.close(); // Close the file stream

        // Attempt to access the file for testing purpose
        furnitureFStream.read();
    }
}

public class FileReading {
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        FileInputStream fileByteStream = null;
        Scanner dataFS = null;
        String nameOfFile;
        int mattressCount;

        nameOfFile = scnr.next();

        fileByteStream = new FileInputStream(nameOfFile);
        dataFS = new Scanner(fileByteStream);

        while (dataFS.hasNextInt()) {
            mattressCount = dataFS.nextInt();
            System.out.println(mattressCount);
        }
      
        if (dataFS.hasNext()) {
            System.out.println("Reading stopped at " + dataFS.next());
        }
        else {
            System.out.println("Reached end of file");
        }

        fileByteStream.close();
    }
}

public class PearDataProcessor {
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        String fileName;
        double pearQuantity;
        FileOutputStream pearFStream = null;
        PrintWriter pearDataFS = null; 

        fileName = scnr.next();
        pearFStream = new FileOutputStream(fileName);
        pearDataFS = new PrintWriter(pearFStream);

        pearQuantity = scnr.nextDouble();

        pearDataFS.println(pearQuantity + " pounds of pears");
        pearDataFS.close();
    }
}

public class OrangeDataProcessor {
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        String nameOfFile;
        String orangePurchase;
        FileOutputStream outStream = null;
        PrintWriter outFS = null;      

        nameOfFile = scnr.next();
        outStream = new FileOutputStream(nameOfFile);
        outFS = new PrintWriter(outStream);
      


        orangePurchase = scnr.next();

        outFS.println(orangePurchase + " ordered oranges");
        outFS.close();
    }
}

public class FileOutput {
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        FileOutputStream fileStream = null;
        PrintWriter shoerackOutFS = null;
        int shoerackCount;
        String friendName;

        shoerackCount = scnr.nextInt();
        friendName = scnr.next();
  
        fileStream = new FileOutputStream("output.txt");
        shoerackOutFS = new PrintWriter(fileStream);

        shoerackOutFS.println("To purchase:");
        shoerackOutFS.println("+ # + # -");
        shoerackOutFS.println(shoerackCount + " shoeracks for " + friendName);
        shoerackOutFS.println("+ # + # -");

        shoerackOutFS.close();
    }
}

//book system 
public class Book{

    private String bookTitle;
    private String bookAuthor;
    private long bookISBN;

    public Book() {
   	    bookTitle = "";
   	    bookAuthor = "";
   	    bookISBN = 0;
    }

    public Book(String userBookTitle, String userBookAuthor, long userBookISBN) {
   	    bookTitle = userBookTitle;
   	    bookAuthor = userBookAuthor;
   	    bookISBN = userBookISBN;
    }
   
   public long getBookISBN() {
	    return bookISBN;
    }

    public void printInfo(){
   	    System.out.println("Title: " + bookTitle);
        System.out.println("Author: " + bookAuthor);
        System.out.println("ISBN: " + bookISBN);
    }
}

public class ArrayListLibrary {
   // ArraryList library
   public ArrayList<Book> library; 
   
    public ArrayListLibrary() {
        library = new ArrayList<Book>();
    }
   
    public int insertSorted(Book newBook, int counter) {
        Book currBook;
      
        // Add an empty element at end of list
        library.add(null);
      
        // Loop through elements starting at the end
        for (int i = library.size() - 2; i >=0; --i) {
            currBook = library.get(i);
         
            // If the current book's ISBN is larger than newBook's ISBN, shift
            // the current book down 1, count shift operation
            if(currBook.getBookISBN() > newBook.getBookISBN()){
                library.set(i+1, currBook);
                ++counter;
            }
      
            // Otherwise, place newBook at the next location (empty slot),
            // count insert operation
            else {
                library.set(i+1, newBook);
                ++counter;
                return counter;
            }
        }
      
        // If we get to the top of the list, place newBook on top
        library.set(0, newBook);
        ++counter;
      
        return counter;
    }
   
    public void printLibrary() {
        for (int i = 0; i < library.size(); ++i) {
            library.get(i).printInfo();
            System.out.println();
        }
    } 
}

public class BookNode {
    private String bookTitle;
    private String bookAuthor;
    private long bookISBN;
    private BookNode nextNodePtr; // Reference to the next node                                   

    public BookNode() {
        bookTitle = "";
        bookAuthor = "";
        bookISBN = 0;
        nextNodePtr = null;
    }

    // Constructor                                                                                     
    public BookNode(String bookTitleInit, String bookAuthorInit, long bookISBNInit) {
        this.bookTitle = bookTitleInit;
        this.bookAuthor = bookAuthorInit;
        this.bookISBN = bookISBNInit;
        this.nextNodePtr = null;
    }

    // Constructor                                                                                     
    public BookNode(String bookTitleInit, String bookAuthorInit, long bookISBNInit, BookNode nextLoc) {
        this.bookTitle = bookTitleInit;
        this.bookAuthor = bookAuthorInit;
        this.bookISBN = bookISBNInit;
        this.nextNodePtr = nextLoc;
    }

    // insertAfter
    public void insertAfter(BookNode nodeLoc) {
        BookNode tmpNext;

        tmpNext = this.nextNodePtr;
        this.nextNodePtr = nodeLoc;
        nodeLoc.nextNodePtr = tmpNext;
    }
   
    //setNext
    public void setNext(BookNode nodeLoc) {
        this.nextNodePtr = nodeLoc;
    }
   
    // Get location pointed by nextNodePtr                                                             
    public BookNode getNext() {
        return this.nextNodePtr;
    }
   
    public long getBookISBN() {
        return this.bookISBN;
    }

    // Print book information
    public void printBookInfo() {
        System.out.println("Title: " + this.bookTitle);
        System.out.println("Author: " + this.bookAuthor);
        System.out.println("ISBN: " + this.bookISBN);
    }
}

public class LinkedListLibrary {
    //Linked list nodes
    BookNode headNode;                                              
    BookNode lastNode;
   
   LinkedListLibrary() {
        // Front of nodes list                                                                         
        headNode = new BookNode();
        lastNode = headNode;
    }
   
   public int insertSorted(BookNode newNode, int counter) {
        BookNode currNode, nextNode;
  
        // Special case for head node
        if (headNode == null || headNode.getBookISBN() >= newNode.getBookISBN()) { 
            newNode.insertAfter(headNode);
            headNode = newNode; 
        } 
        else { 
            // Locate the node before insertion point
            currNode = headNode; 
  
            while (currNode.getNext() != null && currNode.getNext().getBookISBN() < newNode.getBookISBN()) {
                currNode = currNode.getNext();
            }

            newNode.setNext(currNode.getNext());
            currNode.insertAfter(newNode);
        } 
      
        ++counter;
        return counter;
    }
   
    public void printLibrary() {
        BookNode currNode;
         
        currNode = headNode.getNext();
        while (currNode != null) {
            currNode.printBookInfo();
            System.out.println();
            currNode = currNode.getNext();
        }
    }
}

public class Library {
   
    public static void fillLibraries(LinkedListLibrary linkedListLibrary, ArrayListLibrary arrayListLibrary) throws IOException {
        FileInputStream fileByteStream = null; // File input stream
        Scanner inFS = null;                   // Scanner object
        int linkedListOperations = 0;
        int arrayListOperations = 0;
      
        BookNode currNode;
        Book tempBook;
      
        String bookTitle;
        String bookAuthor;
        long bookISBN;
      
        // Try to open file
        fileByteStream = new FileInputStream("Books.txt");
        inFS = new Scanner(fileByteStream);

        while (inFS.hasNextLine()) {
            bookTitle = inFS.nextLine();
            bookISBN = inFS.nextLong();
            inFS.nextLine();
            bookAuthor = inFS.nextLine();
         
            // Insert into linked list
            currNode = new BookNode(bookTitle, bookAuthor, bookISBN);
            linkedListOperations = linkedListLibrary.insertSorted(currNode, linkedListOperations);
            linkedListLibrary.lastNode = currNode;
         
            // Insert into ArrayList
            tempBook = new Book(bookTitle, bookAuthor, bookISBN);
            arrayListOperations = arrayListLibrary.insertSorted(tempBook, arrayListOperations);
        }
      
        fileByteStream.close(); // close() may throw IOException if fails
    }
       
    public static void main (String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        int linkedListOperations = 0;
        int arrayListOperations = 0;
      
        // Create libraries
        LinkedListLibrary linkedListLibrary = new LinkedListLibrary();
        ArrayListLibrary arrayListLibrary = new ArrayListLibrary();
      
        // Fill libraries with 100 books
        fillLibraries(linkedListLibrary, arrayListLibrary);
      
        // Create new book to insert into libraries
        BookNode currNode;
        Book tempBook;
      
        String bookTitle;
        String bookAuthor;
        long bookISBN;
      
        bookTitle = scnr.nextLine();
        bookISBN = scnr.nextLong();
        scnr.nextLine();
        bookAuthor = scnr.nextLine();
       
        // Insert into linked list
        currNode = new BookNode(bookTitle, bookAuthor, bookISBN);
        linkedListOperations += linkedListLibrary.insertSorted(currNode, linkedListOperations);  
        linkedListLibrary.lastNode = currNode;
      
        // Insert into ArrayList
        tempBook = new Book(bookTitle, bookAuthor, bookISBN);
        arrayListOperations += arrayListLibrary.insertSorted(tempBook, arrayListOperations);
      
        System.out.println("Number of linked list operations: " + linkedListOperations );
        System.out.println("Number of ArrayList operations: " + arrayListOperations );
    }
}

public class DateParser {
    public static int getMonthAsInt(String monthString) {
        int monthInt;

        // Java switch/case statement                                                                
        switch (monthString) {
            case "January": 
                monthInt = 1; 
                break;
            case "February": 
                monthInt = 2; 
                break;
            case "March": 
                monthInt = 3; 
                break;
            case "April": 
                monthInt = 4; 
                break;
            case "May": 
                monthInt = 5; 
                break;
            case "June": 
                monthInt = 6; 
                break;
            case "July": 
                monthInt = 7; 
                break;
            case "August": 
                monthInt = 8; 
                break;
            case "September": 
                monthInt = 9; 
                break;
            case "October": 
                monthInt = 10; 
                break;
            case "November": 
                monthInt = 11; 
                break;
            case "December": 
                monthInt = 12; 
                break;
            default: 
               monthInt = 0;
        }
      
        return monthInt;
    }

    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      String input = scnr.nextLine();
      int month;
      int day = 0;
      int year = 0;
      int firstIndex;
       int lastIndex;
      
        while (day != -1 || year != -1){
            firstIndex = input.indexOf(' ');
            lastIndex = input.lastIndexOf(' ');

            String regex = "^(January|February|March|April|May|June|July|August|September|October|November|December) \\d{1,2}, \\d{4}$";
            Pattern pattern = Pattern.compile(regex);

            if (pattern.matcher(input).matches()) {
                month = getMonthAsInt( input.substring(0, firstIndex).replace(" ", "") );
                day = Integer.parseInt( input.substring(firstIndex, lastIndex).replaceAll("[,\\s]+", "") );
                year = Integer.parseInt( input.substring(lastIndex).replace(" ", "") );
                
                System.out.println(month + "-" + day + "-" + year);
            } 

            input = scnr.nextLine();
            month = 0;
            day = 0;
            year = 0;
        }

        scnr.close();
    }
}

//Write a program that reads the student information from a tab separated values (tsv) file. The program then creates a text file 
//that records the course grades of the students. Each row of the tsv file contains the Last Name, First Name, Midterm1 score, 
//Midterm2 score, and the Final score of a student. A sample of the student information is provided in StudentInfo.tsv. Assume 
//the number of students is at least 1 and at most 20. Assume also the last names and first names do not contain whitespaces.

// Read the file name of the tsv file from the user.
// Open the tsv file and read the student information.
// Compute the average exam score of each student.
// Assign a letter grade to each student based on the average exam score in the following scale: A: 90 =< x B: 80 =< x < 90 C: 70 =< x < 80 D: 60 =< x < 70 F: x < 60
// Compute the average of each exam.
// Output the last names, first names, exam scores, and letter grades of the students into a text file named report.txt. Output one student per row and separate the values with a tab character.
// Output the average of each exam, with two digits after the decimal point, at the end of report.txt. Hint: Use the precision sub-specifier to format the output.

public class LabProgram {
    private static String calculateGrade(double score){
        if (score < 0 || score > 100) {
            throw new IllegalArgumentException("Score must be between 0 and 100.");
        }
        
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    }

    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);  // Scanner object
        String fileName;
        FileInputStream fileByteStream = null; // File input stream
        FileOutputStream fileStream = null;   //  File output stream
        PrintWriter studentOutFS = null;   //Print Writer
        String lastName;
        String firstName;
        int midterm1;
        int midterm2;
        int finalScore;
        String grade;
        int count = 0;
        double mid1Total = 0.00;
        double mid2Total = 0.00;
        double finalTotal = 0.00; 
        double avg1; //midterm 1 average
        double avg2; //midterm 2 average
        double avg3; //final average

        fileName = scnr.next();

          // file control
        fileByteStream = new FileInputStream(fileName); // opens file based on user input
        scnr = new Scanner(fileByteStream); // feeds/reads file into scanner
        fileStream = new FileOutputStream("report.txt"); // creates or opens file to write to 
        studentOutFS = new PrintWriter(fileStream); // take output file to write to
      
        while(scnr.hasNext()){
          lastName = scnr.next();
          firstName = scnr.next();
          midterm1 = scnr.nextInt();
          midterm2 = scnr.nextInt();
          finalScore = scnr.nextInt();

          grade = calculateGrade( (midterm1 + midterm2 + finalScore) / 3.0 );


          studentOutFS.print(lastName + "	" + firstName + "	" + midterm1);
          studentOutFS.println("	" + midterm2 + "	" + finalScore + "	" + grade);

          mid1Total += midterm1;
          mid2Total += midterm2;
          finalTotal += finalScore;
          count++;

        }

        avg1 = (mid1Total / count); //midterm 1 average
        avg2 = (mid2Total / count); //midterm 2 average
        avg3 = (finalTotal / count); //final average

        studentOutFS.println();
        studentOutFS.printf("Averages: Midterm1 %.2f", avg1) ;
        studentOutFS.printf(", Midterm2 %.2f", avg2) ;
        studentOutFS.printf(", Final %.2f", avg3) ;
        studentOutFS.println();
      
         //clean up
        fileByteStream.close(); //nessecary or file won't save
        studentOutFS.close(); // nessecary for resources
      
    }
}

public class AnimalData {
    private int ageYears;
    private String fullName;

    public void setName(String givenName) {
        fullName = givenName;
    }

    public void setAge(int numYears) {
        ageYears = numYears;
    }


    public void printAll() {
        System.out.print("Name: "  + fullName);
        System.out.print(", Age: " + ageYears);
    }
}

public class PetData extends AnimalData {
    private int idNum;

    public void setID(int petID) {
        idNum = petID;
    }
    
    public void printAll() {
       super.printAll();
       System.out.print(", ID: " + idNum);
    }
}

public class BasicDerivedOverride {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        PetData userPet = new PetData();
        String userName;
        int userAge;
        int userID;

        userName = scnr.next();
        userAge = scnr.nextInt();
        userID = scnr.nextInt();

        userPet.setName(userName);
        userPet.setAge (userAge);
        userPet.setID  (userID);
        userPet.printAll();
        System.out.println("");
    }
}

public class CourseInformation {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);

        Course myCourse = new Course();
        OfferedCourse myOfferedCourse = new OfferedCourse();

        String courseNumber, courseTitle;
        String oCourseNumber, oCourseTitle, instructorName, location, classTime;

        courseNumber = scnr.nextLine();
        courseTitle = scnr.nextLine();

        oCourseNumber =  scnr.nextLine();
        oCourseTitle =  scnr.nextLine();
        instructorName = scnr.nextLine();
        location = scnr.nextLine();
        classTime = scnr.nextLine();

        myCourse.setCourseNumber(courseNumber);
        myCourse.setCourseTitle(courseTitle);
        myCourse.printInfo();

        myOfferedCourse.setCourseNumber(oCourseNumber);
        myOfferedCourse.setCourseTitle(oCourseTitle);
        myOfferedCourse.setInstructorName(instructorName);
        myOfferedCourse.setLocation(location);
        myOfferedCourse.setClassTime(classTime);
        myOfferedCourse.printInfo();

        System.out.println("   Instructor Name: " + myOfferedCourse.getInstructorName());
        System.out.println("   Location: " + myOfferedCourse.getLocation());
        System.out.println("   Class Time: " + myOfferedCourse.getClassTime());
    }
}

public class Course{
   
    String courseNumber;
    String courseTitle;

     
    public void setCourseNumber(String courseNumber){
        this.courseNumber = courseNumber;
    }
 
    public void setCourseTitle(String courseTitle){
        this.courseTitle = courseTitle;
    }
     

    public String getCourseNumber(){
        return courseNumber;
    } 

    public String getCourseTitle(){
        return courseTitle;
    }

    public void printInfo(){
        System.out.println("Course Information:");
        System.out.println("   Course Number: " + courseNumber);
        System.out.println("   Course Title: " + courseTitle);
    }
}

public class OfferedCourse extends Course {

    String instructorName;
    String location;
    String classTime;
  
    public void setInstructorName(String instructorName){
        this.instructorName = instructorName;
    }

    public void setLocation(String location){
        this.location = location;
    }

    public void setClassTime(String classTime){
        this.classTime = classTime;
    }

   
    public String getInstructorName(){
        return instructorName;
    } 

    public String getLocation(){
        return location;
    }

    public String getClassTime(){
        return classTime;
    }

}

public class BookInformation {
   public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);

      Book myBook = new Book();
      Encyclopedia myEncyclopedia = new Encyclopedia();

        String title, author, publisher, publicationDate;
        String eTitle, eAuthor, ePublisher, ePublicationDate, edition;
        int numPages;

        title = scnr.nextLine();
        author = scnr.nextLine();
        publisher = scnr.nextLine();
        publicationDate = scnr.nextLine();

        eTitle = scnr.nextLine();
        eAuthor = scnr.nextLine();
        ePublisher = scnr.nextLine();
        ePublicationDate = scnr.nextLine();
        edition = scnr.nextLine();
        numPages = scnr.nextInt();

        myBook.setTitle(title);
        myBook.setAuthor(author);
        myBook.setPublisher(publisher);
        myBook.setPublicationDate(publicationDate);
        myBook.printInfo();

        myEncyclopedia.setTitle(eTitle);
        myEncyclopedia.setAuthor(eAuthor);
        myEncyclopedia.setPublisher(ePublisher);
        myEncyclopedia.setPublicationDate(ePublicationDate);
        myEncyclopedia.setEdition(edition);
        myEncyclopedia.setNumPages(numPages);
        myEncyclopedia.printInfo();

    }
}

public class Book {

    protected String title;
    protected String author;
    protected String publisher;
    protected String publicationDate;

    public void setTitle(String userTitle) {
        title = userTitle;
    }

    public String getTitle() {
        return title;
    }

    public void setAuthor(String userAuthor) {
        author = userAuthor;
    }

    public String getAuthor(){
        return author;
    }

    public void setPublisher(String userPublisher) {
        publisher = userPublisher;
    }

    public String getPublisher() {
        return publisher;
    }

   public void setPublicationDate(String userPublicationDate) {
        publicationDate = userPublicationDate;
    }

    public String getPublicationDate() {
        return publicationDate;
    }

    public void printInfo() {
        System.out.println("Book Information: ");
        System.out.println("   Book Title: " + title);
        System.out.println("   Author: " + author);
        System.out.println("   Publisher: " + publisher);
        System.out.println("   Publication Date: " + publicationDate);
    }
}

public class Encyclopedia extends Book {
    String edition;
    int numPages;  
         
    public void setEdition(String edition){
        this.edition = edition;
    }

    public void setNumPages(int numPages){
        this.numPages = numPages;
    }
   
    public String getEdition(){
        return edition;
    }

    public int getNumPages(){
        return numPages; 
    }
   
    @Override 
    public void printInfo() {
        super.printInfo();
        System.out.println("   Edition: " + edition);
        System.out.println("   Number of Pages: " + numPages);
    }
   
}

public class ExpirationMonth {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        int expirationMonth;

        try {
           expirationMonth = scnr.nextInt();
            if ((expirationMonth < 1) || (expirationMonth > 12)) {
                throw new Exception("Value error: Value between 1 and 12 expected");
            }

            System.out.print("Valid input: ");
            System.out.println("Expiration month is " + expirationMonth);
        }
        catch (InputMismatchException excpt) {
            System.out.println("Input type error: Integer expected");
        }
        catch (Exception excpt) {
            System.out.println(excpt.getMessage());
        }

    }
}

public class CompletionPercentage {
    public static void main(String[] args) {
      Scanner scnr = new Scanner(System.in);
      int completionPercentage;
      int attemptsLeft = 2;

        while (attemptsLeft > 0) {
		    System.out.println("Attempts left: " + attemptsLeft);

            try {
                completionPercentage = scnr.nextInt();

                if ((completionPercentage < 0) || (completionPercentage > 100)) {
                    throw new Exception("Completion percentage must be between 0 and 100");
                }

                attemptsLeft = 0;
                System.out.print("Valid input: ");
                System.out.println("Completion percentage is " + completionPercentage);
            }
            catch (InputMismatchException excpt) {
                System.out.println("Unexpected input: The CompletionPercentage program quits");
                attemptsLeft = 0;

            }
            catch (Exception excpt) {
                System.out.println(excpt.getMessage());
                attemptsLeft -= 1;
            }
        

        }
    }
}

public class ReadInputFile {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        String rhubarbDataName;
        int rhubarbValue;

        rhubarbDataName = scnr.next();

        try (Scanner fileScanner = new Scanner(new FileInputStream(rhubarbDataName) )) {
            rhubarbValue = fileScanner.nextInt();
            System.out.println("Value read from " + rhubarbDataName + ": " + rhubarbValue);
        }
        catch (IOException e) {
            System.out.println(rhubarbDataName + ": File does not exist");
        }
    }
}

public class ReadInputFile {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        FileInputStream heightFStream;
        Scanner fileScanner = null;
        String heightDataFile;
		double heightVal;
		
		heightDataFile = scnr.next();
		
		try {
			heightFStream = new FileInputStream(heightDataFile);
			fileScanner = new Scanner(heightFStream);
			heightVal = fileScanner.nextDouble();
			System.out.println("Value read from " + heightDataFile + ": " + heightVal);
		}
        catch (FileNotFoundException exception) {
            System.out.println(heightDataFile + ": File not found");
        }
        finally {
            if (fileScanner != null) {
                fileScanner.close();
            }
        }
 
    }
}

public class WriteCountVolumeFile {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        PrintWriter volumeInWriter = null;
        String volumeDataFile;
        double volumeData;
        int dataCount = 0;

        volumeDataFile = scnr.next();
      
        try {
            volumeInWriter = new PrintWriter(new FileOutputStream(volumeDataFile));
            for (dataCount = 0; dataCount < 4; ++dataCount) {
                volumeData = scnr.nextDouble();
                volumeInWriter.println(volumeData);
            }
        }
        catch (Exception e) {
            System.out.println("Error!");
        }
        finally {
            if (volumeInWriter != null) {
                volumeInWriter.println(dataCount + " valid value(s) read");
                volumeInWriter.close();
            }
        }

    }
}

public class NameAgeChecker {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);

        String inputName;
        int age;
      
        inputName = scnr.next();
        while (!inputName.equals("-1")) {
            try {
                age = scnr.nextInt();
                System.out.println(inputName + " " + (age + 1));
            }
            catch (InputMismatchException e) {
                age = 0;
                System.out.println(inputName + " " + (age));
                inputName = scnr.nextLine();
            }

            inputName = scnr.next();
        }
    }
}

public class LabProgram {
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);

        int userNum;
        int divNum;

      
        try {
            userNum = scnr.nextInt();
            divNum = scnr.nextInt();

            System.out.println(userNum / divNum);
        }
        catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception: " + e.getMessage());
        }
        catch (InputMismatchException e) {
            System.out.println("Input Mismatch Exception: " + e.toString());
        } 
  
    }
}

public class LabProgram {
    public static double stepsToMiles (int steps) throws Exception {
        if (steps < 0) {
            throw new Exception("Exception: Negative step count entered.");
        }
        return (double) steps / 2000;    
    }
   
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);

        try {
            int steps = scnr.nextInt();
            
            double miles = stepsToMiles(steps);
            System.out.printf("%.2f\n", miles);
            
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            scnr.close();
        }
    }
}


public class LabProgram {
   
    public static String findID(String studentName, Scanner infoScnr) throws Exception {
        while (infoScnr.hasNextLine()) {
            String line = infoScnr.nextLine();
            String[] parts = line.split(" ");
            String name = parts[0];
            String id = parts[1];
            
            if (name.equalsIgnoreCase(studentName)) {
                return id;  
            }
        }
        
        throw new Exception("Student ID not found for " + studentName);
      
    }
   
    public static String findName(String studentID, Scanner infoScnr) throws Exception {
      
        while (infoScnr.hasNextLine()) {
            String line = infoScnr.nextLine();
            String[] parts = line.split(" ");
            String name = parts[0];
            String id = parts[1];
            
            if (id.equalsIgnoreCase(studentID)) {
                return name;
            }
        }
        
        throw new Exception("Student name not found for " + studentID);
      
    }
   
    public static void main(String[] args) throws IOException {
        Scanner scnr = new Scanner(System.in);
        String studentName;
        String studentID;
        String studentInfoFileName;
        FileInputStream studentInfoStream = null;
        Scanner studentInfoScanner = null;
    
        try {
            // Read the text file name from user
            studentInfoFileName = scnr.next();

            // Open the text file
            studentInfoStream = new FileInputStream(studentInfoFileName);
            // Create a scanner object and feed the text file to it
            studentInfoScanner = new Scanner(studentInfoStream);

            // Read search option from scanner if userChoice = 0: findID(), 1: findName()
            int userChoice = scnr.nextInt();
      
            if (userChoice == 0) {
                studentName = scnr.next();
                studentID = findID(studentName, studentInfoScanner);
                System.out.println(studentID);
            }
            else {
                studentID = scnr.next();
                studentName = findName(studentID, studentInfoScanner);
                System.out.println(studentName);
            }

        } catch (FileNotFoundException e) {
            System.out.println("Error: The file was not found.");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            scnr.close();
        }
      
        studentInfoStream.close();
    }
}

public class RecursiveCalls {
    public static void backwardsAlphabet(char currLetter) {
        if (currLetter == 'a') {
            System.out.println(currLetter);
        }
        else {
            System.out.print(currLetter + " ");
            backwardsAlphabet((char)(currLetter - 1));
        }
    }

    public static void main (String [] args) {
        Scanner scnr = new Scanner(System.in);
        char startingLetter;

        startingLetter = scnr.next().charAt(0);
        backwardsAlphabet( startingLetter );
    }

}

public class NationSearch {
    public static void search(ArrayList<String> searchList, int minIndex, int maxIndex) {
        int rangeSize;
        int midIndex;
        rangeSize = minIndex + maxIndex + 1;
        midIndex = (maxIndex - minIndex) / 2;

        System.out.println("Number of elements in the range: " + rangeSize);
        System.out.println("Middle index: " + midIndex);
        System.out.println("Element at middle index: " + searchList.get(midIndex));
    }
   
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<String> dataList = new ArrayList<String>();
        int numData;
        int i;
   
        numData = scnr.nextInt();
        for (i = 0; i < numData; ++i) {
            dataList.add(scnr.next());
        }

        search(dataList, 0, dataList.size() - 1);
    }
}

public class FindNation {
    public static void findNation(ArrayList<String> searchList, String queryItem, int lowIndex, int highIndex) {
        int rangeSize;
        int midIndex;
      
        rangeSize = (highIndex - lowIndex) + 1;
        midIndex = (lowIndex + highIndex) / 2;
        if( queryItem.equals(searchList.get(midIndex)) ) {
            System.out.println(queryItem +  " is found at index " + midIndex);
        }
        else if (rangeSize == 1){
            System.out.println(queryItem +  " is not in the list");
        }
        else {
            System.out.println(queryItem + " is not found at index " + midIndex);
        }

    }
   
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<String> dataList = new ArrayList<String>();
        String queryItem;
        int numData;
        int i;
      
        queryItem = scnr.next();
        numData = scnr.nextInt();
        for (i = 0; i < numData; ++i) {
            dataList.add(scnr.next());
        }

        findNation(dataList, queryItem, 0, dataList.size() - 1);
    }
}

public class WordSearch {
    public static void search(ArrayList<String> searchList, String queryItem, int lowerIndex, int upperIndex) {
        int rangeSize;
        int midIndex;
        String midValue;
   
        rangeSize = (upperIndex - lowerIndex) + 1;
        midIndex = (lowerIndex + upperIndex) / 2;
        midValue = searchList.get(midIndex);

        if (queryItem.equals(midValue)) {
            System.out.println(queryItem + " is found at index " + midIndex);
        }
        else if (rangeSize == 1) {
            System.out.println(queryItem + " is not in the list");
        }
        else {

            if ( queryItem.compareTo( midValue ) < 0 ){
                System.out.println("Search lower half");
                search(searchList, queryItem, lowerIndex, midIndex);
            }
            else {
                System.out.println("Search upper half");
                search(searchList, queryItem, midIndex + 1, upperIndex);
            }

        }
    }
   
    public static void main(String[] args) {
        Scanner scnr = new Scanner(System.in);
        ArrayList<String> dataList = new ArrayList<String>();
        String queryItem;
        int numData;
        int i;
   
        queryItem = scnr.next();
        numData = scnr.nextInt();
        for (i = 0; i < numData; ++i) {
            dataList.add(scnr.next());
        }

        search(dataList, queryItem, 0, dataList.size() - 1);
    }
}