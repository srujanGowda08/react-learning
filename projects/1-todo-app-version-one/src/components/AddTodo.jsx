function AddToDo() {
  return (
    <div class="row meRow">
      <div class="col-6">
        <input type="text" placeholder="Enter ToDo Here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success meBtn">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
