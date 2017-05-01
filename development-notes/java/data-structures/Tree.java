
/*
  - what happens when enter multiple    
 */
// https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html

import java.util.*;

public class Main {

    public static void main(String[] args) {

        TreeSet<String> tree = new TreeSet<String>();
        tree.add("before");
        tree.add("drotto");
        tree.add("dog");
        tree.add("driscle");
        tree.add("dast");
        tree.add("ever");
        tree.add("fsr");
        tree.add("dsast");

        String c = tree.floor("dra");
        String f = tree.ceiling("drz");

        System.out.println(c);
        System.out.println(f);

        SortedSet<String> s = tree.subSet(c, f);

        int i = 0;

        for (String v : s) {
            if (v.startsWith("dr")) {
                i++;
            }
        }

        System.out.println(s.size() - 1);

        /*
        TreeMap<String, Boolean> map = new TreeMap<String, Boolean>();
        map.put("before", true);
        map.put("drotto", true);
        map.put("dog", true);
        map.put("driscle", true);
        map.put("dast", true);
        map.put("ever", true);
        map.put("fsr", true);

        Map.Entry<String, Boolean> m = map.ceilingEntry("d"); // gets most recently added
        String c = map.floorKey("dr");
        String f = map.ceilingKey("dr");


        */
    }
}
