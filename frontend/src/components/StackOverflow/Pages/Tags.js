import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


    const TagsData = [
        { name: "Array", data: "Arrays are a fundamental data structure in programming used to store a collection of elements of the same type. They offer constant-time access to elements using indices and are widely used in algorithms and applications for their simplicity and efficiency.", Qcount: "" },
  { name: "String", data: "Strings are sequences of characters, typically used to represent text. String manipulation is a common task in programming, involving operations such as concatenation, comparison, and substring extraction. Strings are utilized in various applications, from basic input/output operations to complex text processing algorithms.", Qcount: "" },
  { name: "Hash Table", data: "A hash table (or hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. Hash tables offer efficient insertion, deletion, and lookup operations, making them suitable for a wide range of applications requiring fast data retrieval based on keys.", Qcount: "" },
  { name: "Math", data: "Mathematics plays a crucial role in computer science and programming, providing the foundation for various algorithms and techniques. Math-related topics commonly encountered in programming include arithmetic operations, geometry, algebra, calculus, probability, and statistics.", Qcount: "" },
  { name: "Dynamic Programming", data: "Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once, storing its solution to avoid redundant computations. It is widely used in optimization problems, sequence alignment, and graph algorithms.", Qcount: "" },
  { name: "Sorting", data: "Sorting is the process of arranging elements in a specific order, typically in ascending or descending order based on a comparison function. Efficient sorting algorithms are essential for organizing data and facilitating quick search, retrieval, and analysis operations in various applications.", Qcount: "" },
  { name: "Greedy", data: "Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum solution. They are simple, efficient, and often used for optimization problems such as finding the shortest path, minimum spanning tree, or scheduling tasks.", Qcount: "" },
  { name: "Depth-First Search", data: "Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It is commonly used to search or traverse tree and graph data structures, determine connectivity, and find paths and cycles.", Qcount: "" },
  { name: "Database", data: "Databases are organized collections of data, typically stored and accessed electronically from a computer system. They are essential for managing and storing structured information efficiently, enabling data retrieval, manipulation, and analysis for various applications.", Qcount: "" },
  { name: "Binary Search", data: "Binary search is an efficient algorithm for finding a target value within a sorted array or list. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. Binary search is faster than linear search for large datasets.", Qcount: "" },
  { name: "Breadth-First Search", data: "Breadth-First Search (BFS) is a graph traversal algorithm that explores all vertices in a graph or tree level by level, starting from a chosen source vertex. BFS is often used to find the shortest path in unweighted graphs, identify connected components, and solve puzzles.", Qcount: "" },
  { name: "Tree", data: "A tree is a hierarchical data structure consisting of nodes connected by edges. Each node has a parent node and zero or more child nodes. Trees are widely used in computer science for representing hierarchical relationships, organizing data, and implementing various algorithms.", Qcount: "" },
  { name: "Matrix", data: "A matrix is a two-dimensional array of elements arranged in rows and columns. Matrices are commonly used in mathematics, computer graphics, scientific computing, and machine learning for representing and manipulating data, performing transformations, and solving linear equations.", Qcount: "" },
  { name: "Bit Manipulation", data: "Bit manipulation involves performing operations at the bit level to manipulate binary data efficiently. It is commonly used in low-level programming, cryptography, networking, and embedded systems for tasks such as setting or clearing bits, bitwise logical operations, and bit shifting.", Qcount: "" },
  { name: "Two Pointers", data: "The two pointers technique involves using two pointers to solve problems that require linear traversal of an array or list. It is often used to find pairs of elements that satisfy certain conditions, detect subarrays with a given sum, or perform in-place modifications.", Qcount: "" },
  { name: "Binary Tree", data: "A binary tree is a hierarchical data structure consisting of nodes, each of which has at most two children, referred to as the left child and the right child. Binary trees are widely used in computer science for representing hierarchical relationships, organizing data, and implementing various algorithms.", Qcount: "" },
  { name: "Heap (Priority Queue)", data: "A heap is a specialized tree-based data structure that satisfies the heap property, where each parent node is less than or equal to its child nodes (min heap) or greater than or equal to its child nodes (max heap). Heaps are commonly used to implement priority queues and heap sort algorithms.", Qcount: "" },
  { name: "Prefix Sum", data: "Prefix sum, also known as cumulative sum, is a technique for efficiently computing the sum of elements in a prefix (subarray) of an array. It precomputes and stores cumulative sums of array elements, allowing constant-time queries for subarray sums by subtracting two cumulative sums.", Qcount: "" },
  { name: "Stack", data: "A stack is a linear data structure that follows the Last In, First Out (LIFO) principle, where elements are inserted and removed from the top of the stack. Stacks are commonly used in algorithms and applications requiring last-in-first-out access, such as expression evaluation, function call management, and backtracking.", Qcount: "" },
  { name: "Simulation", data: "Simulation involves modeling real-world systems or processes using computer software to understand, predict, or optimize their behavior. It enables experimentation with different scenarios, analysis of complex systems, and evaluation of potential outcomes without real-world implementation.", Qcount: "" },
  { name: "Graph", data: "A graph is a collection of nodes (vertices) and edges that connect pairs of nodes. Graphs are widely used in computer science and real-world applications to model relationships between objects, represent networks and routes, solve optimization problems, and analyze complex systems.", Qcount: "" },
  { name: "Design", data: "Design encompasses the process of creating and planning the architecture, structure, and behavior of systems, products, or processes to meet specific requirements and objectives. It involves problem-solving, creativity, analysis, and decision-making to produce effective and efficient solutions.", Qcount: "" },
  { name: "Sliding Window", data: "The sliding window technique is used to solve problems that involve finding a substring, subarray, or a contiguous sequence of elements that satisfies certain conditions within a larger sequence. It optimizes the time complexity by maintaining a window of elements and adjusting it based on the problem requirements.", Qcount: "" },
  { name: "Backtracking", data: "Backtracking is a problem-solving technique used to find solutions incrementally by exploring all possible candidates in a systematic manner. It is often used for problems that involve searching for feasible solutions among a large number of possibilities, such as constraint satisfaction problems, puzzles, and optimization tasks.", Qcount: "" },
  { name: "Union Find", data: "Union-Find (Disjoint Set Union) is a data structure and algorithm used to solve problems related to disjoint sets and their union or merging operations. It efficiently maintains a collection of disjoint sets and supports operations such as finding the representative of a set and merging two sets together.", Qcount: "" },
  { name: "Enumeration", data: "Enumeration, also known as exhaustive search or brute force, is a problem-solving technique that involves systematically trying all possible solutions until the correct one is found. It is often used for small-scale problems or as a baseline approach for more sophisticated algorithms.", Qcount: "" },
  { name: "Linked List", data: "A linked list is a linear data structure consisting of a sequence of elements, called nodes, where each node points to the next node in the sequence. Linked lists are flexible and dynamic, allowing efficient insertion and deletion operations, but they may have slower access times compared to arrays for random access.", Qcount: "" },
  { name: "Ordered Set", data: "An ordered set is a data structure that maintains a sorted collection of elements with unique keys. It supports operations such as insertion, deletion, and search in logarithmic time complexity based on the ordering of elements. Ordered sets are commonly implemented using balanced binary search trees or hash tables with collision resolution.", Qcount: "" },
  { name: "Monotonic Stack", data: "A monotonic stack is a data structure used to efficiently solve problems that involve finding the next greater element, next smaller element, or maintaining a monotonic sequence of elements. It stores elements in non-decreasing or non-increasing order and allows constant-time access to the top element.", Qcount: "" },
  { name: "Trie", data: "A trie, also known as a prefix tree, is a tree-like data structure used to efficiently store and retrieve a set of strings or keys. It supports operations such as insertion, deletion, and search in O(L) time complexity, where L is the length of the key. Tries are commonly used in dictionary implementations, autocomplete systems, and string algorithms.", Qcount: "" },
  { name: "Number Theory", data: "Number theory is a branch of mathematics that studies the properties and relationships of integers, primes, and other special numbers. It has applications in various areas of computer science, including cryptography, algorithm design, and computational complexity theory.", Qcount: "" },
  { name: "Divide and Conquer", data: "Divide and conquer is a problem-solving paradigm that involves breaking a problem into smaller subproblems, solving each subproblem independently, and combining their solutions to solve the original problem. It is commonly used for algorithms such as merge sort, quicksort, and binary search.", Qcount: "" },
  { name: "Recursion", data: "Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem. It simplifies complex problems by breaking them down into smaller, more manageable subproblems. Recursion is commonly used for tree and graph traversal, divide and conquer algorithms, and backtracking.", Qcount: "" },
  { name: "Bitmask", data: "A bitmask is a sequence of bits used to represent or manipulate sets of binary flags or options. It enables efficient storage and manipulation of boolean values, such as turning flags on or off, checking for set bits, and performing bitwise logical operations.", Qcount: "" },
  { name: "Queue", data: "A queue is a linear data structure that follows the First In, First Out (FIFO) principle, where elements are inserted at the rear and removed from the front. Queues are commonly used in algorithms and applications requiring first-in-first-out access, such as scheduling tasks, managing resources, and implementing breadth-first search algorithms.", Qcount: "" },
  { name: "Binary Search Tree", data: "A binary search tree (BST) is a binary tree data structure with the property that the key in each node is greater than all keys in its left subtree and less than all keys in its right subtree. BSTs support efficient insertion, deletion, and search operations, making them suitable for implementing ordered sets and dictionaries.", Qcount: "" },
  { name: "Segment Tree", data: "A segment tree is a tree-like data structure used to efficiently answer range queries and update operations on a dynamic array or list. It divides the array into segments and stores precomputed information for each segment, allowing fast query and update operations such as finding the sum, minimum, maximum, or other associative function over a given range.", Qcount: "" },
  { name: "Memoization", data: "Memoization is an optimization technique used in dynamic programming to improve the efficiency of recursive algorithms by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It reduces redundant computations and improves the overall runtime of algorithms.", Qcount: "" },
  { name: "Geometry", data: "Geometry is a branch of mathematics that deals with the study of shapes, sizes, properties, and dimensions of objects in space. It has applications in computer graphics, computer-aided design (CAD), robotics, geographic information systems (GIS), physics, and engineering.", Qcount: "" },
  { name: "Hash Function", data: "A hash function is a mathematical function that maps data of arbitrary size to fixed-size values (hash codes or hash values), typically integers or bit arrays. Hash functions are used in various applications such as data storage, cryptographic hashing, hash tables, and digital signatures.", Qcount: "" },
  { name: "Binary Indexed Tree", data: "A Binary Indexed Tree (BIT), also known as a Fenwick tree, is a data structure that efficiently supports prefix sum queries and point updates on an array of numbers. It is used to solve problems involving cumulative frequency or sum queries over ranges of elements.", Qcount: "" },
  { name: "Topological Sort", data: "Topological sorting is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge from vertex u to vertex v, u comes before v in the ordering. It is used to schedule tasks, resolve dependencies, and detect cycles in directed graphs.", Qcount: "" },
  { name: "String Matching", data: "String matching is the process of finding occurrences of a pattern (substring) within a larger text (string). It is a fundamental operation in text processing, information retrieval, and bioinformatics, with applications in search engines, plagiarism detection, DNA sequencing, and more.", Qcount: "" },
  { name: "Combinatorics", data: "Combinatorics is a branch of mathematics that studies the enumeration, combination, and permutation of finite sets of objects. It has applications in probability theory, cryptography, network design, optimization, and algorithm analysis, among other fields.", Qcount: "" },
  { name: "Rolling Hash", data: "A rolling hash (also known as a sliding hash) is a hash function used to compute hash values of large strings or data streams by efficiently updating the hash value as new characters are added or removed. It is commonly used in string algorithms such as Rabin-Karp substring search and plagiarism detection.", Qcount: "" },
  { name: "Shortest Path", data: "The shortest path problem is to find the shortest path or distance between two vertices (nodes) in a weighted graph. It has applications in network routing, transportation planning, GPS navigation, and optimization, and is commonly solved using algorithms such as Dijkstra's algorithm and Bellman-Ford algorithm.", Qcount: "" },
  { name: "Game Theory", data: "Game theory is a branch of mathematics and economics that studies strategic interactions between rational decision-makers (players) in competitive situations. It has applications in economics, political science, biology, computer science, and artificial intelligence, and is used to analyze and model decision-making in various scenarios.", Qcount: "" },
  { name: "Interactive", data: "Interactive programming involves designing and implementing systems, applications, or interfaces that allow users to actively engage and interact with digital content or software in real-time. It encompasses user interfaces, graphical user interfaces (GUIs), web applications, games, simulations, and virtual reality (VR) experiences.", Qcount: "" },
  { name: "Data Stream", data: "A data stream is a sequence of data elements continuously generated or transmitted over time from various sources such as sensors, devices, networks, or software systems. Processing data streams involves real-time analysis, aggregation, filtering, and transformation to extract valuable insights and make timely decisions.", Qcount: "" },
  { name: "Brainteaser", data: "A brainteaser (or puzzle) is a type of problem or game that challenges one's critical thinking, logical reasoning, and problem-solving skills. Brainteasers come in various forms, including riddles, math problems, lateral thinking puzzles, and visual or spatial challenges, and are often used for entertainment, education, and cognitive training.", Qcount: "" },
  { name: "Monotonic Queue", data: "A monotonic queue is a data structure used to efficiently maintain a monotonic sequence (either non-decreasing or non-increasing) of elements and answer range queries over sliding windows. It is often used in algorithms for finding maximum or minimum values in sliding windows or solving other optimization problems.", Qcount: "" },
  { name: "Randomized", data: "Randomized algorithms use randomness or probability distributions as part of their logic or decision-making process to achieve their goals. They are used to solve problems that may have multiple valid solutions or where an exact deterministic solution is impractical or computationally expensive. Randomized algorithms have applications in optimization, cryptography, machine learning, and simulation.", Qcount: "" },
  { name: "Merge Sort", data: "Merge sort is a popular comparison-based sorting algorithm that follows the divide-and-conquer strategy to recursively divide the input array into smaller subarrays, sort them independently, and merge the sorted subarrays to produce the final sorted output. It is efficient, stable, and guarantees O(n log n) time complexity for sorting.", Qcount: "" },
  { name: "Iterator", data: "An iterator is an object or abstraction that provides a way to access elements of a collection sequentially without exposing its underlying representation. Iterators are used to traverse data structures such as arrays, lists, trees, and maps, and provide methods for accessing, iterating, and manipulating elements in a controlled manner.", Qcount: "" },
  { name: "Concurrency", data: "Concurrency is the ability of a system to execute multiple tasks or processes simultaneously, achieving the illusion of parallelism. Concurrent programming involves designing, implementing, and managing systems that can handle multiple tasks concurrently, ensuring proper synchronization, communication, and coordination between concurrent components.", Qcount: "" },
  { name: "Doubly-Linked List", data: "A doubly-linked list is a linear data structure consisting of a sequence of elements (nodes), where each node contains a reference to the next and previous nodes in the sequence. Doubly-linked lists allow efficient insertion and deletion operations at both ends of the list, but require more memory overhead compared to singly-linked lists.", Qcount: "" },
  { name: "Probability and Statistics", data: "Probability and statistics are branches of mathematics that deal with the analysis, interpretation, and modeling of random phenomena and uncertainty. They are widely used in various fields such as science, engineering, economics, finance, social sciences, and data analysis to make informed decisions, predict outcomes, and infer patterns from data.", Qcount: "" },
  { name: "Quickselect", data: "Quickselect is a selection algorithm used to find the k-th smallest (or largest) element in an unordered list. It is a variation of the quicksort algorithm and operates by partitioning the input array based on a pivot element until the desired element is found. Quickselect has an average-case time complexity of O(n), making it efficient for finding approximate solutions.", Qcount: "" },
  { name: "Bucket Sort", data: "Bucket sort is a distribution sort algorithm that divides the input array into a finite number of buckets, each of which is then sorted individually, either using a different sorting algorithm or recursively applying bucket sort. It is efficient when the input is uniformly distributed and the number of buckets is properly chosen.", Qcount: "" },
  { name: "Suffix Array", data: "A suffix array is a sorted array of all suffixes of a given string, typically used to efficiently solve string-related problems such as pattern matching, substring search, and longest common substring. Suffix arrays can be constructed in O(n log n) time complexity and support various string operations with low memory overhead.", Qcount: "" },
  { name: "Minimum Spanning Tree", data: "A minimum spanning tree (MST) of a connected, undirected graph is a subset of its edges that form a tree and connect all the vertices together with the minimum possible total edge weight. MSTs have applications in network design, clustering, and optimization, and can be found using algorithms such as Prim's algorithm and Kruskal's algorithm.", Qcount: "" },
  { name: "Counting Sort", data: "Counting sort is an integer sorting algorithm that works by determining the frequency of each distinct element in the input array and using this information to place elements directly into their sorted position. It has a linear time complexity of O(n+k), where n is the number of elements and k is the range of input values.", Qcount: "" },
  { name: "Shell", data: "Shell sort is an in-place comparison sort algorithm that extends the insertion sort algorithm by allowing the exchange of elements that are far apart. It works by sorting the elements at a specific interval, gradually reducing the interval until the entire array is sorted. Shell sort has a time complexity between O(n) and O(n^2)", Qcount: "" },

  { name: "Line Sweep", data: "Line sweep is a computational geometry algorithm that involves sweeping a line or plane across a set of geometric objects (such as points, segments, or rectangles) to solve various geometric problems efficiently. It is commonly used to find intersections, detect overlaps, compute closest pairs, and solve other spatial queries.", Qcount: "" },

  { name: "Reservoir Sampling", data: "Reservoir sampling is a family of randomized algorithms used to randomly select a sample of k items from a large or unknown population without replacement, where the size of the population or the number of items is not known in advance. It ensures that each item has an equal probability of being selected ", Qcount: "" },

  { name: "Strongly Connected Component", data: "A strongly connected component (SCC) of a directed graph is a maximal subgraph in which every vertex is reachable from every other vertex. SCCs have applications in network analysis, social network analysis, compiler optimization, and solving reachability problems ", Qcount: "" },
  
  { name: "Eulerian Circuit", data: "An Eulerian circuit, also known as an Eulerian cycle, is a path in a graph that visits every edge exactly once and returns to the starting vertex. It has applications in network design, circuit routing, and optimization, and can be found efficiently in Eulerian graphs using algorithms such as Hierholzer's algorithm......", Qcount: "" },
  { name: "Radix Sort", data: "Radix sort is a non-comparative integer sorting algorithm that sorts integers by processing individual digits or radix positions of the numbers in parallel. It is efficient for sorting integers with a fixed number of digits or a bounded range and has a linear time complexity of O(nk), ", Qcount: "" },
  { name: "Rejection Sampling", data: "Rejection sampling is a Monte Carlo method used to generate samples from a probability distribution by sampling from a simpler distribution and rejecting samples that do not satisfy certain criteria until a valid sample is obtained. It is widely used in statistics, physics, computational biology, and machine learning .", Qcount: "" },
  { name: "c++", data: "C++ is a general-purpose programming language known for its performance, efficiency, and versatility. It supports object-oriented, procedural, and generic programming paradigms and is widely used in systems programming, game development, embedded systems, high-performance computing, and scientific computing.", Qcount: "" },
  { name: "java", data: "Java is a high-level, class-based, object-oriented programming language known for its simplicity, portability, and robustness. It is widely used for developing desktop, web, mobile, and enterprise applications, as well as large-scale systems and platforms such as Android, enterprise servers, and cloud computing services.", Qcount: "" },
  { name: "npm", data: "npm (Node Package Manager) is the default package manager for Node.js, a popular JavaScript runtime environment. npm allows developers to install, share, and manage packages and dependencies for their Node.js projects, providing access to a vast ecosystem of open-source libraries, frameworks, and tools.", Qcount: "" },
  { name: "error", data: "In programming, an error (or exception) is an abnormal condition that occurs during the execution of a program, disrupting its normal flow and potentially causing it to terminate unexpectedly. Errors can be caused by various factors such as invalid input, resource exhaustion, logical errors, or runtime environment issues.", Qcount: "" },
  { name: "JDK", data: "The Java Development Kit (JDK) is a software development kit used for developing Java applications and applets. It includes a set of tools such as the Java compiler (javac), runtime interpreter (java), debugger (jdb), and other utilities for writing, compiling, testing, and debugging Java programs.  ", Qcount: "" },
  { name: "DP", data: "Dynamic programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once, storing its solution to avoid redundant computations. It is widely used in optimization problems, sequence alignment, and graph algorithms.", Qcount: "" },
  
  
    ];
    
const Tags = () => {

    
  return (
    <Container>
        <Typography variant="h6" gutterBottom>
            Tags
        </Typography>
        

        <Typography variant="body2" gutterBottom>
            A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.
        </Typography>
        <Grid container spacing={2}>
        
        {
            TagsData.map((topic)=>(
                <Grid item xs={3}>

                <Card variant="outlined">

                    
                    <CardContent>
                    
                
                    <Stack spacing={2}>
                    <Typography variant="h6" gutterBottom >
     
                        <Chip label={topic.name}  clickable/>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                            {topic.data}
                    </Typography>
                    </Stack>
                    <Grid container spacing={2}>
                            {/* <Grid item xs={4}> 
                            <Typography variant="caption" display="block" gutterBottom>
                                Total Questions {topic.Qcount}    
                            </Typography>
                            
                            </Grid>
                            <Grid item xs={8}> 
                            <Typography variant="caption" display="block" gutterBottom>
                                Total Questions    
                            </Typography>
                            </Grid> */}
                    </Grid>
                    </CardContent>
                </Card>  
        </Grid>
            ))
        }
        
        
        
      </Grid>
        
    </Container>
    
  )
}

export default Tags
