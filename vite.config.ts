import { defineConfig, UserConfig } from 'vite';
import path from 'path';

// Define the configuration
export default defineConfig(({ mode }: { mode: string }): UserConfig => {
  return {
    server: {
      host: "::", // Listen on all IPv6 addresses
      port: 8080, // Server port
    },
    plugins: [
    , // React plugin for Vite
      mode === 'development' ? componentTagger() : undefined, // Conditionally add plugin
    ].filter(Boolean), // Remove undefined values from the array
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // Alias for the src directory
      },
    },
  };
});

// Example of a custom plugin (if needed)
  function findFirstEven(numbers: number[]): number | undefined {
  for (const num of numbers) {
    if (num % 2 === 0) {
      return num; // Return the first even number found
    }
  }
  return undefined; // Return undefined if no even number is found
}

console.log(findFirstEven([1, 3, 5, 7, 8])); // Output: 8
console.log(findFirstEven([1, 3, 5, 7])); // Output: undefined
 {
    name: ''
      // Custom transformation logic
      function badReturn() {
  return
  {
    message: "This will not be returned";
  };
}

console.log(badReturn()); // Output: undefined
 interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  constructor(public name: string, public age: number, public grade: string) {}

  study(): string {
    return `${this.name} is studying.`;
  }
}

const student = new Student("Bob", 20, "A");
console.log(student.study()); // Output: Bob is studying.
;
    }
  

 ; "vite";



// https://vitejs.dev/config/

function componentTagger() {
  return {
    name: 'component-tagger',
    transform(code: string) {
      // Custom transformation logic
      return code;
    },
  };
}

