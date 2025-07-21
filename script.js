// Expanded Quiz Questions Database - 20 Questions Per Subject
const quizQuestions = {
    general: [
        {
            question: "What is the capital of Japan?",
            answers: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
            correct: 0,
            explanation: "Tokyo has been the capital of Japan since 1868."
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            answers: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            explanation: "Mars appears red due to iron oxide (rust) on its surface."
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2,
            explanation: "Leonardo da Vinci painted the Mona Lisa between 1503-1519."
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3,
            explanation: "The Pacific Ocean covers about 46% of the world's water surface."
        },
        {
            question: "In which year did World War II end?",
            answers: ["1944", "1945", "1946", "1947"],
            correct: 1,
            explanation: "World War II ended in 1945 with Japan's surrender in September."
        },
        {
            question: "What is the chemical symbol for gold?",
            answers: ["Go", "Gd", "Au", "Ag"],
            correct: 2,
            explanation: "Au comes from the Latin word 'aurum' meaning gold."
        },
        {
            question: "Which Shakespeare play features the characters Romeo and Juliet?",
            answers: ["Hamlet", "Romeo and Juliet", "Macbeth", "Othello"],
            correct: 1,
            explanation: "Romeo and Juliet is one of Shakespeare's most famous tragedies."
        },
        {
            question: "What is the fastest land animal?",
            answers: ["Lion", "Leopard", "Cheetah", "Jaguar"],
            correct: 2,
            explanation: "Cheetahs can reach speeds of up to 70 mph (112 km/h)."
        },
        {
            question: "Which continent is the Sahara Desert located in?",
            answers: ["Asia", "Africa", "Australia", "South America"],
            correct: 1,
            explanation: "The Sahara Desert is located in North Africa."
        },
        {
            question: "What is the smallest prime number?",
            answers: ["0", "1", "2", "3"],
            correct: 2,
            explanation: "2 is the smallest prime number and the only even prime number."
        },
        {
            question: "Which gas makes up approximately 78% of Earth's atmosphere?",
            answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            correct: 1,
            explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
        },
        {
            question: "What is the tallest mountain in the world?",
            answers: ["K2", "Mount Everest", "Mount Kilimanjaro", "Mount McKinley"],
            correct: 1,
            explanation: "Mount Everest stands at 29,032 feet (8,849 meters) above sea level."
        },
        {
            question: "Who wrote the novel '1984'?",
            answers: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "H.G. Wells"],
            correct: 2,
            explanation: "George Orwell wrote '1984', published in 1949."
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            answers: ["Gold", "Silver", "Oxygen", "Iron"],
            correct: 2,
            explanation: "O is the chemical symbol for Oxygen."
        },
        {
            question: "What is the currency of the United Kingdom?",
            answers: ["Euro", "Dollar", "Pound Sterling", "Franc"],
            correct: 2,
            explanation: "The Pound Sterling (GBP) is the official currency of the UK."
        },
        {
            question: "Which inventor is credited with creating the light bulb?",
            answers: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Graham Bell"],
            correct: 1,
            explanation: "Thomas Edison is widely credited with inventing the practical incandescent light bulb."
        },
        {
            question: "What is the largest mammal in the world?",
            answers: ["African Elephant", "Blue Whale", "Sperm Whale", "Giraffe"],
            correct: 1,
            explanation: "The Blue Whale is the largest mammal and animal on Earth."
        },
        {
            question: "In which country would you find Machu Picchu?",
            answers: ["Chile", "Brazil", "Peru", "Ecuador"],
            correct: 2,
            explanation: "Machu Picchu is an ancient Incan city located in Peru."
        },
        {
            question: "What is the hardest natural substance on Earth?",
            answers: ["Gold", "Iron", "Diamond", "Quartz"],
            correct: 2,
            explanation: "Diamond is the hardest natural substance known to man."
        },
        {
            question: "Which planet is closest to the Sun?",
            answers: ["Venus", "Mercury", "Earth", "Mars"],
            correct: 1,
            explanation: "Mercury is the closest planet to the Sun in our solar system."
        }
    ],
    
    javascript: [
        {
            question: "Which method is used to add an element to the end of an array in JavaScript?",
            answers: ["push()", "pop()", "shift()", "unshift()"],
            correct: 0,
            explanation: "The push() method adds one or more elements to the end of an array."
        },
        {
            question: "What does 'typeof null' return in JavaScript?",
            answers: ["null", "undefined", "object", "boolean"],
            correct: 2,
            explanation: "typeof null returns 'object' - this is a well-known quirk in JavaScript."
        },
        {
            question: "Which keyword is used to declare a constant in JavaScript?",
            answers: ["var", "let", "const", "final"],
            correct: 2,
            explanation: "The 'const' keyword is used to declare constants in JavaScript."
        },
        {
            question: "What is the correct way to create a function in JavaScript?",
            answers: ["function = myFunction() {}", "function myFunction() {}", "create myFunction() {}", "def myFunction() {}"],
            correct: 1,
            explanation: "Functions in JavaScript are declared using the 'function' keyword."
        },
        {
            question: "Which operator is used for strict equality comparison?",
            answers: ["=", "==", "===", "!="],
            correct: 2,
            explanation: "The === operator checks for strict equality (value and type)."
        },
        {
            question: "What does the 'this' keyword refer to in JavaScript?",
            answers: ["The current function", "The global object", "The current object context", "The parent object"],
            correct: 2,
            explanation: "'this' refers to the current object context in which the code is executing."
        },
        {
            question: "Which method converts a JSON string to a JavaScript object?",
            answers: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
            correct: 1,
            explanation: "JSON.parse() converts a JSON string into a JavaScript object."
        },
        {
            question: "What is the result of '3' + 2 in JavaScript?",
            answers: ["5", "32", "Error", "NaN"],
            correct: 1,
            explanation: "JavaScript performs string concatenation, resulting in '32'."
        },
        {
            question: "Which method is used to remove the last element from an array?",
            answers: ["pop()", "push()", "shift()", "slice()"],
            correct: 0,
            explanation: "The pop() method removes and returns the last element of an array."
        },
        {
            question: "What is a closure in JavaScript?",
            answers: ["A type of loop", "A function with access to outer scope", "A method to close variables", "An error handling mechanism"],
            correct: 1,
            explanation: "A closure is a function that has access to variables in its outer scope even after the outer function returns."
        },
        {
            question: "Which method is used to create a new array with all elements that pass a test?",
            answers: ["map()", "filter()", "reduce()", "forEach()"],
            correct: 1,
            explanation: "The filter() method creates a new array with elements that pass the provided test function."
        },
        {
            question: "What is the difference between 'let' and 'var'?",
            answers: ["No difference", "let has block scope, var has function scope", "var has block scope, let has function scope", "let is faster than var"],
            correct: 1,
            explanation: "'let' has block scope while 'var' has function scope, and 'let' doesn't allow redeclaration."
        },
        {
            question: "Which method is used to execute a function after a specified delay?",
            answers: ["setInterval()", "setTimeout()", "delay()", "wait()"],
            correct: 1,
            explanation: "setTimeout() executes a function after a specified number of milliseconds."
        },
        {
            question: "What does the spread operator (...) do?",
            answers: ["Combines arrays", "Expands iterables into individual elements", "Creates objects", "Defines functions"],
            correct: 1,
            explanation: "The spread operator expands iterables (arrays, strings) into individual elements."
        },
        {
            question: "Which method is used to find the index of an element in an array?",
            answers: ["find()", "search()", "indexOf()", "locate()"],
            correct: 2,
            explanation: "indexOf() returns the first index of the specified element, or -1 if not found."
        },
        {
            question: "What is destructuring in JavaScript?",
            answers: ["Breaking objects", "Extracting values from arrays/objects", "Deleting properties", "Error handling"],
            correct: 1,
            explanation: "Destructuring allows unpacking values from arrays or properties from objects into variables."
        },
        {
            question: "Which keyword is used to handle exceptions in JavaScript?",
            answers: ["catch", "try", "throw", "All of the above"],
            correct: 3,
            explanation: "JavaScript uses try, catch, and throw keywords for exception handling."
        },
        {
            question: "What is the purpose of the 'use strict' directive?",
            answers: ["Faster execution", "Enables strict mode for better error checking", "Reduces memory usage", "Enables new features"],
            correct: 1,
            explanation: "'use strict' enables strict mode which catches common coding errors and prevents unsafe actions."
        },
        {
            question: "Which method is used to convert an array to a string?",
            answers: ["toString()", "join()", "stringify()", "Both A and B"],
            correct: 3,
            explanation: "Both toString() and join() can convert arrays to strings, with join() allowing custom separators."
        },
        {
            question: "What is an arrow function in JavaScript?",
            answers: ["A function that points somewhere", "A shorter syntax for function expressions", "A recursive function", "A callback function"],
            correct: 1,
            explanation: "Arrow functions provide a shorter syntax for function expressions and don't bind their own 'this'."
        }
    ],
    
    react: [
        {
            question: "What is JSX in React?",
            answers: ["JavaScript XML", "Java Syntax Extension", "JSON eXtension", "JavaScript eXtension"],
            correct: 0,
            explanation: "JSX stands for JavaScript XML and allows HTML-like syntax in JavaScript."
        },
        {
            question: "Which hook is used to manage state in functional components?",
            answers: ["useEffect", "useState", "useContext", "useReducer"],
            correct: 1,
            explanation: "useState is the primary hook for managing state in functional components."
        },
        {
            question: "What is the virtual DOM in React?",
            answers: ["A copy of the real DOM", "A faster version of DOM", "An in-memory representation of DOM", "A backup of DOM"],
            correct: 2,
            explanation: "Virtual DOM is an in-memory representation that React uses to optimize updates."
        },
        {
            question: "Which method is called after a component is mounted?",
            answers: ["componentWillMount", "componentDidMount", "componentWillUpdate", "componentDidUpdate"],
            correct: 1,
            explanation: "componentDidMount is called after the component is mounted to the DOM."
        },
        {
            question: "What is the correct way to pass data to a child component?",
            answers: ["Through state", "Through props", "Through context", "Through refs"],
            correct: 1,
            explanation: "Props are the primary way to pass data from parent to child components."
        },
        {
            question: "Which hook is used for side effects in functional components?",
            answers: ["useState", "useEffect", "useContext", "useMemo"],
            correct: 1,
            explanation: "useEffect is used to handle side effects like API calls, subscriptions, etc."
        },
        {
            question: "What is the purpose of keys in React lists?",
            answers: ["Styling", "Performance optimization", "Event handling", "State management"],
            correct: 1,
            explanation: "Keys help React identify which items have changed for efficient re-rendering."
        },
        {
            question: "Which method is used to update state in class components?",
            answers: ["updateState()", "setState()", "changeState()", "modifyState()"],
            correct: 1,
            explanation: "setState() is the method used to update state in class components."
        },
        {
            question: "What is React Fragment used for?",
            answers: ["Creating components", "Grouping elements without extra DOM nodes", "Managing state", "Handling events"],
            correct: 1,
            explanation: "React Fragment allows grouping of elements without adding extra DOM nodes."
        },
        {
            question: "Which hook is used to optimize expensive calculations?",
            answers: ["useState", "useEffect", "useMemo", "useCallback"],
            correct: 2,
            explanation: "useMemo is used to memoize expensive calculations and optimize performance."
        },
        {
            question: "What is the purpose of useCallback hook?",
            answers: ["To manage state", "To memoize functions", "To handle effects", "To create refs"],
            correct: 1,
            explanation: "useCallback memoizes functions to prevent unnecessary re-renders of child components."
        },
        {
            question: "Which lifecycle method is called before a component is destroyed?",
            answers: ["componentDidMount", "componentWillUnmount", "componentDidUpdate", "componentWillUpdate"],
            correct: 1,
            explanation: "componentWillUnmount is called before a component is removed from the DOM."
        },
        {
            question: "What is prop drilling in React?",
            answers: ["Creating deep component trees", "Passing props through multiple levels", "Optimizing props", "Validating props"],
            correct: 1,
            explanation: "Prop drilling refers to passing props through multiple component levels to reach nested components."
        },
        {
            question: "Which hook is used to access React context?",
            answers: ["useContext", "useProvider", "useConsumer", "useGlobal"],
            correct: 0,
            explanation: "useContext hook is used to consume context values in functional components."
        },
        {
            question: "What is the purpose of React.StrictMode?",
            answers: ["Improves performance", "Identifies unsafe lifecycles and side effects", "Enables strict typing", "Reduces bundle size"],
            correct: 1,
            explanation: "React.StrictMode helps identify unsafe lifecycles, legacy API usage, and unexpected side effects."
        },
        {
            question: "Which method is used to create a ref in functional components?",
            answers: ["createRef()", "useRef()", "newRef()", "makeRef()"],
            correct: 1,
            explanation: "useRef() hook is used to create refs in functional components."
        },
        {
            question: "What is the difference between controlled and uncontrolled components?",
            answers: ["No difference", "Controlled components manage state via React, uncontrolled via DOM", "Controlled are faster", "Uncontrolled are more secure"],
            correct: 1,
            explanation: "Controlled components have their state managed by React, while uncontrolled components store state in the DOM."
        },
        {
            question: "Which hook would you use for complex state logic?",
            answers: ["useState", "useReducer", "useEffect", "useMemo"],
            correct: 1,
            explanation: "useReducer is preferred for complex state logic that involves multiple sub-values or when the next state depends on the previous one."
        },
        {
            question: "What is React.memo used for?",
            answers: ["Memory management", "Component memoization", "State memoization", "Effect memoization"],
            correct: 1,
            explanation: "React.memo is a higher-order component that memoizes the result and skips re-rendering if props haven't changed."
        },
        {
            question: "Which pattern is recommended for sharing state between components?",
            answers: ["Global variables", "Props drilling", "Lifting state up", "Direct DOM manipulation"],
            correct: 2,
            explanation: "Lifting state up to a common ancestor component is the recommended pattern for sharing state."
        }
    ],
    
    java: [
        {
            question: "Which keyword is used to inherit a class in Java?",
            answers: ["inherits", "extends", "implements", "super"],
            correct: 1,
            explanation: "The 'extends' keyword is used for class inheritance in Java."
        },
        {
            question: "What is the size of int data type in Java?",
            answers: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
            correct: 1,
            explanation: "The int data type in Java is 4 bytes (32 bits)."
        },
        {
            question: "Which method is the entry point of a Java application?",
            answers: ["start()", "main()", "run()", "init()"],
            correct: 1,
            explanation: "The main() method is the entry point of any Java application."
        },
        {
            question: "What is the default value of a boolean variable in Java?",
            answers: ["true", "false", "null", "0"],
            correct: 1,
            explanation: "The default value of a boolean variable in Java is false."
        },
        {
            question: "Which access modifier makes a member accessible only within the same class?",
            answers: ["public", "protected", "private", "default"],
            correct: 2,
            explanation: "The private access modifier restricts access to within the same class only."
        },
        {
            question: "What is method overloading in Java?",
            answers: ["Same method name with different parameters", "Same method name with same parameters", "Different method names", "Inheriting methods"],
            correct: 0,
            explanation: "Method overloading is having multiple methods with the same name but different parameters."
        },
        {
            question: "Which keyword is used to prevent method overriding?",
            answers: ["static", "final", "abstract", "synchronized"],
            correct: 1,
            explanation: "The 'final' keyword prevents a method from being overridden."
        },
        {
            question: "What is the difference between == and equals() in Java?",
            answers: ["No difference", "== compares references, equals() compares content", "== compares content, equals() compares references", "Both compare references"],
            correct: 1,
            explanation: "== compares object references while equals() compares the content/value."
        },
        {
            question: "Which collection class allows duplicate elements?",
            answers: ["Set", "HashSet", "ArrayList", "TreeSet"],
            correct: 2,
            explanation: "ArrayList allows duplicate elements, while Set implementations don't."
        },
        {
            question: "What is encapsulation in Java?",
            answers: ["Hiding implementation details", "Code reusability", "Multiple inheritance", "Method overriding"],
            correct: 0,
            explanation: "Encapsulation is the principle of hiding implementation details and exposing only necessary parts."
        },
        {
            question: "What is the difference between abstract class and interface?",
            answers: ["No difference", "Abstract class can have concrete methods, interface cannot", "Interface can have concrete methods, abstract class cannot", "Abstract class is faster"],
            correct: 1,
            explanation: "Abstract classes can have both abstract and concrete methods, while interfaces (before Java 8) could only have abstract methods."
        },
        {
            question: "Which keyword is used to handle exceptions in Java?",
            answers: ["catch", "try", "throw", "All of the above"],
            correct: 3,
            explanation: "Java uses try, catch, throw, throws, and finally for exception handling."
        },
        {
            question: "What is polymorphism in Java?",
            answers: ["Multiple inheritance", "One interface, multiple implementations", "Method overloading", "Data hiding"],
            correct: 1,
            explanation: "Polymorphism allows one interface to be used for a general class of actions, with specific implementations varying."
        },
        {
            question: "Which collection is synchronized in Java?",
            answers: ["ArrayList", "Vector", "HashMap", "HashSet"],
            correct: 1,
            explanation: "Vector is synchronized (thread-safe) while ArrayList is not."
        },
        {
            question: "What is the purpose of the 'super' keyword?",
            answers: ["To call parent constructor", "To access parent class members", "To refer to parent class", "All of the above"],
            correct: 3,
            explanation: "The 'super' keyword is used to refer to the immediate parent class object, call parent constructors, and access parent class members."
        },
        {
            question: "Which method must be implemented when implementing Runnable interface?",
            answers: ["start()", "run()", "execute()", "thread()"],
            correct: 1,
            explanation: "The run() method must be implemented when implementing the Runnable interface."
        },
        {
            question: "What is garbage collection in Java?",
            answers: ["Manual memory management", "Automatic memory management", "Error handling", "Performance optimization"],
            correct: 1,
            explanation: "Garbage collection automatically manages memory by freeing up unused objects."
        },
        {
            question: "Which keyword is used to define a package in Java?",
            answers: ["package", "import", "namespace", "module"],
            correct: 0,
            explanation: "The 'package' keyword is used to define a package in Java."
        },
        {
            question: "What is method overriding in Java?",
            answers: ["Same method in different classes", "Redefining parent class method in child class", "Multiple methods with same name", "Calling parent method"],
            correct: 1,
            explanation: "Method overriding is redefining a parent class method in the child class with the same signature."
        },
        {
            question: "Which wrapper class is used for int primitive type?",
            answers: ["Int", "Integer", "Number", "Wrapper"],
            correct: 1,
            explanation: "Integer is the wrapper class for the int primitive type in Java."
        }
    ],
    
    cpp: [
        {
            question: "Which header file is required for input/output operations in C++?",
            answers: ["<stdio.h>", "<iostream>", "<conio.h>", "<fstream>"],
            correct: 1,
            explanation: "<iostream> header is required for standard input/output operations in C++."
        },
        {
            question: "What is the correct syntax to declare a pointer in C++?",
            answers: ["int ptr;", "int *ptr;", "int &ptr;", "pointer int ptr;"],
            correct: 1,
            explanation: "int *ptr; is the correct syntax to declare a pointer to an integer."
        },
        {
            question: "Which operator is used for dynamic memory allocation in C++?",
            answers: ["malloc", "new", "alloc", "create"],
            correct: 1,
            explanation: "The 'new' operator is used for dynamic memory allocation in C++."
        },
        {
            question: "What is the difference between struct and class in C++?",
            answers: ["No difference", "struct members are public by default, class members are private", "struct is for data, class is for functions", "struct cannot have constructors"],
            correct: 1,
            explanation: "In struct, members are public by default; in class, they are private by default."
        },
        {
            question: "Which keyword is used to define a constant in C++?",
            answers: ["final", "const", "constant", "readonly"],
            correct: 1,
            explanation: "The 'const' keyword is used to define constants in C++."
        },
        {
            question: "What is function overloading in C++?",
            answers: ["Multiple functions with same name and parameters", "Multiple functions with same name but different parameters", "Multiple functions with different names", "Inheriting functions from base class"],
            correct: 1,
            explanation: "Function overloading allows multiple functions with the same name but different parameters."
        },
        {
            question: "Which access specifier makes class members accessible to derived classes?",
            answers: ["public", "private", "protected", "internal"],
            correct: 2,
            explanation: "Protected members are accessible within the class and its derived classes."
        },
        {
            question: "What is the purpose of destructors in C++?",
            answers: ["To create objects", "To initialize objects", "To clean up resources when object is destroyed", "To copy objects"],
            correct: 2,
            explanation: "Destructors are called when an object is destroyed to clean up resources."
        },
        {
            question: "Which operator is used to access members of a class through a pointer?",
            answers: [".", "->", "::", "&"],
            correct: 1,
            explanation: "The -> operator is used to access members through a pointer."
        },
        {
            question: "What is virtual function in C++?",
            answers: ["A function that doesn't exist", "A function that can be overridden in derived classes", "A function with no parameters", "A static function"],
            correct: 1,
            explanation: "Virtual functions enable polymorphism by allowing derived classes to override base class methods."
        },
        {
            question: "What is the purpose of copy constructor in C++?",
            answers: ["To copy files", "To create a copy of an object", "To copy memory", "To copy functions"],
            correct: 1,
            explanation: "Copy constructor creates a new object as a copy of an existing object."
        },
        {
            question: "Which operator is used to deallocate memory in C++?",
            answers: ["delete", "free", "remove", "clear"],
            correct: 0,
            explanation: "The 'delete' operator is used to deallocate memory allocated with 'new'."
        },
        {
            question: "What is operator overloading in C++?",
            answers: ["Creating new operators", "Giving additional meanings to operators", "Overriding operators", "Deleting operators"],
            correct: 1,
            explanation: "Operator overloading allows giving additional meanings to operators for user-defined types."
        },
        {
            question: "Which header file is needed for string operations in C++?",
            answers: ["<string.h>", "<string>", "<cstring>", "<str>"],
            correct: 1,
            explanation: "<string> header is needed for C++ string class operations."
        },
        {
            question: "What is a pure virtual function in C++?",
            answers: ["A function with no implementation", "A virtual function assigned to 0", "An abstract function", "All of the above"],
            correct: 3,
            explanation: "A pure virtual function is a virtual function assigned to 0, making the class abstract."
        },
        {
            question: "Which keyword is used for inheritance in C++?",
            answers: ["inherit", "extends", ":", "derives"],
            correct: 2,
            explanation: "The colon (:) is used to specify inheritance in C++."
        },
        {
            question: "What is the scope resolution operator in C++?",
            answers: [".", "->", "::", "&"],
            correct: 2,
            explanation: "The scope resolution operator (::) is used to access global variables and class members."
        },
        {
            question: "Which type of inheritance is not supported in C++?",
            answers: ["Single", "Multiple", "Multilevel", "All are supported"],
            correct: 3,
            explanation: "C++ supports single, multiple, multilevel, hierarchical, and hybrid inheritance."
        },
        {
            question: "What is a template in C++?",
            answers: ["A design pattern", "A generic programming feature", "A class type", "A function type"],
            correct: 1,
            explanation: "Templates are a generic programming feature that allows writing code for any data type."
        },
        {
            question: "Which keyword is used to prevent inheritance of a class?",
            answers: ["sealed", "final", "private", "protected"],
            correct: 1,
            explanation: "The 'final' keyword (C++11) prevents a class from being inherited."
        }
    ],
    dsa: [
        {
            question: "What is the time complexity of binary search?",
            answers: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
            correct: 1,
            explanation: "Binary search divides the search space in half with each iteration, resulting in O(log n) time complexity."
        },
        {
            question: "Which data structure uses LIFO (Last In First Out) principle?",
            answers: ["Queue", "Stack", "Array", "Linked List"],
            correct: 1,
            explanation: "Stack follows LIFO principle where the last element added is the first one to be removed."
        },
        {
            question: "What is the worst-case time complexity of Quick Sort?",
            answers: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"],
            correct: 2,
            explanation: "Quick Sort has O(n²) worst-case complexity when the pivot is always the smallest or largest element."
        },
        {
            question: "Which traversal technique is used in Depth First Search?",
            answers: ["Level order", "Breadth first", "Stack-based", "Queue-based"],
            correct: 2,
            explanation: "DFS uses a stack-based approach (either explicit stack or recursion stack) to traverse deeper into the graph first."
        },
        {
            question: "What is a balanced binary tree?",
            answers: ["Tree with equal left and right subtrees", "Tree where height difference between left and right subtrees is at most 1", "Tree with all nodes filled", "Tree with no null nodes"],
            correct: 1,
            explanation: "A balanced binary tree has the height difference between left and right subtrees at most 1 for every node."
        },
        {
            question: "Which algorithm is used to find the shortest path in a graph?",
            answers: ["DFS", "BFS", "Dijkstra's Algorithm", "Kruskal's Algorithm"],
            correct: 2,
            explanation: "Dijkstra's Algorithm finds the shortest path from a source node to all other nodes in a weighted graph."
        },
        {
            question: "What is the space complexity of merge sort?",
            answers: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            correct: 2,
            explanation: "Merge sort requires O(n) additional space for the temporary arrays used during merging."
        },
        {
            question: "Which data structure is used for implementing recursion?",
            answers: ["Queue", "Stack", "Array", "Tree"],
            correct: 1,
            explanation: "The call stack (a stack data structure) is used to manage function calls in recursion."
        },
        {
            question: "What is a hash collision?",
            answers: ["Two keys mapping to same hash value", "Hash table overflow", "Invalid hash function", "Memory allocation error"],
            correct: 0,
            explanation: "A hash collision occurs when two different keys produce the same hash value."
        },
        {
            question: "Which sorting algorithm has the best average-case time complexity?",
            answers: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
            correct: 2,
            explanation: "Merge Sort has O(n log n) average-case complexity, which is optimal for comparison-based sorting."
        },
        {
            question: "What is the primary advantage of a Hash Table over a Binary Search Tree (BST) for lookup operations?",
            answers: ["Ordered data storage", "Guaranteed O(log n) worst-case time", "Faster average-case lookup (O(1))", "Less memory usage"],
            correct: 2,
            explanation: "Hash tables offer O(1) average-case time complexity for lookup, insertion, and deletion, which is faster than BST's O(log n)."
        },
        {
            question: "In a Graph, what does BFS (Breadth-First Search) typically find?",
            answers: ["Shortest path in unweighted graphs", "Cycles in graphs", "Longest path in graphs", "Minimum Spanning Tree"],
            correct: 0,
            explanation: "BFS explores all the neighbor nodes at the present depth level before moving on to the nodes at the next depth level, effectively finding the shortest path in unweighted graphs."
        },
        {
            question: "Which of the following data structures is typically used to implement a 'Priority Queue'?",
            answers: ["Linked List", "Array", "Binary Heap", "Hash Map"],
            correct: 2,
            explanation: "A binary heap (min-heap or max-heap) is the most common and efficient data structure for implementing a priority queue due to its O(log n) insertion and deletion operations."
        },
        {
            question: "What is the process of visiting each node in a tree exactly once called?",
            answers: ["Searching", "Sorting", "Traversal", "Hashing"],
            correct: 2,
            explanation: "Traversal is the process of visiting (checking and/or updating) each node in a tree data structure exactly once."
        },
        {
            question: "What is dynamic programming primarily used for?",
            answers: ["Solving problems by breaking them into smaller, independent subproblems", "Optimizing memory usage in algorithms", "Solving problems with overlapping subproblems and optimal substructure", "Performing real-time calculations"],
            correct: 2,
            explanation: "Dynamic programming is an algorithmic technique for solving optimization problems by breaking them down into simpler subproblems and storing the results of those subproblems to avoid recomputing them."
        },
        {
            question: "Which data structure is best suited for implementing an Undo/Redo functionality in an application?",
            answers: ["Queue", "Stack", "Binary Tree", "Graph"],
            correct: 1,
            explanation: "A stack is ideal for Undo/Redo functionality because operations are pushed onto the stack, and undoing means popping the last operation (LIFO principle)."
        },
        {
            question: "What is the main characteristic of a 'Circular Linked List'?",
            answers: ["Nodes are sorted by value", "Each node points to two other nodes", "The last node points back to the first node", "It only allows insertion at the beginning"],
            correct: 2,
            explanation: "In a circular linked list, the last node of the list points back to the first node, forming a closed loop."
        },
        {
            question: "Which algorithm finds the Minimum Spanning Tree (MST) in a graph?",
            answers: ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Prim's or Kruskal's Algorithm", "Bellman-Ford Algorithm"],
            correct: 2,
            explanation: "Prim's Algorithm and Kruskal's Algorithm are two well-known greedy algorithms used to find the Minimum Spanning Tree of a connected, edge-weighted undirected graph."
        },
        {
            question: "What is 'memoization' in dynamic programming?",
            answers: ["Storing results of function calls and returning the cached result when the same inputs occur again", "Breaking down a problem into smaller subproblems", "Using a queue to manage function calls", "Iteratively solving problems from the base cases up"],
            correct: 0,
            explanation: "Memoization is an optimization technique used primarily in dynamic programming. It involves storing the results of expensive function calls and returning the cached result when the same inputs occur again."
        },
        {
            question: "In Big O notation, what does O(1) signify?",
            answers: ["Linear time complexity", "Logarithmic time complexity", "Constant time complexity", "Quadratic time complexity"],
            correct: 2,
            explanation: "O(1) (Constant time complexity) means that the time required to complete a function or algorithm does not depend on the size of the input data set."
        }
    ]
};
// Quiz Application Main Script
class QuizApp {
    constructor() {
        this.currentCategory = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.timer = null;
        this.timeLeft = 30;
        this.isTimerEnabled = true;
        this.questionsToShow = 10; // Number of questions to show randomly
        
        this.init();
    }
    
    init() {
        this.hideAllScreens();
        const categoryScreen = document.getElementById('categoryScreen');
        if (categoryScreen) {
            categoryScreen.style.display = 'block';
        }
    }
    
    hideAllScreens() {
        const screens = [
            'categoryScreen',
            'quizHeader', 
            'loadingScreen',
            'quizContent',
            'quizControls',
            'resultsContainer'
        ];
        
        screens.forEach(screenId => {
            const screen = document.getElementById(screenId);
            if (screen) {
                screen.style.display = 'none';
            }
        });
    }
    
    selectCategory(category) {
        if (!quizQuestions[category] || quizQuestions[category].length === 0) {
            alert(`No questions available for ${category} category. Please add questions first.`);
            return;
        }
        
        this.currentCategory = category;
        this.showLoadingScreen();
        
        setTimeout(() => {
            this.startQuiz();
        }, 1500);
    }
    
    showLoadingScreen() {
        this.hideAllScreens();
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
        }
    }
    
    // Select random questions from the available pool
    selectRandomQuestions(questions, count) {
        const shuffled = [...questions];
        this.shuffleArray(shuffled);
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }
    
    startQuiz() {
        // Get all questions for the category
        const allQuestions = [...quizQuestions[this.currentCategory]];
        
        // Select random questions (5 from 10, or whatever is available)
        this.currentQuestions = this.selectRandomQuestions(allQuestions, this.questionsToShow);
        
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        
        this.hideAllScreens();
        this.setupQuizHeader();
        
        const elementsToShow = ['quizHeader', 'quizContent'];
        elementsToShow.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = 'block';
            }
        });
        
        const quizControls = document.getElementById('quizControls');
        if (quizControls) {
            quizControls.style.display = 'flex';
        }
        
        this.displayQuestion();
        this.updateProgress();
    }
    
    setupQuizHeader() {
        const categoryNames = {
            general: 'General Knowledge',
            javascript: 'JavaScript',
            react: 'React',
            java: 'Java',
            cpp: 'C++',
            dsa: 'DSA'
        };
        
        const categoryTitle = document.getElementById('categoryTitle');
        const categorySubtitle = document.getElementById('categorySubtitle');
        
        if (categoryTitle) {
            categoryTitle.textContent = categoryNames[this.currentCategory] || this.currentCategory;
        }
        
        if (categorySubtitle) {
            categorySubtitle.textContent = `Test your ${categoryNames[this.currentCategory] || this.currentCategory} knowledge`;
        }
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const quizContent = document.getElementById('quizContent');
        
        if (!quizContent || !question) return;
        
        quizContent.innerHTML = `
            <div class="question-container">
                <div class="question-header">
                    <div class="question-number">${this.currentQuestionIndex + 1}</div>
                    <h2 class="question-text">${question.question}</h2>
                </div>
                <div class="answers-container">
                    ${question.answers.map((answer, index) => `
                        <div class="answer-option" onclick="quizApp.selectAnswer(${index})">
                            <input type="radio" id="answer${index}" name="answer" value="${index}">
                            <label for="answer${index}">${answer}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        this.updateControls();
        this.startTimer();
    }
    
    selectAnswer(answerIndex) {
        // Remove previous selections
        document.querySelectorAll('.answer-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Add selection to clicked option
        const selectedOption = document.querySelectorAll('.answer-option')[answerIndex];
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // Update the radio button
        const radioButton = document.getElementById(`answer${answerIndex}`);
        if (radioButton) {
            radioButton.checked = true;
        }
        
        // Enable next button
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
    }
    
    nextQuestion() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (!selectedAnswer) {
            alert('Please select an answer before proceeding.');
            return;
        }
        
        this.clearTimer();
        
        const answerValue = parseInt(selectedAnswer.value);
        this.userAnswers[this.currentQuestionIndex] = answerValue;
        
        // Show correct/incorrect feedback
        this.showAnswerFeedback(answerValue);
        
        setTimeout(() => {
            this.currentQuestionIndex++;
            
            if (this.currentQuestionIndex >= this.currentQuestions.length) {
                this.showResults();
            } else {
                this.displayQuestion();
                this.updateProgress();
            }
        }, 2000);
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.clearTimer();
            this.currentQuestionIndex--;
            this.displayQuestion();
            this.updateProgress();
        }
    }
    
    showAnswerFeedback(selectedAnswer) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.answer-option');
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedAnswer && index !== question.correct) {
                option.classList.add('incorrect');
            }
            option.style.pointerEvents = 'none';
        });
        
        // Show explanation
        const quizContent = document.getElementById('quizContent');
        if (quizContent && question.explanation) {
            const explanationHtml = `
                <div class="explanation">
                    <div class="explanation-content ${selectedAnswer === question.correct ? 'correct' : 'incorrect'}">
                        <strong>${selectedAnswer === question.correct ? 'Correct!' : 'Incorrect'}</strong>
                        ${question.explanation}
                    </div>
                </div>
            `;
            quizContent.insertAdjacentHTML('beforeend', explanationHtml);
        }
        
        // Update score
        if (selectedAnswer === question.correct) {
            this.score++;
        }
        
        // Disable controls temporarily
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');
        if (nextBtn) nextBtn.disabled = true;
        if (prevBtn) prevBtn.disabled = true;
    }
    
    startTimer() {
        if (!this.isTimerEnabled) return;
        
        this.timeLeft = 30;
        const timerElement = document.getElementById('timer');
        const timeLeftElement = document.getElementById('timeLeft');
        
        if (timerElement) {
            timerElement.style.display = 'flex';
            timerElement.classList.remove('warning');
        }
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            if (timeLeftElement) {
                timeLeftElement.textContent = this.timeLeft;
            }
            
            if (this.timeLeft <= 10 && timerElement) {
                timerElement.classList.add('warning');
            }
            
            if (this.timeLeft <= 0) {
                this.handleTimeUp();
            }
        }, 1000);
    }
    
    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.style.display = 'none';
        }
    }
    
    handleTimeUp() {
        this.clearTimer();
        
        // Auto-select no answer (mark as incorrect)
        this.userAnswers[this.currentQuestionIndex] = -1;
        
        // Show timeout feedback
        const quizContent = document.getElementById('quizContent');
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Highlight correct answer
        const options = document.querySelectorAll('.answer-option');
        if (options[question.correct]) {
            options[question.correct].classList.add('correct');
        }
        
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Show explanation
        if (quizContent && question.explanation) {
            const explanationHtml = `
                <div class="explanation">
                    <div class="explanation-content incorrect">
                        <strong>Time's up!</strong>
                        ${question.explanation}
                    </div>
                </div>
            `;
            quizContent.insertAdjacentHTML('beforeend', explanationHtml);
        }
        
        setTimeout(() => {
            this.currentQuestionIndex++;
            
            if (this.currentQuestionIndex >= this.currentQuestions.length) {
                this.showResults();
            } else {
                this.displayQuestion();
                this.updateProgress();
            }
        }, 2000);
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }
    
    updateControls() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }
        
        if (nextBtn) {
            nextBtn.disabled = true;
            
            if (this.currentQuestionIndex === this.currentQuestions.length - 1) {
                nextBtn.textContent = 'Finish Quiz';
            } else {
                nextBtn.textContent = 'Next';
            }
        }
    }
    
    showResults() {
        this.clearTimer();
        this.hideAllScreens();
        
        const resultsContainer = document.getElementById('resultsContainer');
        const scoreDisplay = document.getElementById('scoreDisplay');
        const performanceMessage = document.getElementById('performanceMessage');
        const performanceDetails = document.getElementById('performanceDetails');
        
        if (!resultsContainer) return;
        
        const percentage = Math.round((this.score / this.currentQuestions.length) * 100);
        
        if (scoreDisplay) {
            scoreDisplay.textContent = `${this.score}/${this.currentQuestions.length} (${percentage}%)`;
        }
        
        let message = '';
        if (percentage >= 90) {
            message = 'Excellent! You\'re a true expert!';
        } else if (percentage >= 80) {
            message = 'Great job! You did very well!';
        } else if (percentage >= 70) {
            message = 'Good work! You have solid knowledge!';
        } else if (percentage >= 60) {
            message = 'Not bad! There\'s room for improvement!';
        } else {
            message = 'Keep studying! You\'ll do better next time!';
        }
        
        if (performanceMessage) {
            performanceMessage.textContent = message;
        }
        
        // Show detailed review
        if (performanceDetails) {
            let reviewHtml = '<h3>Question Review:</h3>';
            this.currentQuestions.forEach((question, index) => {
                const userAnswer = this.userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                const userAnswerText = userAnswer >= 0 ? question.answers[userAnswer] : 'No answer';
                const correctAnswerText = question.answers[question.correct];
                
                reviewHtml += `
                    <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                        <div class="review-question">${index + 1}. ${question.question}</div>
                        <div class="review-answers">
                            <div class="user-answer">Your answer: ${userAnswerText}</div>
                            <div class="correct-answer">Correct answer: ${correctAnswerText}</div>
                        </div>
                    </div>
                `;
            });
            
            performanceDetails.innerHTML = reviewHtml;
        }
        
        resultsContainer.style.display = 'block';
    }
    
    restartQuiz() {
        this.init();
    }
    
    toggleTimer() {
        this.isTimerEnabled = !this.isTimerEnabled;
        const timerToggle = document.getElementById('timerToggle');
        if (timerToggle) {
            timerToggle.textContent = this.isTimerEnabled ? 'Disable Timer' : 'Enable Timer';
        }
        
        if (!this.isTimerEnabled) {
            this.clearTimer();
        }
    }
    
    // Method to set number of questions to show
    setQuestionCount(count) {
        this.questionsToShow = count;
    }
    
    // Utility method to add questions programmatically
    addQuestion(category, questionData) {
        if (!quizQuestions[category]) {
            quizQuestions[category] = [];
        }
        
        // Validate question format
        if (questionData.question && questionData.answers && 
            Array.isArray(questionData.answers) && 
            typeof questionData.correct === 'number' &&
            questionData.correct >= 0 && 
            questionData.correct < questionData.answers.length) {
            
            quizQuestions[category].push(questionData);
            return true;
        }
        
        console.error('Invalid question format:', questionData);
        return false;
    }
    
    // Utility method to get available categories
    getAvailableCategories() {
        return Object.keys(quizQuestions).filter(category => 
            quizQuestions[category] && quizQuestions[category].length > 0
        );
    }
    
    // Utility method to get question count for a category
    getQuestionCount(category) {
        return quizQuestions[category] ? quizQuestions[category].length : 0;
    }
}

// Initialize the quiz app when the page loads
let quizApp;
document.addEventListener('DOMContentLoaded', function() {
    quizApp = new QuizApp();
});

// Helper functions that can be called from HTML
function selectCategory(category) {
    if (quizApp) {
        quizApp.selectCategory(category);
    }
}

function nextQuestion() {
    if (quizApp) {
        quizApp.nextQuestion();
    }
}

function previousQuestion() {
    if (quizApp) {
        quizApp.previousQuestion();
    }
}

function restartQuiz() {
    if (quizApp) {
        quizApp.restartQuiz();
    }
}

function toggleTimer() {
    if (quizApp) {
        quizApp.toggleTimer();
    }
}