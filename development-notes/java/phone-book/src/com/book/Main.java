package com.book;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public enum Prompt {
        // ADD, DELETE, EXIT - can be simple of complex declarations
        ADD ("add", 1), DELETE ("delete", 2), EXIT ("exit", 3);

        String action;
        int code;

        Prompt(String action, int code) {
            this.action = action;
            this.code = code;
        }

        @Override
        public String toString() {
            return this.action;
        }
    }

    public static void main(String[] args) {

        List<Person> book = new ArrayList<>();
        Scanner psc = new Scanner(System.in);

        Prompt a = Main.prompt(psc);

        while (a != Prompt.EXIT) {
            Scanner asc = new Scanner(System.in);
            switch (a) {
                case ADD:
                    Person p = new Person(Main.add(asc));
                    book.add(p);
                    break;
            }

            a = Main.prompt(psc);
        }

        for (Person p : book) {
            System.out.println(p.name);
        }
    }

    // http://www.geeksforgeeks.org/scanner-class-in-java/
    public static Prompt prompt(Scanner sc) {
        final int ADD = 1;
        final int DELETE = 2;
        final int EXIT = 3;

        System.out.println("What would you like to do: ");
        System.out.println(ADD + ") Add a new contact");
        System.out.println(DELETE + ") Delete a new contact");
        System.out.println(EXIT + ") Exit");

        switch (sc.nextInt()) {
            case ADD:
                return Prompt.ADD;
            case DELETE:
                return Prompt.DELETE;
            default:
                return Prompt.EXIT;
        }
    }

    public static String add(Scanner sc) {
        System.out.printf("Please enter a name: ");
        String name = sc.nextLine();

        return name;
    }

}
