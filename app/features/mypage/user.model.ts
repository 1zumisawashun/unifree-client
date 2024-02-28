import { z } from "zod";

// react-hook-form
export const zUpsertUser = z.object({
  displayName: z
    .string()
    .min(1, { message: "入力は必須です" })
    .max(50, { message: "50文字以下で入力してください" }), // 必須・50文字以内
  university: z
    .string()
    .min(1, { message: "入力は必須です" })
    .max(50, { message: "50文字以下で入力してください" }), // 必須・50文字以内
  faculty: z
    .string()
    .min(1, { message: "入力は必須です" })
    .max(50, { message: "50文字以下で入力してください" }), // 必須・50文字以内
  department: z
    .string()
    .min(1, { message: "入力は必須です" })
    .max(50, { message: "50文字以下で入力してください" }), // 必須・50文字以内
});

export const userEntity = {
  displayName: "",
  university: "",
  faculty: "",
  department: "",
};

export type UpsertUser = z.infer<typeof zUpsertUser>;
