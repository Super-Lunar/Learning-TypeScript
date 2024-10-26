export {}
// to get rid of this error we add export {} at top
// after this the file is treated as module
let msg = "Learning TypeScript";
// we got an error "cannot redeclare block scoped variable 'msg'"
// this happens the file is treated as a script rather than module
console.log(msg);
