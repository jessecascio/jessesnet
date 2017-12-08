package com.jessesnet;

import sun.plugin2.gluegen.runtime.CPU;

import java.util.LinkedList;
import java.util.concurrent.RecursiveTask;
import java.util.Random;

public class CPUSplit extends RecursiveTask<Integer> {
    private int RANGE;
    private int COUNT;

    CPUSplit(int c, int r) {
        COUNT = c;
        RANGE = r;
    }

    protected Integer compute() {
        System.out.println("Starting CPU Split....\n");
        LinkedList<CPUBound> tasks = new LinkedList<>();

        for (int i=1; i<=COUNT; i++) {
            CPUBound cpu = new CPUBound(i, RANGE);
            cpu.fork();

            tasks.add(cpu);
        }

        for (CPUBound cpu: tasks) {
            cpu.join();
        }

        return 1;
    }

}
