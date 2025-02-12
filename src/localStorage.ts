/* eslint-disable @typescript-eslint/no-explicit-any */
type LSKey = string;
type LSValue = any;

const ls = (() => {
  const addItem = (key: LSKey, value: LSValue): void => {
    if (!key || value === undefined) {
      throw new Error("Key and value are required");
    }
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    } catch (error) {
      console.error("Failed to add item to localStorage:", error);
    }
  };

  const removeItem = (key: LSKey): void => {
    if (!key) {
      throw new Error("Key is required");
    }
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Failed to remove item from localStorage:", error);
    }
  };

  const getItem = (key: LSKey): Promise<LSValue | null> => {
    return new Promise((resolve, reject) => {
      if (!key) {
        reject(new Error("Key is required"));
      }
      try {
        const value = localStorage.getItem(key);
        resolve(value ? JSON.parse(value) : null);
      } catch (error) {
        console.error("Failed to get item from localStorage:", error);
        reject(error);
      }
    });
  };

  const clear = (): void => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Failed to clear localStorage:", error);
    }
  };

  return {
    addItem,
    removeItem,
    getItem,
    clear,
  };
})();

export const setAuthToken = (value: any) => {
  ls.addItem("token", value);
};

export const getAuthToken = () => {
  return ls.getItem("token");
};

export const removeAuthToken = () => {
  return ls.removeItem("token");
};
