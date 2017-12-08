package com.jessesnet;

import java.util.concurrent.RecursiveTask;

/**
 * Created by jcascio1271 on 12/8/17.
 */
public class Farthest extends RecursiveTask<Integer> {
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
