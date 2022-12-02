#include <iostream>
using namespace std;
int findInverseX(int m, int X)
{
    int i = 0;
    while (true)
    {
        if ((i * m + 1) % X == 0)
        {
            return (i * m + 1) / X;
        }
        i++;
    }
}
void solve(int a[], int m[], int n)
{
    int M = 1;
    for (int i = 0; i < n; i++)
    {
        M *= m[i];
    }
    int X[n];
    int iX[n];
    for (int i = 0; i < n; i++)
    {
        X[i] = M / m[i];
        iX[i] = findInverseX(m[i], X[i]);
    }
    int result = 0;
    for (int i = 0; i < n; i++)
    {
        result += a[i] * X[i] * iX[i];
    }
    cout << "Result: " << result << endl;
    cout << "Short: " << (result % M) << " (mod " << M << ") " << endl;
}
int main()
{
    int n;
    cout << "Number of equation: ";
    cin >> n;
    int a[n];
    int m[n];
    for (int i = 0; i < n; i++)
    {
        cout << "Input a[" << i << "]: ";
        cin >> a[i];
        cout << "Input m[" << i << "]: ";
        cin >> m[i];
    }
    solve(a, m, n);
}