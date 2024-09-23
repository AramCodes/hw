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