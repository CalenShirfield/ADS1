# recursive function to calculate gcd

def gcd(a, n):
    r = a % n  
    if r == 0:
        return n 
    return gcd(a-n,r)

print(gcd(322,42))