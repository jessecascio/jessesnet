#include <iostream>

// g++ -pipe -O2 -std=c++14 solution.cpp -lm

int fibi(int n) {
  if (n <= 1)
    return n;
  return fibi(n - 1) + fibi(n - 2);
}

int main() {
  int n = 0;
  std::cin >> n;
  std::cout << fibi(n) << '\n';
  return 0;
}
