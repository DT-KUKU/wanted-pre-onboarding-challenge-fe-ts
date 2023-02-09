interface Itodo {
  id: number;
  content: string;
  success: boolean;
  category: string;
  tag?: string[];
}

function CreateTodo({
  content,
  category,
  tag,
}: Pick<Itodo, "content" | "category" | "tag">) {}

function SelectAllTodo() {}

function SelectTodo(id: Pick<Itodo, "id">) {}

function UpdateTodo({ id, content, success, category, tag }: Itodo) {}

function DeleteTodo(id: Pick<Itodo, "id">) {}

function DeleteAllTodo() {}

function DeleteTag({ id, tag }: Pick<Itodo, "id" | "tag">) {}

function DeleteAllTag(id: Pick<Itodo, "id">) {}
