document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
});
function changeText(value) {
    var div = document.getElementById("div");
    var text = " ";
    if (value == 1){ 
        text += " <b>Pizza menu</b>";
    text +="\n1. Margherita -₹199 \n2. Meat Lover's - ₹399\n3. BBQ Chicken - ₹349\n4. Veggie Delight - ₹449";
    }
    if (value == 2) text += "<b>Pasta Menu</b>\n1. Spaghetti Aglio e Olio -₹299\n2. Fettuccine Alfredo -₹349\n3. Penne alla Vodka -₹399\n4. Linguine with Clams -₹449\n5. Lasagna Bolognese -₹499";
    if (value == 3) text += "<b>Burger Menu</b>\n1. Classic Cheeseburger -₹249\n2. Bacon BBQ Burger -₹349\n3. Mushroom Swiss Burger -₹349\n4. Spicy Southwestern Burger -₹399\n5. Gourmet Wagyu Burger -₹599";
    div.innerHTML = text;
}
