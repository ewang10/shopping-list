function addItemHandler() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        const item = $(this).find("#shopping-list-entry").val();
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

          //with item.val(""), I get an error saying 
          //item.val() is not a function?
          $(this).find("#shopping-list-entry").val("");
    });
}

function deleteItemHandler() {
    $("ul").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });
}

function checkUncheckItemHandler() {
    $("ul").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest(".shopping-item").toggleClass("shopping-item__checked");
    });
}

$(addItemHandler);
$(deleteItemHandler);
$(checkUncheckItemHandler);