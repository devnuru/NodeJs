//                                     NODEJS DNS
// The nodejs DNS module contains methods to get information of given hostname. Let us see the listof commonly used DNS function:

//        * dns.getServers
//        * dns.setServers(servers)
//        * dns.lookup(hostname[, options], callback)
//        * dns.lookupService(address, port, callback)
//        * dns.resolve(hostname[, rrtype], callback)
//        * dns.resolve4(hostname, callback)
//        * dns.resolve6(hostname, callback)
//        * dns.resolveCname(hostname, callback)
//        * dns.resolveMx(hostname, callback)
//        * dns.resolveNx(hostname, callback)
//        * dns.resolveSoa(hostname, callback)
//        * dns.resolveSrv(hostname, callback)
//        * dns.resolvePtr(hostname, callback)
//        * dns.resolveTxt(hostname, callback)
//        * dns.reverse(ip, callback)

const dns = require("dns");
// const http = require("http");
// dns.lookup("www.javapoint.com", (err, addresses, family) => {
//   console.log("addresses:", addresses);
//   console.log("family:", family);
// });

// dns.resolve4("www.javatpoint.com", (err, addresses) => {
//   if (err) throw err;
//   console.log(`addresses: ${JSON.stringify(addresses)}`);
//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostnames) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//     });
//   });
// });

dns.lookupService("127.0.0.1", 22, (err, hostname, service) => {
  console.log(hostname, service);
});
