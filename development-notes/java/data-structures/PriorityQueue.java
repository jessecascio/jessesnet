
// https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] a = new int[n];
        
        PriorityQueue<Integer> heap = new PriorityQueue<Integer>(n, Collections.reverseOrder());
        
        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();
            heap.add(a[a_i]);
        }
        
        while (heap.size() != 0) {
            System.out.println(heap.remove());
        }
        
    }
}

/*
 Integer[] d = heap.toArray(new Integer[n + 3]);
        
        for (int i=0; i<d.length; i++) {
            System.out.println(d[i]);
        }
        
        while (!heap.isEmpty()) {
            Integer i = heap.poll();
            System.out.println(i);
        }
 */

/*
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] a = new int[n];
        
        //Collections.reverseOrder();
        PriorityQueue<Integer> heap = new PriorityQueue<Integer>(n); 
        
        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();
            heap.add(a[a_i]);
        }
        
        Integer[] d = heap.toArray(new Integer[n]);
       
        
           // System.out.print(Math.floor((d.length / 2).doubleValue()));
        
        if (d.length % 2 != 0) {
            // System.out.println(d[Math.floor((double)(d.length / 2))]);
            int i = (int)(d.length / 2);
            System.out.println(d[i]);
        } else {

        }
        
    }
}

 */