import type { APIRoute } from 'astro';

type ContactRequestBody = {
  name: string;
  email: string;
  message: string;
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Email check
    if (!email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Logging the submission on the worker node
    console.log('Contact form submission received:', { name, email, message });

    return new Response(
      JSON.stringify({ success: true, message: 'Message received successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
