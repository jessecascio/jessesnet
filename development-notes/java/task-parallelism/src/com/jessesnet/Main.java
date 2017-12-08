package com.jessesnet;

import java.lang.management.ManagementFactory;
import java.util.*;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.RecursiveTask;

public class Main {
    // ps -Al | grep java | wc -l
    private static int S_DATA = 100000;
    private static int cores = Runtime.getRuntime().availableProcessors();

    private static HashSet<Integer> pids = new HashSet<>();

    public static void main(String[] args) {
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

    private static class Farthest extends RecursiveTask<Integer> {
        private int MIN_RANGE = 50;

        int[] pts;
        int lo;
        int hi;

        Farthest(int[] p, int l, int h) {
            pts = p;
            lo = l;
            hi = h;
        }

        protected Integer compute() {

            int max = Integer.MIN_VALUE;

            if (hi - lo < MIN_RANGE) {
                for (int i=lo; i<hi; i++) {
                    for (int j=0; j<pts.length;j++) {
                        if (i == j) {
                            continue;
                        }

                        max = Math.max(max, Math.abs(pts[i] - pts[j]));
                    }
                }
            } else {
                int mid = (hi + lo) / 2;
                Farthest l = new Farthest(pts, lo, mid);
                Farthest r = new Farthest(pts, mid, hi);

                l.fork();

                int rVal = r.compute();
                int lVal = l.join();

                max = Math.max(rVal, lVal);
            }

            return max;
        }
    }
}

