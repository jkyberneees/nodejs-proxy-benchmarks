# nodejs-proxy-benchmarks
Experimental Node.js HTTP proxy libraries benchmarks

# Benchmark Rounds 
## Mac OS

### fast-proxy-lite (^1.0.1)
> Hardware: `MacBook Pro (13-inch, 2020, 1,4 GHz Quad-Core Intel Core i5)`  
> Node.js version: `v17.0.1`
```bash
wrk -t4 -c20 -d5s http://127.0.0.1:8080/service/hi
Running 5s test @ http://127.0.0.1:8080/service/hi
  4 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.02ms  334.84us   6.42ms   90.69%
    Req/Sec     2.49k   223.49     2.62k    90.20%
  50546 requests in 5.10s, 6.51MB read
Requests/sec:   9907.92
Transfer/sec:      1.28MB
```

### fast-proxy (^1.8.0)
> Hardware: `MacBook Pro (13-inch, 2020, 1,4 GHz Quad-Core Intel Core i5)`  
> Node.js version: `v17.0.1`
```bash
wrk -t4 -c20 -d5s http://127.0.0.1:8080/service/hi
Running 5s test @ http://127.0.0.1:8080/service/hi
  4 threads and 20 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.28ms    1.24ms  31.61ms   96.14%
    Req/Sec     2.30k   349.90     2.71k    88.67%
  46508 requests in 5.10s, 5.99MB read
Requests/sec:   9117.27
Transfer/sec:      1.17MB
```

### fast-proxy (^1.7.0)
> Hardware: `MacBook Pro (16-inch, 2019, 2,6 GHz 6-Core Intel Core i7)`  
> Node.js version: `v14.15.1`
```bash
wrk -t8 -c50 -d20s http://127.0.0.1:8080/service/hi
Running 20s test @ http://127.0.0.1:8080/service/hi
  8 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     4.45ms    1.90ms  64.54ms   97.32%
    Req/Sec     1.38k   169.16     1.51k    95.06%
  220362 requests in 20.02s, 28.37MB read
Requests/sec:  11006.24
Transfer/sec:      1.42MB
```

### fast-proxy + undici (^1.7.0)
> Hardware: `MacBook Pro (16-inch, 2019, 2,6 GHz 6-Core Intel Core i7)`  
> Node.js version: `v14.15.1`
```bash
wrk -t8 -c50 -d20s http://127.0.0.1:8080/service/hi
Running 20s test @ http://127.0.0.1:8080/service/hi
  8 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     2.91ms    1.12ms  41.43ms   97.68%
    Req/Sec     2.11k   248.36     2.43k    95.50%
  336513 requests in 20.02s, 43.32MB read
Requests/sec:  16811.80
Transfer/sec:      2.16MB
```


### http-proxy (^1.18.1)
> Hardware: `MacBook Pro (13-inch, 2020, 1,4 GHz Quad-Core Intel Core i5)`  
> Node.js version: `v14.15.0`
```bash
wrk -t8 -c50 -d20s http://127.0.0.1:8080/service/hi
Running 20s test @ http://127.0.0.1:8080/service/hi
  8 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    13.86ms    6.74ms  76.89ms   89.91%
    Req/Sec   413.07    151.80   575.00     76.38%
  8206 requests in 20.10s, 857.46KB read
Requests/sec:    408.28
Transfer/sec:     42.66KB
```

> Hardware: `MacBook Pro (16-inch, 2019, 2,6 GHz 6-Core Intel Core i7)`  
> Node.js version: `v14.15.1`
```bash
wrk -t8 -c50 -d20s http://127.0.0.1:8080/service/hi
Running 20s test @ http://127.0.0.1:8080/service/hi
  8 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    29.10ms   24.22ms 251.42ms   97.66%
    Req/Sec   201.41     82.79   363.00     70.81%
  8206 requests in 20.01s, 857.46KB read
  Socket errors: connect 0, read 0, write 0, timeout 48
Requests/sec:    410.18
Transfer/sec:     42.86KB
```

## Linux OS
### Community discussion:
- https://github.com/fastify/fast-proxy/issues/41#issuecomment-737048202