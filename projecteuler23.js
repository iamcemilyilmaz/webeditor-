const int limit = 28123;
List<int> abundent = new List<int>();
int[] primelist = ESieve((int)Math.Sqrt(limit));
 
// Find all abundant numbers
for (int i = 2; i <= limit; i++) {
    if (sumOfFactorsPrime(i, primelist) > i) {
        abundent.Add(i);
    }
}