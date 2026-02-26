const getStoredBook = () => {
  const storedBookStringify = localStorage.getItem("readList");
  if (storedBookStringify) {
    const storedBookIds = JSON.parse(storedBookStringify);
    return storedBookIds;
  }
  return [];
};

const addToStoredDB = (id) => {
  const storedBookIds = getStoredBook();
  if (storedBookIds.includes(id)) {
    alert("This book is already stored in LDB");
    return;
  } else {
    storedBookIds.push(id);
    const stringifyIds = JSON.stringify(storedBookIds);
    localStorage.setItem("readList", stringifyIds);
    // console.log(typeof stringifyIds);
  }
};

const removeStoredDB = (id) => {
  const storedBookIds = getStoredBook();
  const remainingBookIds = storedBookIds.filter((bookId) => bookId !== id);
  localStorage.setItem("readList", JSON.stringify(remainingBookIds));
};

export { addToStoredDB, getStoredBook, removeStoredDB };
