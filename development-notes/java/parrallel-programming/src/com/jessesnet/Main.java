package com.jessesnet;

import java.lang.management.ManagementFactory;
import java.util.*;
import java.util.concurrent.ForkJoinPool;

public class Main {
    // ps -Al | grep java | wc -l
    private static int S_DATA = 100000;
    private static int CORES = Runtime.getRuntime().availableProcessors();

    private static HashSet<Integer> pids = new HashSet<>();

    public static void main(String[] args) {
        // Main.forkJoin();
        // Main.CPUSplit();
        // Main.PStream();
    }

    private static void PStream() {
        LinkedList<Stock> stocks = new LinkedList<>();
        Random r = new Random();

        System.out.println("Populating Data Set....");
        for (int i=0; i<1000000; i++) {
            switch(r.nextInt(1) + 1) {
                case 0:
                    stocks.add(new Stock("APPL", r.nextInt(1000) + 1));
                    break;
                case 1:
                    stocks.add(new Stock("GOOG", r.nextInt(1000) + 1));
                    break;
            }
        }

        /**
         *
         */
        System.out.println("\nRunning Sequential Stream....");
        long s = System.nanoTime();
        long x = 0;
        for (Stock st: stocks) {
            if (st.getTicker() == "GOOG" && st.getPrice() > 200) {
                x++;
            }
        }
        long t2 = (System.nanoTime() - s) / 1000000;
        System.out.println("Took (microseconds): " + t2);

        System.out.println("\nRunning Parrallel Stream....");
        s = System.nanoTime();
        long y = stocks.parallelStream()
                    .filter(st -> st.getTicker() == "GOOG")
                    .filter(st -> st.getPrice() > 200)
                    .count();

        t2 = (System.nanoTime() - s) / 1000000;
        System.out.println("Took (microseconds): " + t2);

        System.out.println("\nNumber of stocks > 200 - " + x + ":" + y);
    }

    private static void CPUSplit() {
        long s = System.nanoTime();
        ForkJoinPool.commonPool().invoke(new CPUSplit(CORES + 2, 30000));
        long t2 = (System.nanoTime() - s) / 1000000;

        System.out.println("\nTook (microseconds): " + t2);
    }

    private static void forkJoin() {
        System.out.println("Populating Data Set....");
        int[] d = Main.populate(S_DATA);

        System.out.println("\nRunning Sequential Algorithm....");

        long s = System.nanoTime();
        int m = Main.farthest(d, 0, d.length);
        long t1 = (System.nanoTime() - s) / 1000000;

        System.out.println("Max Distance: " + m);
        System.out.println("Took (microseconds): " + t1);

        /**
         *
         */
        System.out.println("\nRunning Parallel Algorithm....");

        s = System.nanoTime();
        m = ForkJoinPool.commonPool().invoke(new Farthest(d, 0, d.length));
        long t2 = (System.nanoTime() - s) / 1000000;

        System.out.println("Max Distance: " + m);
        System.out.println("Took (microseconds): " + t2);

        /**
         *
         */
        float diff = t1 / t2;
        System.out.println("\nParrallel Approx. " + diff + "x faster!");
    }

    // find farthest distance between two numbers
    private static int farthest(int[] p, int l, int h) {
        int m = Integer.MIN_VALUE;

        for (int i=l; i<h; i++) {
            for (int j=0; j<p.length;j++) {
                if (i == j) {
                    continue;
                }

                m = Math.max(m, Math.abs(p[i] - p[j]));
            }
        }

        return m;
    }

    private static int[] populate(int s) {
        int[] d = new int[s];
        Random r = new Random();

        for (int i=0; i<s; i++) {
            d[i] =  r.nextInt(s * 5) + 1;
        }

        return d;
    }

    private static int pid() {
        String s = ManagementFactory.getRuntimeMXBean().getName().split("@")[0];
        return Integer.parseInt(s);
    }
}