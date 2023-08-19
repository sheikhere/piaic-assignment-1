function order_sandwich(...items:string[]){
    console.log("\nsandwich order summary");
    console.log(items.join(" , "));
    console.log('enjoy your sandwich');
    console.log("\n")

}
order_sandwich("salad","mayonise","tikka");
order_sandwich("chilli sauce","fajita","cuccumber","mayonise");
order_sandwich("sauce","chicken");

console.log("another way");

function make_Sandwich(items: string[]) {
    console.log("You ordered a sandwich with the following items:");
    for (const item of items) {
      console.log(item);
    }
  }
  make_Sandwich(["ham", "cheese", "lettuce", "tomato"]);
  make_Sandwich(["turkey", "avocado", "bacon"]);
  make_Sandwich(["peanut butter", "jelly"]);