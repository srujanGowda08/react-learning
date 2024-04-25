function ToDoItem2() {
  let TodoName = " Go To College";
  let TodoDate = "8/6/2024";
  return (
    <div class="row meRow">
      <div class="col-6"> {TodoName}</div>
      <div class="col-4">{TodoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger meBtn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem2;
