import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import Category from "@/models/CategoryModel";

export async function POST(request) {
  try {
    await connectDB();
    const { name, slug, description } = await request.json();
    // Input validation
    if (!name || !slug) {
      return NextResponse.json(
        { message: "Name and Slug are required" },
        { status: 400 }
      );
    }
    // Check existing category
    const existingCategory = await Category.findOne({ slug });
    if (existingCategory) {
      return NextResponse.json(
        { message: "Category already exists" },
        { status: 409 }
      );
    }
    const newCategory = new Category({
      name,
      slug,
      description,
    });
    await newCategory.save();
    return NextResponse.json(
      { message: "Category added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("error during add category", error);
    return NextResponse.json(
      { message: "An error occurred during add category" },
      { status: 500 }
    );
  }
}
