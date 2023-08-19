let fav_fruit : string[] = ['grapes','guava','banana','stawbery','apple'];
console.log(fav_fruit)
// Accessing elements of an array
let most_fav : string[] = [];

most_fav.push(fav_fruit.pop()!);
most_fav.push(fav_fruit.pop()!);
most_fav.push(fav_fruit.pop()!);
console.log(most_fav);

if (most_fav.includes('banana')) {
    console.log('You really like bananas!');
}

if (most_fav.includes('mango')) {
    console.log('You really like mangoes!');
}

if (most_fav.includes('stawbery')) {
    console.log('You really like strawberries!');
}

if (most_fav.includes('apple')) {
    console.log('You really like apples!');
}

if (most_fav.includes('orange')) {
    console.log('You really like oranges!');
}