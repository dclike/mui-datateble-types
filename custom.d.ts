import "mui-datatables";

declare module "mui-datatables" {
  interface MUISortOptions {
    name: string;
    direction: "asc" | "desc" | "none";
  }
}

export {};
