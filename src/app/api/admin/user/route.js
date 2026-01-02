import { connectDB } from "@/lib/connectDB";
import User from "@/models/UserModel";

export async function GET() {
  try {
    await connectDB();

    const users = await User.find({}).select("-password");

    return new Response(
      JSON.stringify({ users }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch users" }),
      { status: 500 }
    );
  }
}
