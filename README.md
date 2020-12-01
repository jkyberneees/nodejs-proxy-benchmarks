# nodejs-proxy-benchmarks
Experimental Node.js HTTP proxy libraries benchmarks

# Benchmark Rounds 
## Mac OS
### fast-proxy (^1.7.0)
> Hardware: MacBook Pro (13-inch, 2020, 1,4 GHz Quad-Core Intel Core i5  
> Node.js version: v14.15.0
```bash
wrk -t8 -c50 -d20s http://127.0.0.1:8080/service/hi
Running 20s test @ http://127.0.0.1:8080/service/hi
  8 threads and 50 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     5.07ms  640.68us  21.39ms   88.03%
    Req/Sec     1.19k    67.37     1.49k    82.88%
  189551 requests in 20.02s, 24.40MB read
Requests/sec:   9467.68
Transfer/sec:      1.22MB
```


### http-proxy (^1.18.1)
> Hardware: MacBook Pro (13-inch, 2020, 1,4 GHz Quad-Core Intel Core i5  
> Node.js version: v14.15.0
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