// Quiz Questions Database
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
    
    startQuiz() {
        this.currentQuestions = [...quizQuestions[this.currentCategory]];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        
        this.shuffleArray(this.currentQuestions);
        
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
            dsa: 'Data Structures & Algorithms'
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