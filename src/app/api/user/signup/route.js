import { connectDB } from "@/lib/connectDB";
import User from "@/models/UserModel";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();

    const { name, email, password } = await request.json();

    // Input validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check existing user
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create user
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // return  response
    return NextResponse.json(
      { message: "Signup successful", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json(
      { message: "An error occurred during signup" },
      { status: 500 }
    );
  }
}
