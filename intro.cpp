/*Write a program that produces the following output*/

#include <iostream>
using namespace std;

int main()
{
    cout << "**************************************************" << endl;
    cout << " Programming Assignment 1 " << endl;
    cout << " Computer Programing 1 " << endl;
    cout << " Author Aram" << endl;
    cout << " Due Date: Tuesday May 7" << endl;
    cout << "**************************************************" << endl;
}

/* Write a program that gets a list of integers from input. The input begins with an integer indicating the 
number of integers that follow. Then, get the last value from the input, which indicates a threshold. Output 
all integers less than or equal to that last threshold value. */

#include <iostream>
#include <vector>
using namespace std;

int main() {
    int numberOfElements, maxThresh;
    
    cin >> numberOfElements;
    vector<int> intList(numberOfElements);
    
    for (int i = 0; i < numberOfElements; ++i) {
        cin >> intList[i];
    }

    cin >> maxThresh;

    vector<int> newArray;

    for (int i = 0; i < (int)intList.size(); ++i) {
        if ( intList[i] <= maxThresh ) {
            newArray.push_back(intList[i]);
        }
    }

    for (int i = 0; i < (int)newArray.size(); ++i) {
        cout << newArray[i] << ",";
    }
    cout << endl;
    
   return 0;
}

/*Write a program that repeatedly reads in integers until a negative integer is read. The program also keeps track of 
the largest integer that has been read so far and outputs the largest integer at the end.*/

#include <iostream>
using namespace std;

int main() {
    int number = 0;
    int currMax = 0;


    while (number >= 0) {
        cin >> number;

        if (number > currMax) {
            currMax = number;
        }
    }
    
    cout << "Largest integer: " << currMax <<endl;

   return 0;
}

/*Write a program that first gets a list of integers from input. The input begins with an integer indicating the 
number of integers that follow. That list is followed by two more integers representing lower and upper bounds of 
a range. Your program should output all integers from the list that are within that range (inclusive of the bounds). 
For coding simplicity, follow each output integer by a comma, even the last one. The output ends with a newline.*/

//same as first challeng except add a lower bound

#include <iostream>
#include <vector>
using namespace std;

int main() {

    int numberOfElements, minThresh, maxThresh;
    
    cin >> numberOfElements;
    vector<int> intList(numberOfElements);
    
    for (int i = 0; i < numberOfElements; ++i) {
        cin >> intList[i];
    }

    cin >> minThresh;
    cin >> maxThresh;

    vector<int> newArray;

    for (int i = 0; i < (int)intList.size(); ++i) {
        if (  intList[i] >= minThresh && intList[i] <= maxThresh ) {
            newArray.push_back(intList[i]);
        }
    }

    for (int i = 0; i < (int)newArray.size(); ++i) {
        cout << newArray[i] << ",";
    }
    cout << endl;
    

   return 0;
}
/* Write a program that takes in 50 intergers and adds it to a variable named sum. Also from the sum you must get the average and print both on the screen.
 You must use a for loop for this exercise. Also make sure to account fo the possiblity that avrage may not always be an interger. 
*/

#include <iostream>

int main() {
    const int NUMBER_INT = 50;
    int sum = 0;
    int number;
    
    std::cout << "Please enter " << NUMBER_INT << " integers:" << std::endl;

    for (int i = 0; i < NUMBER_INT; ++i) {
        std::cin >> number;
        sum += number;
    }

    double average = static_cast<double>(sum) / NUMBER_INT;

    std::cout << "The sum of the entered integers is: " << sum << std::endl;
    std::cout << "The average of the entered integers is: " << average << std::endl;

    return 0;
}

/*Write a programs that constantly give the celsius of the given farenhiet and then the program terminates if the farenhiet number is -999.*/

#include <iostream>

int main() {
    const double TERMINATE_VALUE = -999;
    double fahrenheit;
    

    std::cout << "Enter a series of temperatures in Fahrenheit (enter -999 to terminate):" << std::endl;

    while (true) {
        std::cin >> fahrenheit;
        
        if (fahrenheit == TERMINATE_VALUE) {
            break;
        }

        double celsius = (fahrenheit - 32) * 0.5556;
        std::cout << "Fahrenheit: " << fahrenheit << " => Celsius: " << celsius << std::endl;
    }

    std::cout << "Program terminated." << std::endl;
    return 0;
}

/*Write a program that gives the total of an item when given its price and the amount of items bought, program must also apply sale's tax and any applicable
discounts. if the number of items is more than 10 a discoung of 20% is due, otherwise 10% is due. Sales tax is 7%*/

#include <iostream>

int main() {
    const double SALES_TAX = 0.07;
    double unitPrice;
    int amountOfUnits= 0;
    
    double totalBeforeTax;
    double totalAfterTax;

    std::cout << "Please enter the price of the item" << std::endl;
    std::cin >> unitPrice;

    std::cout << "Please enter the amount of items" << std::endl;
    std::cin >> amountOfUnits;

    double totalBeforeDiscount = unitPrice * amountOfUnits;

    if (amountOfUnits > 10) {
        totalBeforeTax = (totalBeforeDiscount) - (totalBeforeDiscount * 0.20);
    }
    else {
        totalBeforeTax = (totalBeforeDiscount) - (totalBeforeDiscount * 0.10);
    }

    totalAfterTax = totalBeforeTax + (totalBeforeTax  * SALES_TAX);

    std::cout << "Your total with tax is : $" << totalAfterTax << std::endl;

    return 0;
}

/*Write a number that takes in  a loan amount and returns the reqiered deposit*/


#include <iostream>
using namespace std;


int main() {
    int loanAmount;
    cout << "Enter loan amount higher than 0 and less than 50,000" <<endl;
    cin >> loanAmount;


    if (loanAmount > 50000) {
        cout << "Loans above 50,000 are not allowed" <<endl;
    } else if (loanAmount < 10000) {
        cout << "Your required deposit is $" << loanAmount *.10 <<endl;
    }
    else if (loanAmount < 15000) {
        cout << "Your required deposit is $" << loanAmount *.06 + 200 <<endl;
    }
    else if (loanAmount < 20000){
        cout << "Your required deposit is $" << loanAmount *.05 + 500 <<endl;
    }
    else {
        cout << "Your required deposit is $" << loanAmount *.03 + 1000 <<endl;
    }

    return 0;
}

// Write three functions, float getNum(),  float add(float, float), void outSum(float);  that asks user for two numbers, finds the sum of two numbers, and displays the sum 
// repeatly in a main program until the user enter “0” for either one of the numbers. For example, in the main, user enter 2, 4, output sum is 6. Then, 3,7, sum is 10, then 
// 8, 7, sum is 15. When user enter one 0, the repeating process stops. 
#include <iostream>
using namespace std;


float getNum() {
    float temp;
    cin >> temp;
    return temp;
}


float add(float num1, float num2) {
return num1 + num2;
}


void outSum(float sum) {
    cout << sum <<endl;
    return;
}


int main() {
    float num1 = 0.5;
    float num2 = 0.3;



    while (num1 || num2 != 0) {
    num1 = getNum();
    num2 = getNum();


    if (num1 == 0 || num2 == 0) {
            cout << "Program Terminated" <<endl;
            return 0;
        }
        else {
            outSum(add(num1, num2));
        } 


    }

}

// For a list of numbers entered by the user and terminated by 0, find the sum of the positive number and the sum of the negative numbers. C++ language only. No points will 
// be given if other languages are used. 

#include <iostream>
using namespace std;

int main() {
    int number;
    int sumPositive = 0;
    int sumNegative = 0;

    cout << "Enter 0 to terminate program" << endl;
    do {
        cin >> number;
        if (number > 0) {
            sumPositive += number;
        } else if (number < 0) {
            sumNegative += number;
        }
    } while (number != 0);

    cout << "Sum of positive numbers: " << sumPositive << endl;
    cout << "Sum of negative numbers: " << sumNegative << endl;

    return 0;
}