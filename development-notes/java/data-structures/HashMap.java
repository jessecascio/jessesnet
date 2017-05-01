
// https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html

publistatic void main(String[] args) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        map.computeIfAbsent(1, (k) -> 0);
        map.computeIfPresent(1, (k,v) -> v+1);

        System.out.println(map.get(1));

        for (Integer key : map.keySet()) {
            System.out.println("key " + key);
            System.out.println("val " + map.get(key));
        }
    }