const inspector = require('inspector');
const fs = require('fs');
const session = new inspector.Session();


session.connect();



// const fd = fs.openSync('profile.heapsnapshot', 'w');
// session.on('HeapProfiler.addHeapSnapshotChunk', (m) => {
//   fs.writeSync(fd, m.params.chunk);
// });

// session.post('HeapProfiler.takeHeapSnapshot', null, (err, r) => {
//   console.log('Runtime.takeHeapSnapshot done:', err, r);
//   session.disconnect();
//   fs.closeSync(fd);
// });


session.post('Profiler.enable', () => {
    session.post('Profiler.start', () => {
      // Invoke business logic under measurement here...
  
      // some time later...
      session.post('Profiler.stop', (err, { profile }) => {
        // Write profile to disk, upload, etc.
        if (!err) {
          fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile));
        }
      });
    });
  });