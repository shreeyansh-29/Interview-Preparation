//Need to find mutual friends

const mapping = {
  a: ["b", "c"],
  b: ["d", "g"],
  d: ["p", "q"],
  l: ["x", "y"],
};

const mutualFriends = (mapping, person) => {
  const friendsList = mapping[person];

  if (friendsList) {
    const output = [...friendsList];

    for (let entry of friendsList) {
      let mutualFriendsList = mutualFriends(mapping, entry);
      output.push(...mutualFriendsList);
    }

    return output;
  }

  return [];
};
console.log(mutualFriends(mapping, "a"));

// output
// [
//     "b",
//     "c",
//     "d",
//     "g",
//     "p",
//     "q"
// ]
