<div className="flex h-screen">
  <aside className="bg-[var(--paper)] w-72 shadow-lg p-4">
    <h1 className="font-bold text-2xl" style={{ fontFamily: "Fraunces, serif" }}>Joke Generator</h1>
    <nav className="mt-4">
      {nav.map((item, index) => (
        <a key={index} href={item.to} className="flex items-center p-2 hover:bg-[var(--line)] rounded-lg transition">
          <span className="mr-2">{item.icon}</span>
          {item.label}
        </a>
      ))}
    </nav>
    <footer className="mt-4 text-sm text-center text-[var(--muted)]">
      <a href="https://freeappstore.online" className="hover:underline">Visit FreeAppStore</a>
    </footer>
  </aside>
  <main className="flex-1 p-4">{children}</main>
</div>
