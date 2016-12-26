
import java.util.Scanner;

/**
 * Find the nth number in a fibonacci sequence
 */
class fibonacci1 
{
    public static void main(String[] args) 
    {
    	Scanner keyboard = new Scanner(System.in);

    	System.out.print("Enter index [between 0 and 92]: ");
    	int index = keyboard.nextInt();
    
    	if (index >=0 && index <=92) {
    		
            if (index == 0) {
                System.out.println("fibonacci number is 0");
            } else if (index == 1) {
                System.out.println("fibonacci number is 1");    
            } else {

                long startTime, endTime, iterate, binet, recurse;
                double elapsed;

                /**
                 * iterative - loses track of digites after 92, use a BigInt()
                 */
                startTime = System.nanoTime();
                iterate   = iterative(index);
                endTime   = System.nanoTime();
                elapsed   = (endTime-startTime)/1000000;

                System.out.println("fibonacci number (iterative) is " + iterate + ", took " + elapsed + "ms and "+memoryUsage()+" kB"); 

                /**
                 * mathematically - not accurate in high numbers
                 */
                startTime = System.nanoTime();
                binet     = binet(index);
                endTime   = System.nanoTime();
                elapsed   = (endTime-startTime)/1000000;

                System.out.println("fibonacci number (binet) is " + binet + ", took " + elapsed + "ms and "+memoryUsage()+" kB");
                
                /**
                 * recursive - takes way too long
                 */
                startTime = System.nanoTime();
                recurse   = recursively(index);
                endTime   = System.nanoTime();
                elapsed   = (endTime-startTime)/1000000;

                System.out.println("fibonacci number (recursively) is " + recurse + ", took " + elapsed + "ms and "+memoryUsage()+" kB");
            }

    	} else {
    		System.out.println("Out of bounds");
    	}
    }

    /**
     * Simple iteration, O(n)
     */    
    private static long iterative(int index)
    {
        long index2 = 0;
        long index1 = 1;
        long temp;

        for (int i=3; i<=index; i++) {
            temp   = index1;
            index1 = index2 + index1; 
            index2 = temp;
        }

        return index2 + index1;
    }

    /**
     * Mathematical formula, O(1), rounding errors in higher numbers
     */
    private static long binet(int index)
    {
        double root5 = Math.sqrt(5);
        double term1 = Math.pow((1+root5), index);
        double term2 = Math.pow((1-root5), index);
        double term3 = Math.pow(2, index) * root5;
        
        double fibo = (term1-term2)/term3;

        return (long) fibo;
    }

    /**
     * Too slow, exponential complexity, anything over 40
     */
    private static long recursively(int index)
    {
        if (index <= 0) {
            return 0;
        }

        if (index == 1) {
            return 1;
        }

        return recursively(index-1) + recursively(index-2);
    }

    /**
     * track memory usage
     */
    private static long memoryUsage()
    {
        Runtime runtime = Runtime.getRuntime();
        runtime.gc();
        long memory = (runtime.totalMemory() - runtime.freeMemory());

        return memory/1024;
    }

}
