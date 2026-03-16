import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"

// DELETE /api/events?id=...
export async function DELETE(req: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return new NextResponse("Missing event ID", { status: 400 })
    }

    // Delete associated bookings and wishlist items first (handled by Prisma cascade if configured)
    // For safety, we can delete them explicitly or rely on schema.
    await prisma.event.delete({
      where: { id }
    })

    return new NextResponse("Deleted", { status: 200 })
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
