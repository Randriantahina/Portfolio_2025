import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: 'Email et message requis' }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'shanjeev24.apollon@gmail.com',
      subject: `Nouveau message de ${email}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Erreur lors de l’envoi' }), {
      status: 500,
    });
  }
}
