import { connectDB } from "@/lib/connectDB";
import Category from "@/models/CategoryModel";

export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find({});

    return new Response(JSON.stringify({ categories }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch categories" }),
      { status: 500 }
    );
  }
}
