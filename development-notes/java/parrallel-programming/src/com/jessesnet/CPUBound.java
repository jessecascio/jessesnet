package com.jessesnet;

import java.util.concurrent.RecursiveTask;
import java.util.Random;

/**
 * Created by jcascio1271 on 12/8/17.
 */
public class CPUBound extends RecursiveTask<Integer> {
    private int RANGE;
    private int ID;

    CPUBound(int i, int r) {
        ID = i;
        RANGE = r;
    }

    protected Integer compute() {
        System.out.println("Starting CPU Bound Task#" + ID + "....");

        int k = 1;
        Random r = new Random();

        for (int i=0; i<RANGE; i++) {
            for (int j=0; j<RANGE; j++) {
                k = i + j + r.nextInt(k) + 1;
            }
        }

        System.out.println("Finished CPU Bound Task#" + ID + ": " + k);

        return k;
    }

}
