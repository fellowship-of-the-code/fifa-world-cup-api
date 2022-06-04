import { log } from 'console';

export default function helloWorld(): String {
  return 'Hello World';
}

log(helloWorld());

function keepMeActive() {
  setTimeout(() => {
    keepMeActive();
  }, 1000);
}

keepMeActive();
