function firstWord(str) {
    // Trim leading spaces and check for an empty string
    if (str.trim() === '') {
        return '';
    }
    
    // Find the index of the first space
    let spaceIndex = str.indexOf(' ');
    
    // If there is no space, return the entire string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Otherwise, return the substring from the start to the first space
    return str.slice(0, spaceIndex);
}
