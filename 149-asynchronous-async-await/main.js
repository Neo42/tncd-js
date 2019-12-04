async function log() {
  await new Promise(r => setTimeout(r, 1000));
  console.log('1s');
  await new Promise(r => setTimeout(r, 1000));
  console.log('2s');
  await new Promise(r => setTimeout(r, 1000));
  console.log('3s');
  await new Promise(r => setTimeout(r, 1000));
  console.log('Done');
}

console.log('0s');
log().then(console.log);
