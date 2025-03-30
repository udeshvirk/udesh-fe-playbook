// HashTable class implementation
class HashTable {
  constructor(size = 50) {
    // Initialize buckets array with a fixed size
    this.buckets = new Array(size);
    this.size = size;
  }

  // Hash function to calculate the index for a given key
  hash(key) {
    // Simple hash function based on the length of the key
    return key.toString().length % this.size;
  }

  // Insert data into the hash table
  setItem(key, value) {
    const index = this.hash(key); // Calculate the index using the hash function

    // If no bucket exists at the index, initialize it as an empty array
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // Check if the key already exists in the bucket and update its value
    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        bucket[1] = value; // Update the value for the existing key
        return index;
      }
    }

    // If the key does not exist, add a new key-value pair
    this.buckets[index].push([key, value]);
    return index;
  }

  // Retrieve data from the hash table
  getItem(key) {
    const index = this.hash(key); // Calculate the index using the hash function

    // If no bucket exists at the index, return null
    if (!this.buckets[index]) return null;

    // Iterate through the bucket to find the key
    for (let bucket of this.buckets[index]) {
      if (bucket[0] === key) {
        return bucket[1]; // Return the value associated with the key
      }
    }

    // If the key is not found, return null
    return null;
  }
}

// Create an instance of the HashTable class
const hashTable = new HashTable();

// Insert data into the hash table
hashTable.setItem("bk101", "Data structures algorithms");
hashTable.setItem("bk108", "Data analytics");
hashTable.setItem("bk200", "Cyber security");
hashTable.setItem("bk259", "Business Intelligence");
hashTable.setItem("bk330", "S/W Development");

// Search data from the hash table
console.log(hashTable.getItem("bk101")); // Output: Data structures algorithms
console.log(hashTable.getItem("bk200")); // Output: Cyber security
console.log(hashTable.getItem("bk999")); // Output: null (key not found)