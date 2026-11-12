export default function ProfilePage() {
  const links = [
    {
      title: "GitHub",
      href: "https://github.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Email 보내기",
      href: "mailto:contact@example.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      title: "Blog / Velog",
      href: "https://velog.io",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 px-4 py-16">
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        {/* 프로필 아바타 */}
        <div className="relative mb-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 p-[3px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent select-none">
                별
              </span>
            </div>
          </div>
          <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full" title="Online" />
        </div>

        {/* 이름 */}
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          오한별
        </h1>

        {/* 배지 태그 */}
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/50">
            🎓 대학생
          </span>
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200/60 dark:border-sky-800/50">
            💻 바이브 코딩
          </span>
        </div>

        {/* 소개글 */}
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xs break-keep">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 링크 목록 */}
        <div className="w-full mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full px-5 py-3.5 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium text-sm shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                  {link.icon}
                </span>
                <span>{link.title}</span>
              </div>
              <svg
                className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 group-hover:translate-x-0.5 transition-all"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          ))}
        </div>

        {/* 하단 푸터 */}
        <footer className="mt-12 text-xs text-zinc-400 dark:text-zinc-500">
          © 2026 오한별. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
