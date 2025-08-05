import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
});

export const categoryTable = pgTable("category", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const categoryRelations = relations(categoryTable, (params) => {
  return {
    products: params.many(productsTable),
  };
});

export const productsTable = pgTable("products", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  categoryId: uuid("category_id")
    .notNull()
    .references(() => categoryTable.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});


export const productVariantsTable = pgTable("product_variants", {
  id: uuid().primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .notNull()
    .references(() => productsTable.id),
    name: text().notNull(),
    slug: text().notNull().unique(),
    color: text().notNull(),
    priceIncents: integer("price_in_cents").notNull(),
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
}); 

export const productRelations = relations(productsTable, (params) => {
  return {
    category: params.one(categoryTable, {
      fields: [productsTable.categoryId],
      references: [categoryTable.id],
    }),
    variants: params.many(productVariantsTable)
  };
});

export const productVariantRelations = relations(productVariantsTable, (params)=>{
    return {
        product:params.one(productsTable,{
            fields:[productVariantsTable.productId],
            references:[productsTable.id]
        })
    }
})