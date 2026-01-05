import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import User from "@/models/UserModel";

export async function PATCH(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    const trainer = await User.findById(id);

    if (!trainer) {
      return NextResponse.json(
        { message: "Trainer not found" },
        { status: 404 }
      );
    }

    trainer.isApproved = true;
    await trainer.save();

    return NextResponse.json({
      message: "Trainer approved successfully",
      trainer,
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
