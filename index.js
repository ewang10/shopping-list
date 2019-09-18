/*addItemHandler() handles when a user adds a new item
 to the shopping list.*/
function addItemHandler() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        const item = $("#shopping-list-entry").val();
        $(".shopping-list").append(`<li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);

          $("#shopping-list-entry").val("");
    });
}

/*deleteItemHandler() handles when a user clicks the "delete" button
to delete an item from the shopping list.*/
function deleteItemHandler() {
    $("ul").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });
}

/*checkUncheckItemHandler() handles when a user clicks the "check" button
to check/uncheck an item from the shopping list.*/
function checkUncheckItemHandler() {
    $("ul").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
}

/*shoppingListHandler() is the callback function when the page loads,
and activates all the other functions.*/
function shoppingListHandler() {
  addItemHandler();
  deleteItemHandler();
  checkUncheckItemHandler();
}

$(shoppingListHandler);
