package com.jessesnet;

/**
 * Created by jcascio1271 on 12/8/17.
 */
public class Stock {
    private String TICKER;
    private double PRICE;

    public String getTicker() {
        return TICKER;
    }

    public double getPrice() {
        return PRICE;
    }

    Stock(String t, double p) {
        TICKER = t;
        PRICE = p;
    }
}
