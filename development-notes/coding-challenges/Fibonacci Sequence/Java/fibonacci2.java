
import java.util.Scanner;

/**
 * Display the first n elements of a fibonacci sequence
 */
class fibonacci2 
{
    public static void main(String[] args) 
    {
    	Scanner keyboard = new Scanner(System.in);

    	System.out.print("Enter number of elements [between 0 and 92]: ");
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
                iterative(index);
                endTime   = System.nanoTime();
                elapsed   = (endTime-startTime)/1000000;

                System.out.println("Took " + elapsed + "ms and "+memoryUsage()+" kB"); 
            }

    	} else {
    		System.out.println("Out of bounds");
    	}
    }

    /**
     * Simple iteration, O(n)
     */    
    private static void iterative(int index)
    {
        long index2 = 0;
        long index1 = 1;
        long temp;

        System.out.println("0: 0");
        System.out.println("1: 1");
        
        for (int i=3; i<=index; i++) {
            temp   = index1;
            index1 = index2 + index1; 
            index2 = temp;

            System.out.println((i-1)+": "+index1);
        }
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
