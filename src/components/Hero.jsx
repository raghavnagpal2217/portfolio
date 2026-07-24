<motion.div variants={item} className="mt-10 flex items-center gap-4">
  {[
    { icon: FiLinkedin, href: profile.linkedin, label: 'LinkedIn' },
    { icon: SiLeetcode, href: profile.leetcode, label: 'LeetCode' },
    {
      icon: FiMail,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
      label: 'Email',
    },
  ].map(({ icon: Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface/60 text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent-light hover:shadow-glow"
    >
      <Icon size={18} />
    </a>
  ))}
</motion.div>