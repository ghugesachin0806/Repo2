import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const CustomIndex = ({ onTagsChange }) => {
  const [tags, setTags] = useState([
    "Array", "String", "Hash Table", "Math", "Dynamic Programming", "Sorting", "Greedy", 
    "Depth-First Search", "Database", "Binary Search", "Breadth-First Search", "Tree", 
    "Matrix", "Bit Manipulation", "Two Pointers", "Binary Tree", "Heap (Priority Queue)", 
    "Prefix Sum", "Stack", "Simulation", "Graph", "Design", "Counting", "Sliding Window", 
    "Backtracking", "Union Find", "Enumeration", "Linked List", "Ordered Set", "Monotonic Stack", 
    "Trie", "Number Theory", "Divide and Conquer", "Recursion", "Bitmask", "Queue", 
    "Binary Search Tree", "Segment Tree", "Memoization", "Geometry", "Hash Function", 
    "Binary Indexed Tree", "Topological Sort", "String Matching", "Combinatorics", 
    "Rolling Hash", "Shortest Path", "Game Theory", "Interactive", "Data Stream", 
    "Brainteaser", "Monotonic Queue", "Randomized", "Merge Sort", "Iterator", 
    "Concurrency", "Doubly-Linked List", "Probability and Statistics", "Quickselect", 
    "Bucket Sort", "Suffix Array", "Minimum Spanning Tree", "Counting Sort", "Shell", 
    "Line Sweep", "Reservoir Sampling", "Strongly Connected Component", "Eulerian Circuit", 
    "Radix Sort", "Rejection Sampling", "c++", "java", "npm", "error", "DSA", "JDK", 
    "DP", "NodeJs", "Maths", "Marathi", "Hindi"
  ]);

  return (
    <Autocomplete
      multiple
      limitTags={5}
      id="multiple-limit-tags"
      options={tags}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField {...params} label="limitTags" placeholder="Favorites" />
      )}
      onChange={(_, newValue) => onTagsChange(newValue)}
      sx={{ width: '500px' }}
    />
  );
};

export default CustomIndex;
