const services = [
  {
    name: "Corte",
    description: "Corte personalizado y detallado.",
    price: "$XX.XXX",
  },
  {
    name: "Corte + Barba",
    description: "Corte completo acompañado de arreglo de barba.",
    price: "$XX.XXX",
  },
  {
    name: "Barba",
    description: "Perfilado y arreglo de barba.",
    price: "$XX.XXX",
  },
];

const whatsappNumber = "543442505868";

function whatsappLink(service?: string) {
  const message = service
    ? `Hola! Quiero agendar un turno para ${service} en District Barber.`
    : "Hola! Quiero agendar un turno en District Barber.";

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="text-xl font-black tracking-tight">
            DISTRICT<span className="text-white/40">.</span>
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-950"
          >
            Reservar turno
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-[90vh] items-center overflow-hidden px-5 pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.10),transparent_35%)]" />

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Barbería · Concepción del Uruguay
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-8xl">
              DISTRICT
              <br />
              BARBER
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
              Tu estilo, tu corte, tu momento.
              <br />
              Agendá tu turno y vení a vivir la experiencia District.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-4 text-center font-bold text-zinc-950"
              >
                Agendá tu turno →
              </a>

              <a
                href="#servicios"
                className="rounded-full border border-white/15 px-7 py-4 text-center font-bold"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              Servicios
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Elegí tu estilo.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex min-h-[220px] flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black">{service.name}</h3>

                    <p className="mt-4 leading-7 text-white/50">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between gap-4">
                    <p className="text-xl font-black">{service.price}</p>

                    <a
                      href={whatsappLink(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold"
                    >
                      Reservar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              Horarios
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Encontrá tu momento.
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-start justify-between gap-5">
                <p className="font-bold">Lunes a miércoles</p>
                <p className="text-right text-white/60">
                  10:00 – 12:00
                  <br />
                  16:30 – 20:30
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-start justify-between gap-5">
                <p className="font-bold">Jueves a sábado</p>
                <p className="text-right text-white/60">
                  09:00 – 12:00
                  <br />
                  16:30 – 20:30
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between gap-5">
                <p className="font-bold">Domingo</p>
                <p className="text-white/40">Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
                  Visitá District
                </p>

                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Nos encontramos en
                </h2>

                <p className="mt-5 text-xl text-white/60">
                  Celia Torra 808
                </p>
              </div>

              <div className="md:text-right">
                <p className="text-sm uppercase tracking-widest text-white/40">
                  Turnos
                </p>

                <p className="mt-2 text-2xl font-black">
                  3442-505868
                </p>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-white px-7 py-4 font-bold text-zinc-950"
                >
                  Agendá por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-white/40">
              Galería
            </p>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Trabajos District.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
              >
                <div className="flex h-full items-center justify-center text-sm text-white/20">
                  Foto {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white p-8 text-zinc-950 sm:p-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-zinc-500">
                District Barber
              </p>

              <h2 className="mt-3 max-w-xl text-4xl font-black tracking-tight sm:text-5xl">
                ¿Listo para tu próximo corte?
              </h2>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-zinc-950 px-7 py-4 text-center font-bold text-white"
            >
              Reservá tu turno →
            </a>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 District Barber</p>
          <p>Celia Torra 808 · Concepción del Uruguay</p>
        </div>
      </footer>
    </main>
  );
}
