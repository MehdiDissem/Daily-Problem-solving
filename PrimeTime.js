// We need prime numbers and we need them now!

// Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

// For example,

// 11 => [2, 3, 5, 7, 11]

function prime(num) {
    function isPrime(n) {
        if(n == 2) return true
           for (let i = 2; i < n; i++) {
              if (n % i == 0) return false
          }
        return true
      }
        var r = []
        for(let i = 2; i <= num; i++){
          if(isPrime(i)) r.push(i)
        }
        return r
  }