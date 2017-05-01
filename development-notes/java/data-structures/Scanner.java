/*
 - multiple test cases
 */
Scanner in = new Scanner(System.in);
int tcs = in.nextInt();

for (int i=0; i<tcs; i++) {
    int m = in.nextInt();
    
    char[][] a = new char[m][m];
    in.nextLine(); // skip first
        
    for (int j=0; j<m; j++) {
        a[j] = in.nextLine().toCharArray(); 
    }
    
    solve(a);
}

// asfljsf 
Scanner in = new Scanner(System.in);
int n = in.nextInt();
int[] a = new int[n];

for(int a_i=0; a_i < n; a_i++){
    a[a_i] = in.nextInt();
    
}

Scanner in = new Scanner(System.in);
int n = in.nextInt();
int k = in.nextInt();
int a[] = new int[n];
for(int a_i=0; a_i < n; a_i++){
    a[a_i] = in.nextInt();
}

Scanner in = new Scanner(System.in);
  int n = in.nextInt();
  
  int[][] m = new int[n][n];

  for(int i=0; i < n; i++){
      for(int j=0; j < n; j++){
          m[i][j] = in.nextInt();
      }
  }

public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] grades = new int[n];
        for(int grades_i=0; grades_i < n; grades_i++){
            grades[grades_i] = in.nextInt();
        }
        int result = solve(grades);
        System.out.println(result);
    }