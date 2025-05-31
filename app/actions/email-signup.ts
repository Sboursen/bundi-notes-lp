"use server"

export async function submitEmailToFormspree(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { success: false, error: "Email is required" }
  }

  try {
    const response = await fetch("https://formspree.io/f/xrbkzkpr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        _replyto: email,
      }),
    })

    if (response.ok) {
      return { success: true, message: "Successfully joined the waitlist!" }
    } else {
      return { success: false, error: "Failed to submit. Please try again." }
    }
  } catch (error) {
    return { success: false, error: "Network error. Please try again." }
  }
}
