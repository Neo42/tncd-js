let curry = name => action => weapon =>
  console.log(`${name} ${action} ${weapon}.`);

curry('Neo')('stroke')('with a fist'); // Neo stroke with a fist.
